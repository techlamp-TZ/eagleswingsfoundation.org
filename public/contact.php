<?php
// Form endpoint for eagleswingsfoundation.org (contact, volunteer, event interest,
// giving requests and program support all post here).
//
// * Every valid message is saved to ../contact-submissions.jsonl (one level
//   above public_html, so it is never served to the web).
// * If ../contact-config.php returns a non-empty 'to' address, the message is
//   also emailed there (Reply-To is the visitor's address).
// * Spam protection: honeypot field, minimum time on page, per-IP rate limit.
//
// ../contact-config.php (create it on the server, not in the repo):
//   <?php return ['to' => 'info@eagleswingsfoundation.org', 'from' => 'no-reply@eagleswingsfoundation.org'];

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function respond(int $status, array $body): void
{
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_UNICODE);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'method']);
}

$root = dirname(__DIR__);
$config = is_file($root . '/contact-config.php') ? (include $root . '/contact-config.php') : [];
$config = is_array($config) ? $config : [];
$to = trim((string) ($config['to'] ?? ''));
$from = trim((string) ($config['from'] ?? 'no-reply@eagleswingsfoundation.org'));

function field(string $key, int $max): string
{
    $v = isset($_POST[$key]) && is_string($_POST[$key]) ? $_POST[$key] : '';
    $v = trim(str_replace(["\r\n", "\r"], "\n", $v));
    return mb_substr($v, 0, $max);
}

// Honeypot: real visitors never see or fill this field.
if (field('company_website', 200) !== '') {
    respond(200, ['ok' => true, 'delivered' => false]);
}

// Too-fast submissions are almost always bots.
$started = (int) field('started', 20);
if ($started > 0 && (time() - intdiv($started, 1000)) < 3) {
    respond(429, ['ok' => false, 'error' => 'too_fast']);
}

$form = field('form', 40) ?: 'contact';
$reserved = ['company_website', 'started', 'consent', 'form'];
$extras = [];
foreach ($_POST as $key => $value) {
    if (!is_string($value) || in_array($key, $reserved, true) || !preg_match('/^[A-Za-z0-9_\-]{1,40}$/', (string) $key)) {
        continue;
    }
    $v = field((string) $key, 5000);
    if ($v !== '') {
        $extras[(string) $key] = $v;
    }
}

$name = $extras['name'] ?? $extras['fullName'] ?? trim(($extras['firstName'] ?? '') . ' ' . ($extras['lastName'] ?? ''));
$email = $extras['email'] ?? '';
$subject = $extras['subject'] ?? ucfirst(str_replace('-', ' ', $form));
$message = $extras['message'] ?? '';

if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(422, ['ok' => false, 'error' => 'invalid']);
}
if ($form === 'contact' && $message === '') {
    respond(422, ['ok' => false, 'error' => 'invalid']);
}
if (($form === 'contact' || isset($_POST['consent'])) && field('consent', 5) === '') {
    respond(422, ['ok' => false, 'error' => 'consent']);
}

// Per-IP rate limit: 5 messages per hour.
$dataDir = $root . '/contact-data';
if (!is_dir($dataDir)) {
    @mkdir($dataDir, 0700, true);
}
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateFile = $dataDir . '/rate-' . hash('sha256', $ip) . '.json';
$hits = is_file($rateFile) ? (json_decode((string) file_get_contents($rateFile), true) ?: []) : [];
$hits = array_values(array_filter($hits, fn ($t) => is_int($t) && $t > time() - 3600));
if (count($hits) >= 5) {
    respond(429, ['ok' => false, 'error' => 'rate_limit']);
}
$hits[] = time();
@file_put_contents($rateFile, json_encode($hits), LOCK_EX);

$record = ['received' => gmdate('c'), 'form' => $form, 'name' => $name, 'email' => $email, 'subject' => $subject, 'fields' => $extras];
$saved = @file_put_contents($root . '/contact-submissions.jsonl', json_encode($record, JSON_UNESCAPED_UNICODE) . "\n", FILE_APPEND | LOCK_EX);
@chmod($root . '/contact-submissions.jsonl', 0600);

$delivered = false;
if ($to !== '' && filter_var($to, FILTER_VALIDATE_EMAIL)) {
    $clean = fn (string $s): string => str_replace(["\r", "\n"], ' ', $s);
    $mailSubject = '=?UTF-8?B?' . base64_encode('[Website: ' . $clean($form) . '] ' . $clean($subject)) . '?=';
    $lines = [];
    foreach ($extras as $k => $v) {
        $lines[] = ucfirst($k) . ': ' . ($k === 'message' ? "\n" . $v : $clean($v));
    }
    $body = "New submission from the website ({$clean($form)})\n\n" . implode("\n", $lines) . "\n";
    $headers = [
        'From: Eagle\'s Wings Website <' . $clean($from) . '>',
        'Reply-To: ' . $clean($name) . ' <' . $clean($email) . '>',
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
    ];
    $delivered = @mail($to, $mailSubject, $body, implode("\r\n", $headers));
}

if (!$delivered && $saved === false) {
    respond(500, ['ok' => false, 'error' => 'server']);
}
respond(200, ['ok' => true, 'delivered' => $delivered]);
