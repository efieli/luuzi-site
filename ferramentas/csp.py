"""Atualiza a CSP do index.html depois de mudar o <script> pequeno do <head>.
Uso (na pasta do site):  python3 ferramentas/csp.py"""
import re, hashlib, base64, pathlib
p = pathlib.Path(__file__).resolve().parent.parent / "index.html"
s = p.read_text()
head = s[:s.index("</head>")]
scripts = re.findall(r"<script>(.*?)</script>", head, re.S)
hashes = " ".join("'sha256-%s'" % base64.b64encode(hashlib.sha256(js.encode()).digest()).decode() for js in scripts)
s2 = re.sub(r"script-src 'self'[^;]*;", f"script-src 'self' {hashes};", s, count=1)
p.write_text(s2)
print("CSP atualizada" if s2 != s else "CSP já estava certa", "-", len(scripts), "script(s) no <head>")
