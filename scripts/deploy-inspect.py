# Deploy helper for eagleswingsfoundation.org (Hostinger shared hosting).
# Phase 1: connect and inspect the account structure to locate the web root.
import sys
import paramiko

HOST = "145.14.152.26"
PORT = 65002
USER = "u378355462"
PASS = sys.argv[1] if len(sys.argv) > 1 else ""

ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
ssh.connect(HOST, port=PORT, username=USER, password=PASS, timeout=40, look_for_keys=False, allow_agent=False, banner_timeout=40, auth_timeout=40)
sftp = ssh.open_sftp()

print("=== home:", sftp.normalize("."), "===")
for name in sorted(sftp.listdir(".")):
    try:
        st = sftp.stat(name)
        kind = "DIR " if st.st_mode & 0o040000 else "FILE"
        print(f"{kind} {name}")
    except Exception as e:
        print(f"?    {name} ({e})")

for cand in ["public_html", "domains/eagleswingsfoundation.org/public_html", "domains"]:
    try:
        sftp.stat(cand)
        print(f"\n=== EXISTS: {cand} ===")
        for name in sorted(sftp.listdir(cand))[:40]:
            print("   ", name)
    except Exception:
        pass

ssh.close()
print("\nDONE")
