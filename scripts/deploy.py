# Deploy the built static export (out/) to the Hostinger web root.
# Usage: python scripts/deploy.py "<password>"
import sys
import paramiko

HOST = "145.14.152.26"
PORT = 65002
USER = "u378355462"
PASS = sys.argv[1] if len(sys.argv) > 1 else ""
BASE = r"c:\Users\seles\Pictures\eaglewings faundation\eagleswings-next"
TARBALL = BASE + r"\out-deploy.tar.gz"
WEBROOT = "domains/eagleswingsfoundation.org/public_html"

# Old build leftovers that must not shadow or stale-serve the new site.
STALE = ["_meta", "assets", "rss.xml", "sitemap.xml", "donate-page.html", "_next"]

NEW_HTACCESS = """Options -Indexes

# Missing pages use the exported 404
ErrorDocument 404 /404.html

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Serve extensionless URLs as their exported .html file. Next exports both
  # about.html and an about/ metadata directory, so this must run even when a
  # same-named directory exists (no !-d condition here).
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME}.html -f
  RewriteRule ^(.+?)/?$ $1.html [L]
</IfModule>

# Built assets are content-hashed: cache them hard. Pages stay fresh.
<IfModule mod_headers.c>
  <If "%{REQUEST_URI} =~ m#^/_next/static/#">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </If>
  <FilesMatch "\\.(html|txt)$">
    Header set Cache-Control "no-cache, must-revalidate"
  </FilesMatch>
</IfModule>

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript application/json image/svg+xml
</IfModule>
"""

def run(ssh, cmd):
    print(">", cmd)
    _, out, err = ssh.exec_command(cmd, timeout=600)
    so = out.read().decode("utf-8", "replace").strip()
    se = err.read().decode("utf-8", "replace").strip()
    code = out.channel.recv_exit_status()
    if so:
        print(so[:1500])
    if se:
        print("stderr:", se[:800])
    print("exit:", code)
    return code

ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
ssh.connect(HOST, port=PORT, username=USER, password=PASS, timeout=40, look_for_keys=False, allow_agent=False, banner_timeout=40, auth_timeout=40)
sftp = ssh.open_sftp()

print("=== 1. remove stale leftovers ===")
for p in STALE:
    run(ssh, f"rm -rf {WEBROOT}/{p}")

print("=== 2. upload tarball ===")
sftp.put(TARBALL, "out-deploy.tar.gz")
print("uploaded")

print("=== 3. extract into webroot ===")
run(ssh, f"tar -xzf out-deploy.tar.gz -C {WEBROOT}")
run(ssh, "rm -f out-deploy.tar.gz")

print("=== 4. write .htaccess ===")
with sftp.open(WEBROOT + "/.htaccess", "w") as f:
    f.write(NEW_HTACCESS)
print("written")

print("=== 5. purge lite-speed marker ===")
run(ssh, f"touch {WEBROOT}/.lscache_purge")

print("=== 6. verify ===")
run(ssh, f"ls {WEBROOT} | wc -l")
run(ssh, f"ls {WEBROOT}/about.html {WEBROOT}/donate.html {WEBROOT}/index.html {WEBROOT}/404.html")
run(ssh, f"test ! -e {WEBROOT}/_meta && echo ' _meta removed' ; test ! -e {WEBROOT}/assets && echo ' assets removed'")

ssh.close()
print("DEPLOY DONE")
