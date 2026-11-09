# Site do LUUZI

Página única de apresentação do LUUZI (app de mouse para Mac). Publicada pelo GitHub Pages:
**https://efieli.github.io/luuzi-site/** (branch `main`, raiz do repositório).

## Como está feito

- `index.html`: HTML + CSS. `app.js`: todo o JavaScript. `fonts/`: Inter e JetBrains Mono (usadas fora do Mac). Sem build e sem dependências.
- Para publicar: commit e push na `main`. O site se atualiza em cerca de 1 minuto.
- Ao mudar o `app.js`, aumente o número em `<script src="app.js?v=N">` no fim do `index.html` (força os navegadores a baixar a versão nova).
- Testar localmente: `python3 -m http.server 8765` nesta pasta e abrir `http://127.0.0.1:8765/`.

## Onde editar (procure por `EDITE AQUI` no index.html)

- **Cores**: variáveis no topo do `<style>` (`--accent` é o laranja #E8562A do app). Modo claro e escuro seguem o sistema, ou o botão de tema no topo (`data-theme` no `<html>`).
- **Textos**: o português (Brasil) está direto no HTML, nos elementos com `data-t="..."`.
  O inglês fica no objeto `TEXT.en`, com as mesmas chaves. Textos usados pelo código ficam em `S`.
  Quem tem o navegador em português vê PT; os demais veem EN. `?lang=pt` ou `?lang=en` forçam.
- **Download**: `DOWNLOADS` (um link para Apple Silicon e outro para Intel; hoje o build é universal, então os dois são iguais).
- **Cadastro antes do download**: `BREVO_FORM_URL` (formulário "LUUZI Alpha - download" no Brevo, lista "LUUZI Alpha").
- **Janela do LUUZI desenhada** (animações "Configure no LUUZI" e seção "Tudo num app só"): `SCREENS`, `CFG`, `lzBody()`.
- **Seção "Cada app, cada mouse, cada tela"**: `CTX_APPS`, `CTX_MICE`, `CTX_SCREENS`.
- **Constelação**: `STARS` e `LINKS`. **Botões por app**: `BUTTONS`.

## Regras de estilo combinadas com o dono

- Minimalista, com glow, degradês suaves e transições com ease in-out.
- Usar os nomes que o app usa (Rolagem suave, Botões, Gestos, Auto Scroll, Cursor; em inglês Smooth Scrolling, Buttons, Gestures, Autoscroll, Pointer).
- Textos curtos e diretos, focados no que a pessoa ganha. Sem português de Portugal.
- Nunca deixar uma palavra sozinha numa linha; depois de um ponto, quebrar para a linha seguinte (`<br>`). A função `noOrphans()` cuida da última linha.
- Rolagem livre, sem "snap" entre as seções. A primeira dobra deixa aparecer o começo da próxima.
- Fonte: SF Pro no Mac; Inter (Google Fonts) nos outros computadores.

## Segurança (não remover)

- A CSP fica numa `<meta>` no topo do `index.html` (o GitHub Pages não deixa configurar cabeçalhos). Só permite scripts do próprio site, fontes do próprio site e conexões com o Brevo (`*.sibforms.com`).
- Não use `<script>` inline nem `onclick="..."` no HTML: a CSP bloqueia. Código novo vai no `app.js`.
  A única exceção é o script pequeno do `<head>` (tema sem piscar + proteção contra iframe); se mudá-lo, rode `python3 ferramentas/csp.py`.
- Se adicionar um serviço externo (analytics, vídeo, outra fonte), inclua o domínio na diretiva certa da CSP, senão ele será bloqueado.
- Nunca colocar dados digitados pelo visitante em `innerHTML`; use `textContent`.
- Formulário: campo escondido (honeypot), tempo mínimo de 2,5 s, validação de nome e e-mail, bloqueio de e-mails descartáveis (`DISPOSABLE`) e limite de 3 envios a cada 10 min por navegador. A proteção de verdade fica no Brevo (dupla confirmação/captcha).
