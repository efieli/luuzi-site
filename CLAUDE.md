# Site do LUUZI

Página única de apresentação do LUUZI (app de mouse para Mac). Publicada pelo GitHub Pages:
**https://efieli.github.io/luuzi-site/** (branch `main`, raiz do repositório).

## Como está feito

- Tudo fica em um arquivo só: `index.html` (HTML + CSS + JavaScript, sem build e sem dependências).
- Para publicar: commit e push na `main`. O site se atualiza em cerca de 1 minuto.
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
