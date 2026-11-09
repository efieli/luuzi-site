/* ============================================================
   "Tudo num app só": a janela inteira do LUUZI para explorar.
   Todas as seções, balões (apps, mouses, telas, botões, ações),
   skins e ajustes. Cada seção guarda ajustes por app.
   EDITE AQUI — tipos de uso e apps de exemplo (fictícios): USES
   ============================================================ */
(function(){
const root = $("#appx"); if(!root) return;

/* ---------- dados ---------- */
const USES = [
  { id:"design", n:"Design|Design", apps:[["Vetora","Vetora","V","#FF8A00"],["Pixelo","Pixelo","Px","#2F7BFF"],["Quadro","Frame","Q","#A259FF"],["Paleta","Palette","Pa","#FF4F8B"],["Tipografia","Typeface","T","#1FB57A"]] },
  { id:"video", n:"Edição de vídeo|Video editing", apps:[["Corte","Cut","C","#6C4BFF"],["Timeline Pro","Timeline Pro","Tl","#E8562A"],["Cena 3D","Scene 3D","3D","#16A1C9"],["Som Lab","Sound Lab","S","#2EAA5C"],["Cor Studio","Color Studio","Co","#D63F7C"]] },
  { id:"prod", n:"Produtividade|Productivity", apps:[["Planilhas","Sheets","Pl","#1E9E5A"],["Documentos","Docs","D","#2D6BF0"],["Apresenta","Present","Ap","#F08A24"],["Agenda","Calendar","Ag","#E5484D"],["Correio","Mail","@","#3A8DFF"]] },
  { id:"code", n:"Programação|Coding", apps:[["CodeNinho","CodeNest","{}","#2F80ED"],["Terminal X","Terminal X",">_","#3F404C"],["Banco Studio","DB Studio","DB","#8E5CF7"],["Ramos","Branches","R","#F05133"],["API Lab","API Lab","AP","#14A38B"]] },
  { id:"daily", n:"Dia a dia|Everyday", apps:[["Navegador","Browser","N","#2F7BFF"],["Mensagens","Messages","M","#29C46A"],["Música","Music","♪","#FF3B5C"],["Fotos","Photos","F","#F5A524"],["Vídeos","Videos","▶","#E5484D"]] },
];
const APP = {}; USES.forEach(u => u.apps.forEach(([pt,en,ini,c]) => APP[pt] = { pt, en, ini, c, use:u.id }));
const appName = id => id==="global" ? "Global" : L([APP[id].pt, APP[id].en]);
const appIcon = (id, s=18) => id==="global"
  ? `<span class="ax-ai g" style="--s:${s}px">${I.globe}</span>`
  : `<span class="ax-ai" style="--s:${s}px;--c:${APP[id].c}">${APP[id].ini}</span>`;

const MICE = [["all","Todos os mouses|All mice"],["mx","MX Master 3S|MX Master 3S"],["g203","G203 LIGHTSYNC|G203 LIGHTSYNC"],["magic","Magic Mouse|Magic Mouse"]];
const SCRS = [["all","Todas as telas|All displays"],["mb","Tela do MacBook|MacBook display"],["ext","Monitor 27″|27″ monitor"]];
const BTNS = [["mid","Meio|Middle"],["cmid","⌘ + Meio|⌘ + Middle"]];
const ACTIONS = ["Voltar ⌘[|Back ⌘[","Avançar ⌘]|Forward ⌘]","Fechar aba ⌘W|Close tab ⌘W","Mission Control|Mission Control","Exposé do app|App Exposé",
  "Espaço à esquerda|Space to the left","Espaço à direita|Space to the right","Mostrar mesa|Show Desktop","Atalho de teclado…|Keyboard shortcut…","Abrir um app…|Open an app…","Clique do meio|Middle click","Nenhuma|None"];
const SKINS = [["LUUZI|LUUZI","#E8562A"],["Oceano|Ocean","#3B7BE8"],["Floresta|Forest","#3E9A5E"],["Uva|Grape","#8A4FE8"],["Rosa|Rose","#D9457A"],["Grafite|Graphite","#4A4D57"]];
const PRESETS = [["Padrão|Standard","Equilibrado|Balanced","M4 30 C 10 8, 30 6, 56 6",220],["Suave|Smooth","Desliza devagar|Glides slowly","M4 30 C 24 18, 38 8, 56 7",520],
  ["Rápido|Fast","Vai longe|Goes far","M4 30 C 6 6, 18 4, 56 4",160],["Preciso|Precise","Passos curtos|Short steps","M4 30 C 10 16, 22 12, 56 12",120],["Instantâneo|Instant","Sem animação|No animation","M6 30 V6 H56",0]];
const MODES = ["Automático|Automatic","Pixels|Pixels","Trackpad|Trackpad","Linhas|Lines"];
const MODE_TXT = ["O LUUZI escolhe pelo tipo de cada app: Linhas para apps que só entendem linhas, Trackpad para os apps da Apple, Pixels para o resto.|LUUZI picks by app type: Lines for apps that only understand lines, Trackpad for Apple's apps, Pixels for the rest.",
  "Rola pixel a pixel, do jeito mais preciso.|Scrolls pixel by pixel, the most precise way.",
  "Faz o app achar que é um trackpad, com a inércia do macOS no fim.|Makes the app think it's a trackpad, with the macOS momentum at the end.",
  "Para apps que só entendem linhas inteiras.|For apps that only understand whole lines."];
const I = {
  globe:'<svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="6.2"/><path d="M1.8 8h12.4M8 1.8c2 2.2 2 10.2 0 12.4M8 1.8c-2 2.2-2 10.2 0 12.4"/></svg>',
  mouse:'<svg viewBox="0 0 16 16"><rect x="4" y="1.5" width="8" height="13" rx="4"/><path d="M8 4v2.5"/></svg>',
  display:'<svg viewBox="0 0 16 16"><rect x="1.5" y="2.5" width="13" height="9" rx="1.5"/><path d="M6 14h4M8 11.5V14"/></svg>',
  chev:'<svg viewBox="0 0 16 16"><path d="M4.5 6.5 8 10l3.5-3.5"/></svg>',
  plus:'<svg viewBox="0 0 16 16"><path d="M8 3v10M3 8h10"/></svg>',
  x:'<svg viewBox="0 0 16 16"><path d="M4.5 4.5l7 7M11.5 4.5l-7 7"/></svg>',
  check:'<svg viewBox="0 0 16 16"><path d="M3.5 8.5l3 3 6-7"/></svg>',
  updown:'<svg viewBox="0 0 16 16"><path d="M5 13V3M2.5 5.5 5 3l2.5 2.5M11 3v10M8.5 10.5 11 13l2.5-2.5"/></svg>',
  lr:'<svg viewBox="0 0 16 16"><path d="M3 5h10M10.5 2.5 13 5l-2.5 2.5M13 11H3M5.5 8.5 3 11l2.5 2.5"/></svg>',
  skins:'<svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="6.3"/><circle cx="5.6" cy="6.4" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="11" cy="8.4" r="1"/><path d="M7.5 11.5c0-1 .8-1.6 1.6-1.6"/></svg>',
  ajustes:'<svg viewBox="0 0 16 16"><path d="M2 4.5h12M2 11.5h12"/><circle cx="5.5" cy="4.5" r="1.8"/><circle cx="10.5" cy="11.5" r="1.8"/></svg>',
  pen:'<svg viewBox="0 0 16 16"><path d="M2.5 13.5c2-3 3.5-.5 5-3s3-5 6-6"/></svg>',
  sort:'<svg viewBox="0 0 16 16"><path d="M5 13V3M2.5 5.5 5 3l2.5 2.5M11 3v10M8.5 10.5 11 13l2.5-2.5"/></svg>',
  handle:'<svg viewBox="0 0 16 16"><path d="M3 5.5h10M3 8h10M3 10.5h10"/></svg>',
  folder:'<svg viewBox="0 0 16 16"><path d="M1.8 4.2c0-.7.5-1.2 1.2-1.2h3l1.5 1.6h5.5c.7 0 1.2.5 1.2 1.2v6.2c0 .7-.5 1.2-1.2 1.2H3c-.7 0-1.2-.5-1.2-1.2z"/></svg>',
};
const SIDE = [["rolagem","Rolagem suave|Smooth Scrolling","rolagem"],["cursor","Cursor|Pointer","cursor"],["botoes","Botões|Buttons","botoes"],["gestos","Gestos|Gestures","gestos"],
  ["arrastar","Arrastar|Drag","arrastar"],["auto","Auto Scroll|Autoscroll","autoscroll"]];
const SUB = { rolagem:"Como a roda do mouse move as páginas.|How the mouse wheel moves pages.", cursor:"Velocidade e aceleração do ponteiro para mouses e mesas.|Pointer speed and acceleration for mice and tablets.",
  botoes:"Identifique os botões do mouse e dê uma ação para cada um.|Identify your mouse buttons and give each one an action.", gestos:"Segure um botão e desenhe uma forma para disparar uma ação.|Hold a button and draw a shape to trigger an action.",
  arrastar:"Segure um botão e arraste a página como num trackpad.|Hold a button and drag the page like on a trackpad.", auto:"Clique com o botão do meio e afaste o mouse para rolar sozinho.|Click the middle button and move the mouse to scroll by itself.",
  skins:"A cor do LUUZI e o desenho dos gestos na tela.|LUUZI's color and the on-screen gesture drawing.", ajustes:"Atualizações, aparência, cópia dos ajustes e lugares ignorados.|Updates, appearance, settings backup and ignored places." };
const TITLE = { rolagem:"Rolagem suave|Smooth Scrolling", cursor:"Cursor|Pointer", botoes:"Botões|Buttons", gestos:"Gestos|Gestures", arrastar:"Arrastar|Drag", auto:"Auto Scroll|Autoscroll", skins:"Skins|Skins", ajustes:"Ajustes|Settings" };

/* ---------- estado ---------- */
const DEF = {
  rolagem:{ on:1, invV:0, invH:0, preset:0, speed:2.35, accel:.82, mode:0 },
  cursor:{ on:1, speed:.18, acc:0, inten:.69 },
  botoes:{ on:1 },
  gestos:{ on:1, tol:20, min:20, draw:1, name:1 },
  arrastar:{ on:1, invV:0, invH:0, mode:0, speed:1.3, mom:.87, hand:1 },
  auto:{ on:1, invV:0, invH:0, act:1, quick:0, mode:2, icon:0 },
  skins:{ skin:0, tint:0, width:11, glow:.34 },
  ajustes:{ upd:2, login:1, dock:1, menubar:0, games:1, look:0, lang:0 },
};
const SCOPED = ["rolagem","cursor","botoes","gestos","arrastar","auto"];
const st = {
  sec:"rolagem", use:null, balloon:null, adding:false, more:false,
  apps:Object.fromEntries(SCOPED.map(s => [s, [{id:"global", on:true}]])),
  sel:Object.fromEntries(SCOPED.map(s => [s, {app:"global", mouse:"all", scr:"all", btn: s==="gestos"?"cmid":"mid"}])),
  vals:{},                                    // "seção|app|mouse|tela" → valores próprios
  buttons:[{name:"Meio|Middle", id:"Meio|Middle", use:"no Auto Scroll e Arrastar|in Autoscroll and Drag", act:-1},{name:"⌘ + Meio|⌘ + Middle", id:"⌘ + Meio|⌘ + Middle", use:"nos Gestos|in Gestures", act:-1}],
  gest:[["Cima|Up",3,"up"],["Baixo|Down",4,"down"],["Esquerda|Left",6,"left"],["Direita|Right",5,"right"]],
  identifying:false, testMsg:"",
};
const key = (s, o={}) => { const x = {...st.sel[s], ...o}; return `${s}|${x.app}|${x.mouse}|${x.scr}`; };
function val(s, k){
  if(!SCOPED.includes(s)) return (st.vals[s]||{})[k] ?? DEF[s][k];
  const x = st.sel[s];
  for(const kk of [key(s), key(s,{scr:"all"}), key(s,{mouse:"all",scr:"all"}), key(s,{app:"global",mouse:"all",scr:"all"})])
    if(st.vals[kk] && k in st.vals[kk]) return st.vals[kk][k];
  return DEF[s][k];
}
function setv(s, k, v){ const kk = SCOPED.includes(s) ? key(s) : s; (st.vals[kk] ||= {})[k] = v; }
const own = (s, app) => Object.keys(st.vals).some(k => k.startsWith(`${s}|${app}|`) && Object.keys(st.vals[k]).length);

/* ---------- peças ---------- */
const sw = (k, on, label) => `<button type="button" class="ax-sw${on?" on":""}" data-tog="${k}" role="switch" aria-checked="${!!on}" aria-label="${label||""}"></button>`;
const seg = (k, opts, v, dark) => `<div class="ax-seg${dark?" dk":""}">${opts.map((o,i)=>`<button type="button" class="${i===v?"on":""}" data-set="${k}" data-v="${i}">${L(o)}</button>`).join("")}</div>`;
const chk = (k, on, label, dis) => `<label class="ax-chk${dis?" dis":""}"><button type="button" class="${on?"on":""}" data-tog="${k}" role="checkbox" aria-checked="${!!on}">${I.check}</button><span>${L(label)}</span></label>`;
const pill = (k, on, icon, label) => `<button type="button" class="ax-pill${on?" on":""}" data-tog="${k}">${icon}${L(label)}</button>`;
function slider(k, label, min, max, v, fmt, lo, hi, dis, mark){
  const p = (v-min)/(max-min);
  return `<div class="ax-sl${dis?" dis":""}"><div class="ax-slh"><span>${L(label)}</span><b>${fmt(v)}</b></div>
    <div class="ax-tr" data-sl="${k}" data-min="${min}" data-max="${max}" data-fmt="${fmt.name||""}"><i style="width:${p*100}%"></i>${mark!=null?`<s style="left:${(mark-min)/(max-min)*100}%"></s>`:""}<u style="left:${p*100}%"></u></div>
    ${lo?`<div class="ax-sll"><span>${L(lo)}</span><span>${L(hi)}</span></div>`:""}</div>`;
}
const card = (t, body, cls="", right="") => `<div class="ax-card ${cls}">${t?`<div class="ax-ct"><h4>${L(t)}</h4>${right}</div>`:""}${body}</div>`;
const curve = d => `<svg viewBox="0 0 60 36"><path d="M3 33H57" stroke="var(--lz-line)" stroke-dasharray="2 3"/><path d="${d}" fill="none" stroke="var(--accent)" stroke-width="2.4" stroke-linecap="round"/></svg>`;
const FMT = { x2:v=>v.toFixed(2)+"×", p:v=>Math.round(v*100)+"%", n4:v=>v.toFixed(4), px:v=>Math.round(v)+" px", pt:v=>v.toFixed(1)+" pt", pc:v=>Math.round(v)+"%", tint:v=>v<.02?L("neutro|neutral"):Math.round(v*100)+"%" };
Object.entries(FMT).forEach(([n,f]) => Object.defineProperty(f,"name",{value:n}));

function invCard(s, t){
  return card("Inversão|Reverse Scrolling", `<p class="ax-note">${L(t)}</p><div class="ax-row">${pill("invV",val(s,"invV"),I.updown,"Vertical|Vertical")}${pill("invH",val(s,"invH"),I.lr,"Horizontal|Horizontal")}</div>`);
}
function modeCard(s){
  const m = val(s,"mode");
  return card("Como o app recebe a rolagem|How the app receives scrolling", `${seg("mode",MODES,m,true)}<p class="ax-note">${L(MODE_TXT[m])}</p>`);
}
const lines = n => Array.from({length:n},(_,i)=>`<p><em>${i+1}</em><i style="width:${30+((i*37)%45)}%"></i>${i%10===0?`<b>${L("marca|mark")} ${i/10+1}</b>`:""}</p>`).join("");

/* ---------- telas ---------- */
const SCREEN = {
  rolagem(){
    const pr = val("rolagem","preset");
    return `<div class="ax-cols"><div>
      ${invCard("rolagem","Vale para todos os presets.|Applies to all presets.")}
      ${card("Preset|Preset", `<div class="ax-presets">${PRESETS.map(([n,d,c],i)=>`<button type="button" class="ax-preset${i===pr?" on":""}" data-set="preset" data-v="${i}">${curve(c)}<b>${L(n)}</b><span>${L(d)}</span></button>`).join("")}</div>
        <p class="ax-note">${L("Escolha um preset e role no Teste ao lado para sentir a diferença.|Pick a preset and scroll in the Test to feel the difference.")}</p>`, "", `<span class="ax-tag">${L(PRESETS[pr][0])}</span>`)}
      ${card("", slider("speed","Velocidade geral|Overall speed",.1,10,val("rolagem","speed"),FMT.x2,"calma|calm","ligeira|brisk")+slider("accel","Aceleração geral|Overall acceleration",0,2,val("rolagem","accel"),FMT.x2,"constante|constant","acelera muito|speeds up a lot"))}
      ${modeCard("rolagem")}
    </div><div>${card("Teste|Test", `<p class="ax-note">${L("Gire a roda do mouse (ou dois dedos no trackpad) aqui dentro.|Turn the mouse wheel (or two fingers on a trackpad) in here.")}</p><div class="ax-test" data-test="scroll"><div class="ax-lines">${lines(60)}</div></div>`, "ax-sticky")}</div></div>`;
  },
  cursor(){
    const acc = val("cursor","acc");
    return `<div class="ax-cols one"><div>${card("Cursor|Pointer",
      slider("speed","Velocidade|Speed",0,1,val("cursor","speed"),FMT.n4,"lenta|slow","rápida|fast",0,.07) +
      `<hr><div class="ax-line"><b>${L("Aceleração|Acceleration")}</b>${sw("acc",acc)}</div>` +
      slider("inten","Intensidade|Intensity",0,1,val("cursor","inten"),FMT.n4,"nenhuma|none","forte|strong",!acc) +
      `<div class="ax-line"><span class="ax-note">${L("A linha laranja marca o padrão do macOS.|The orange line marks the macOS default.")}</span><button type="button" class="ax-btn" data-act="macdef">${L("Padrões do macOS|macOS Defaults")}</button></div>`)}
      ${card("Teste|Test", `<p class="ax-note">${L("Mova o mouse aqui dentro: o ponteiro laranja anda com a velocidade escolhida.|Move the mouse in here: the orange pointer moves at the chosen speed.")}</p><div class="ax-test ax-pad" data-test="cursor"><svg class="ax-fp" viewBox="0 0 22 22"><use href="#pointer"/></svg></div>`)}
    </div></div>`;
  },
  botoes(){
    const mouse = `<svg class="ax-mouse" viewBox="0 0 70 110"><rect x="8" y="4" width="54" height="102" rx="27" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 40h54M35 4v36" stroke="currentColor" stroke-width="2"/><rect x="31" y="14" width="8" height="16" rx="4" fill="currentColor"/><rect x="2" y="52" width="6" height="16" rx="2" fill="var(--accent)"/></svg>`;
    return `${card("Identificar botões|Identify Buttons", `<div class="ax-ident">${mouse}<div><b>${I.mouse} MX Master 3S</b>
        <p>${st.identifying ? L("<strong>Aperte um botão do mouse aqui na janela…</strong> (o direito ou um lateral, se tiver)|<strong>Press a mouse button here in the window…</strong> (right or a side one, if you have it)") : L("Clique em Identificar e aperte um botão do mouse. Ele aparece abaixo e fica disponível no Auto Scroll, Arrastar e Gestos.|Click Identify and press a mouse button. It shows up below and becomes available in Autoscroll, Drag and Gestures.")}</p>
        <button type="button" class="ax-btn ax-acc${st.identifying?" pulse":""}" data-act="identify">${st.identifying?L("Esperando o botão…|Waiting for the button…"):L("Identificar botão|Identify Button")}</button></div></div>`)}
      ${card("Botões identificados|Identified Buttons", `<p class="ax-note">${L("Clique na ação para escolher o que cada botão faz.|Click the action to choose what each button does.")}</p>
        <div class="ax-table"><div class="ax-th"><span></span><span>${L("Nome|Name")}</span><span>${L("Mouse|Mouse")}</span><span>${L("Ação|Action")}</span><span></span></div>
        ${st.buttons.map((b,i)=>`<div class="ax-tr2">${I.handle}<span><b>${L(b.name)}</b><small>${L(b.use)}</small></span>
          <button type="button" class="ax-dd" data-bal="mice" data-i="${i}">${I.mouse}${L("Todos os mouses|All mice")}${I.chev}</button>
          <button type="button" class="ax-dd${b.act<0?" dim":""}" data-bal="action" data-src="btn" data-i="${i}">${b.act<0?(i<2?L("Usado por outra seção|In use by another section"):L("Escolha uma ação|Choose an action")):L(ACTIONS[b.act])}${I.chev}</button>
          <button type="button" class="ax-x" data-act="delbtn" data-i="${i}" aria-label="${L("Excluir|Delete")}">${I.x}</button></div>`).join("")}</div>`, "", `<span class="ax-count">${st.buttons.length}</span>`)}`;
  },
  gestos(){
    const btn = L(BTNS.find(b=>b[0]===st.sel.gestos.btn)[1]);
    return `<div class="ax-cols"><div>
      ${card("Seus gestos|Your Gestures", `<p class="ax-note">${L(`Segure ${btn}, desenhe o gesto e solte. Ou desenhe no Teste ao lado.|Hold ${btn}, draw the gesture and let go. Or draw in the Test.`)}</p>
        ${st.gest.map(([n,a,d],i)=>`<div class="ax-gr">${I.handle}<canvas width="68" height="44" data-thumb="${d}"></canvas><span><b>${L(n)}</b><small>${L("1 exemplo|1 example")}</small></span>
          <button type="button" class="ax-dd" data-bal="action" data-src="gest" data-i="${i}">${L(ACTIONS[a])}${I.chev}</button><button type="button" class="ax-x" data-act="delgest" data-i="${i}">${I.x}</button></div>`).join("")}
        <button type="button" class="ax-btn ax-acc" data-act="newgest">${I.plus}${L("Novo gesto|New Gesture")}</button>`, "", `<span class="ax-count">${st.gest.length}</span>`)}
      ${card("Desenho na tela|On-Screen Drawing", chk("draw",val("gestos","draw"),"Mostrar o desenho na tela|Show the drawing on screen")+chk("name",val("gestos","name"),"Mostrar o nome do gesto no Teste|Show the gesture name in the Test")+
        `<button type="button" class="ax-btn ax-acc" data-go="skins">${I.pen}${L("Personalizar o desenho em Skins|Customize the drawing in Skins")}</button>`)}
    </div><div>${card("Teste e ajuste|Test and adjust", `<div class="ax-test ax-pad ax-dots" data-test="draw"><canvas></canvas><span class="ax-gname"></span></div>
        <p class="ax-note ax-acc">${L(`Arraste aqui com o mouse (ou o dedo) para desenhar um gesto.|Drag here with the mouse (or a finger) to draw a gesture.`)}</p><hr>
        <h5>${L("Precisão|Precision")}</h5>${slider("tol","Tolerância|Tolerance",5,50,val("gestos","tol"),FMT.pc,"rígida|strict","tolerante|tolerant")}${slider("min","Traço mínimo|Minimum stroke",5,120,val("gestos","min"),FMT.px)}`, "ax-sticky")}</div></div>`;
  },
  arrastar(){
    return `<div class="ax-cols"><div>
      ${invCard("arrastar","Muda a direção em que a página segue a mão.|Changes the direction in which the page follows your hand.")}
      ${modeCard("arrastar")}
      ${card("Movimento|Movement", slider("speed","Velocidade|Speed",.2,4,val("arrastar","speed"),FMT.x2)+slider("mom","Inércia ao soltar|Momentum on release",0,1,val("arrastar","mom"),FMT.p,"nenhuma|off","longa|long"))}
      ${card("Opções|Options", chk("hand",val("arrastar","hand"),"Mãozinha no lugar do ponteiro enquanto arrasta|Hand instead of the pointer while dragging"))}
    </div><div>${card("Teste|Test", `<p class="ax-note">${L("Segure o clique aqui dentro e arraste.|Hold the click in here and drag.")}</p><div class="ax-test" data-test="drag"><div class="ax-lines">${lines(60)}</div></div>`, "ax-sticky")}</div></div>`;
  },
  auto(){
    const act = val("auto","act"), ic = val("auto","icon");
    return `<div class="ax-cols"><div>
      ${invCard("auto","Muda a direção da rolagem ao afastar o mouse do ponto clicado.|Changes the scrolling direction as you move away from the click point.")}
      ${card("Como ativar|How to activate", `${seg("act",["Clique, estilo Windows|Click, Windows style","Só enquanto segura|Only while holding"],act,true)}
        <p class="ax-note">${L(act ? "Segure o botão e mova o mouse; soltar para a rolagem. Um clique rápido continua sendo um clique normal.|Hold the button and move the mouse; releasing stops it. A quick click is still a normal click." : "Clique uma vez e mova o mouse; clique de novo para parar.|Click once and move the mouse; click again to stop.")}</p>
        ${chk("quick",val("auto","quick"),"Um clique rápido funciona como clique do meio normal|A quick click works as a normal middle click",!act)}`)}
      ${modeCard("auto")}
      ${card("Ícone na tela|Icon on screen", `<div class="ax-icons">${["Clássico|Classic","Vertical|Vertical","Ponto|Dot","Anel|Ring","Ocultar|Hide"].map((n,i)=>`<button type="button" class="ax-preset${i===ic?" on":""}" data-set="icon" data-v="${i}">${i<4?anchorIcon(i):'<svg viewBox="-20 -20 40 40"><circle r="13" fill="none" stroke="currentColor" stroke-dasharray="3 3"/><path d="M-6 6 6-6" stroke="var(--accent)" stroke-width="2.5"/></svg>'}<b>${L(n)}</b></button>`).join("")}</div>`, "", `<span class="ax-note">${L("aparece onde você clicou|appears where you clicked")}</span>`)}
    </div><div>${card("Teste|Test", `<p class="ax-note">${L(act?"Segure o clique aqui dentro e afaste o mouse: a página rola sozinha. Solte para parar.|Hold the click in here and move away: the page scrolls by itself. Release to stop.":"Clique aqui dentro e afaste o mouse. Clique de novo para parar.|Click in here and move away. Click again to stop.")}</p>
      <div class="ax-test" data-test="auto"><div class="ax-lines">${lines(120)}</div><span class="ax-anchor"></span></div>`, "ax-sticky")}</div></div>`;
  },
  skins(){
    const k = val("skins","skin");
    return `${card("Escolha uma skin|Choose a Skin", `<div class="ax-skins">${SKINS.map(([n,c],i)=>`<button type="button" class="ax-skin${i===k?" on":""}" data-set="skin" data-v="${i}" style="--k:${c}"><svg viewBox="0 0 120 50"><path d="M10 40 C 30 10, 45 10, 60 30 S 90 40, 112 12" fill="none" stroke="${c}" stroke-width="5" stroke-linecap="round" style="filter:drop-shadow(0 0 6px ${c}88)"/></svg><span><i></i>${L(n)}</span></button>`).join("")}
      <button type="button" class="ax-skin new" data-act="newskin">${I.plus}<span>${L("Nova skin|New Skin")}</span></button></div>`, "", `<span class="ax-count">${SKINS.length}</span>`)}
      <div class="ax-cols"><div>${card(SKINS[k][0], `<h5>${L("Cores|Colors")}</h5><div class="ax-line"><span>${L("Cor do LUUZI|LUUZI color")}</span><span class="ax-swatch" style="background:${SKINS[k][1]}"></span></div>
        <p class="ax-note">${L("Botões, chaves, destaques, o ícone do app e o ícone do Auto Scroll seguem esta cor.|Buttons, switches, highlights, the app icon and the Autoscroll icon follow this color.")}</p>
        ${slider("tint","Tom do fundo|Background tint",0,1,val("skins","tint"),FMT.tint,"neutro|neutral","colorido|tinted")}`)}</div>
      <div>${card("Desenho do gesto|Gesture Drawing", `<div class="ax-trail"><canvas data-trail></canvas></div>${slider("width","Largura|Width",3,24,val("skins","width"),FMT.pt)}${slider("glow","Brilho|Glow",0,1,val("skins","glow"),FMT.p)}`)}</div></div>`;
  },
  ajustes(){
    const a = k => val("ajustes",k);
    const row = (k,t,d,ic) => `<div class="ax-set"><span class="ax-si">${ic}</span><span><b>${L(t)}</b><small>${L(d)}</small></span>${sw(k,a(k))}</div>`;
    const thumb = (i,n) => `<button type="button" class="ax-look${a("look")===i?" on":""}" data-set="look" data-v="${i}"><i class="l${i}"></i><span>${L(n)}</span></button>`;
    return `${card("", `<div class="ax-about"><span class="ax-appicon"><svg viewBox="0 0 241 234"><use href="#star" fill="#fff"/></svg></span><div><b class="ax-brand">LUUZI <em>ALPHA</em> <code>${L("Versão|Version")} 0.1.0.219</code></b><small>${L("Rolagem suave, botões, gestos e controle do ponteiro para qualquer mouse no seu Mac.|Smooth scrolling, buttons, gestures and pointer control for any mouse on your Mac.")}</small></div><button type="button" class="ax-btn ax-acc" data-act="tutorial">${L("Ver o tutorial|Show Tutorial")}</button></div>
        <hr><div class="ax-line ax-wrapl"><b>${L("Atualizações|Updates")}</b>${seg("upd",["Manual|Manual","Avisar|Notify","Instalar sozinho|Install Automatically"],a("upd"),true)}<button type="button" class="ax-btn ax-acc" data-act="check">${st.testMsg||L("Buscar atualizações|Check for Updates")}</button></div>`)}
      <div class="ax-cols even"><div>${card("Geral|General", row("login","Abrir ao iniciar|Open at login","O LUUZI abre sozinho quando você entra no Mac.|LUUZI starts up on its own when you log in.",'<svg viewBox="0 0 16 16"><path d="M8 2v6M4.6 4.4a5 5 0 1 0 6.8 0"/></svg>')+
          row("dock","Esconder do Dock|Hide Dock icon","Continua funcionando em segundo plano.|It keeps working in the background.",'<svg viewBox="0 0 16 16"><rect x="1.5" y="3" width="13" height="10" rx="2"/><path d="M4 10.5h8"/></svg>')+
          row("menubar","Esconder da barra de menus|Hide menu bar icon","Tira o balão de acesso rápido do topo da tela.|Removes the quick-access popover at the top.",'<svg viewBox="0 0 16 16"><rect x="1.5" y="3" width="13" height="10" rx="2"/><path d="M1.5 6h13"/></svg>')+
          row("games","Desligar nos jogos|Turn off in games","Jogos em tela cheia recebem o mouse sem mudanças.|Full-screen games get the mouse unchanged.",'<svg viewBox="0 0 16 16"><rect x="1.5" y="4.5" width="13" height="7.5" rx="3.5"/><path d="M5 7v3M3.5 8.5h3"/><circle cx="11" cy="8" r=".6"/></svg>'))}</div>
      <div>${card("Aparência e idioma|Appearance and Language", `<div class="ax-looks">${thumb(0,"Sistema|System")}${thumb(1,"Claro|Light")}${thumb(2,"Escuro|Dark")}</div><hr><h5>${L("Idioma|Language")}</h5>${seg("lang",["Sistema|System","Português|Português","English|English","Deutsch|Deutsch"],a("lang"))}`)}</div></div>
      <div class="ax-cols even"><div>${card("Cópia dos ajustes|Settings backup", `<p class="ax-note">${L("Todos os ajustes num arquivo só, para guardar ou levar para outro Mac.|All settings in one file, to keep or take to another Mac.")}</p><div class="ax-row"><button type="button" class="ax-btn ax-acc wide" data-act="export">${L("Exportar…|Export…")}</button><button type="button" class="ax-btn ax-acc wide" data-act="import">${L("Importar…|Import…")}</button></div>`)}</div>
      <div>${card("Lugares ignorados|Ignored places", `<p class="ax-note">${L("Apps e janelas onde o LUUZI não age, como jogos e máquinas virtuais.|Apps and windows where LUUZI stays out, like games and virtual machines.")}</p><button type="button" class="ax-btn" data-bal="apps" data-ignore="1">${I.plus}${L("Adicionar app|Add app")}</button>`)}</div></div>`;
  },
};

/* ---------- janela ---------- */
root.innerHTML = `<div class="lz ax" id="axWin"><div class="lz-lights"><i></i><i></i><i></i></div>
  <aside class="ax-side"><div class="ax-logo"><svg viewBox="0 0 426 108"><use href="#letters" fill="currentColor"/><use href="#star" fill="var(--accent)" transform="translate(314.336 0) scale(.4613 .4613)"/></svg><em>ALPHA</em></div>
    <nav class="ax-nav"></nav><nav class="ax-nav bottom"></nav></aside>
  <div class="ax-main"><div class="ax-head"></div><div class="ax-body"></div></div><div class="ax-toast"></div></div>`;
const win = $("#axWin"), nav = $(".ax-nav", win), nav2 = $(".ax-nav.bottom", win), head = $(".ax-head", win), body = $(".ax-body", win), toast = $(".ax-toast", win);
function $(s, r=document){ return r.querySelector(s); }
function $$(s, r=document){ return [...r.querySelectorAll(s)]; }
function drawNav(){
  const item = ([id,t,ic]) => `<button type="button" class="ax-item${st.sec===id?" on":""}" data-go="${id}">${ICONS[ic]||I[ic]}<span>${L(t)}</span></button>`;
  nav.innerHTML = SIDE.map(item).join("");
  nav2.innerHTML = [["skins","Skins|Skins","skins"],["ajustes","Ajustes|Settings","ajustes"]].map(item).join("");
}
function pickers(){
  const s = st.sec; if(!SCOPED.includes(s)) return "";
  const x = st.sel[s], apps = st.apps[s].filter(a=>a.id!=="global");
  const stack = apps.slice(0,3).map(a=>appIcon(a.id,14)).join("");
  let h = `<button type="button" class="ax-dd big" data-bal="apps">${x.app==="global"?I.globe:appIcon(x.app,16)}<b>${appName(x.app)}</b>${stack?`<span class="ax-stack">${stack}</span>`:""}${I.chev}</button>`;
  if(s==="rolagem"||s==="cursor") h += `<button type="button" class="ax-dd big" data-bal="mice">${I.mouse}<b>${x.mouse==="all"?L(s==="cursor"?"Todos os mouses e mesas|All mice and tablets":MICE[0][1]):L(MICE.find(m=>m[0]===x.mouse)[1])}</b>${I.chev}</button>`;
  if(["gestos","arrastar","auto"].includes(s)) h += `<button type="button" class="ax-dd big accent" data-bal="btns">${I.mouse}<b>${L(BTNS.find(b=>b[0]===x.btn)[1])}</b>${I.chev}</button>`;
  h += `<button type="button" class="ax-dd big" data-bal="scrs">${I.display}<b>${L(SCRS.find(m=>m[0]===x.scr)[1])}</b>${I.chev}</button>`;
  return `<div class="ax-pick">${h}</div>`;
}
function editing(){
  const s = st.sec; if(!SCOPED.includes(s) || s==="cursor") return "";
  const x = st.sel[s];
  if(x.app==="global") return `<p class="ax-edit">${L("Editando o ajuste Global: vale para todos os apps sem ajuste próprio.|Editing the Global settings: they apply to every app without its own settings.")}</p>`;
  return `<p class="ax-edit on">${appIcon(x.app,14)} ${L(`Editando o ajuste do ${appName(x.app)}: só vale nele.|Editing ${appName(x.app)}'s settings: they apply only there.`)}</p>`;
}
function render(keepScroll=true){
  const s = st.sec, y = body.scrollTop;
  drawNav();
  head.innerHTML = `<div class="ax-ht"><div><div class="ax-title"><h3>${L(TITLE[s])}</h3>${DEF[s].on!=null?sw("on",val(s,"on"),L(TITLE[s])):""}</div><p>${L(SUB[s])}</p></div>${pickers()}</div>${editing()}`;
  body.innerHTML = SCREEN[s]();
  body.classList.toggle("off", DEF[s].on!=null && !val(s,"on"));
  if(keepScroll) body.scrollTop = y;
  afterRender();
}
function say(msg){ toast.innerHTML = msg; toast.classList.add("show"); clearTimeout(say.t); say.t = setTimeout(()=>toast.classList.remove("show"), 2600); }

/* ---------- cores, tema e idioma da janela ---------- */
function applySkin(){
  const c = SKINS[val("skins","skin")][1]; win.style.setProperty("--accent", c);
  win.style.setProperty("--tintp", Math.round(val("skins","tint")*14)+"%");
}
function applyLook(){ const l = val("ajustes","look"); win.classList.toggle("ax-light", l===1); win.classList.toggle("ax-dark", l===2); }

/* ---------- balões ---------- */
const bal = document.createElement("div"); bal.className = "ax-bal"; win.appendChild(bal);
function openBalloon(kind, el, extra={}){
  st.balloon = {kind, el, ...extra}; drawBalloon();
}
function closeBalloon(){ st.balloon = null; st.adding = false; st.more = false; bal.classList.remove("show"); }
function drawBalloon(){
  const b = st.balloon; if(!b) return closeBalloon();
  const s = st.sec, x = st.sel[s] || {};
  let h = "";
  if(b.kind==="apps"){
    const list = b.ignore ? [] : st.apps[s];
    const sug = st.use ? USES.find(u=>u.id===st.use).apps.map(a=>a[0]) : USES.map(u=>u.apps[0][0]);
    const others = Object.keys(APP).filter(a=>!sug.includes(a));
    const taken = id => list.some(a=>a.id===id);
    h = `<div class="ax-bh"><h4>${L(b.ignore?"Ignorar um app|Ignore an app":"Aplicativos|Applications")}</h4>${b.ignore?"":`<button type="button" class="ax-plus${st.adding?" x":""}" data-act="adding">${st.adding?I.x:I.plus}</button>`}</div>`;
    if(st.adding || b.ignore){
      h += `<p class="ax-bp">${L("Adicionar um app com ajuste próprio:|Add an app with its own settings:")}</p>
        <div class="ax-bs">${st.use?L(`Sugestões para ${L(USES.find(u=>u.id===st.use).n)}|Suggestions for ${L(USES.find(u=>u.id===st.use).n)}`):L("Abertos agora|Open now")}</div>
        ${sug.map(id=>`<button type="button" class="ax-bi${taken(id)?" dim":""}" data-addapp="${id}">${appIcon(id)}<span>${appName(id)}</span>${taken(id)?`<small>${L("já está na lista|already listed")}</small>`:""}</button>`).join("")}
        ${st.use?"":`<p class="ax-hint">${L("Dica: escolha acima como você usa o Mac para ver sugestões.|Tip: pick above how you use your Mac to see suggestions.")}</p>`}
        ${st.more?`<div class="ax-bs">${L("Outros apps|Other apps")}</div>${others.map(id=>`<button type="button" class="ax-bi${taken(id)?" dim":""}" data-addapp="${id}">${appIcon(id)}<span>${appName(id)}</span></button>`).join("")}`
          :`<button type="button" class="ax-bi" data-act="more">${I.folder}<span>${L("Outro app…|Other app…")}</span></button>`}`;
    } else {
      h += `<p class="ax-bp">${L("Clique num item para editar o ajuste dele. Desmarcar um app desliga a seção nele.|Click an item to edit its settings. Unchecking an app turns this section off there.")}</p>
        ${list.map(a=>`<div class="ax-bi row${x.app===a.id?" sel":""}" data-pickapp="${a.id}"><button type="button" class="ax-ck${a.on?" on":""}" data-ckapp="${a.id}">${I.check}</button>${appIcon(a.id)}<span><b>${appName(a.id)}</b><small>${a.id==="global"?L("todos os apps sem ajuste próprio|all apps without their own settings"):!a.on?L("desmarcado: a seção não age nele|unchecked: the section stays off there"):own(s,a.id)?L("ajuste só deste app|settings for this app only"):L("igual ao Global; mude um valor para ter o próprio|same as Global; change a value to make it its own")}</small></span>${a.id==="global"?"":`<button type="button" class="ax-x" data-delapp="${a.id}">${I.x}</button>`}</div>`).join("")}
        ${list.length<2?`<p class="ax-hint">${L("Nenhum app com ajuste próprio. Use o + para adicionar.|No app with its own settings. Use + to add one.")}</p>`:""}`;
    }
  }
  if(b.kind==="mice"){
    const cur = b.i!=null ? "all" : x.mouse;
    h = `<div class="ax-bh"><h4>${L("Mouses|Mice")}</h4></div><p class="ax-bp">${L("Clique num mouse para editar o ajuste dele. Ele ganha ajuste próprio quando você muda um valor.|Click a mouse to edit its settings. It gets its own settings when you change a value.")}</p>
      ${MICE.map(([id,n])=>`<button type="button" class="ax-bi${cur===id?" sel":""}" data-pickmouse="${id}">${I.mouse}<span><b>${L(n)}</b><small>${id==="all"?L("vale para os mouses sem ajuste próprio|applies to mice without their own setting"):L("igual a Todos os mouses|same as All mice")}</small></span></button>`).join("")}`;
  }
  if(b.kind==="scrs"){
    h = `<div class="ax-bh"><h4>${L("Telas|Displays")}</h4></div><p class="ax-bp">${L("Cada tela pode ter o próprio ajuste: mais rápido no monitor grande, mais preciso no notebook.|Each display can have its own settings: faster on the big monitor, more precise on the laptop.")}</p>
      ${SCRS.map(([id,n])=>`<button type="button" class="ax-bi${x.scr===id?" sel":""}" data-pickscr="${id}">${I.display}<span><b>${L(n)}</b><small>${id==="all"?L("vale para as telas sem ajuste próprio|applies to displays without their own setting"):L("igual a Todas as telas|same as All displays")}</small></span></button>`).join("")}`;
  }
  if(b.kind==="btns"){
    h = `<div class="ax-bal-acc"><div class="ax-bh"><h4>${I.mouse} ${L("Escolha um botão|Choose a button")}</h4></div><p class="ax-bp">${L("Esta seção funciona com o botão escolhido.|This section works with the chosen button.")}</p>
      <div class="ax-bs">${L("Já adicionados|Already added")}</div><div class="ax-chips">${BTNS.map(([id,n])=>`<button type="button" class="${x.btn===id?"on":""}" data-pickbtn="${id}">${L(n)}</button>`).join("")}</div>
      <button type="button" class="ax-addbtn" data-go="botoes">${I.plus}${L("Adicionar novo botão…|Add New Button…")}</button></div>`;
  }
  if(b.kind==="action"){
    const cur = b.src==="btn" ? st.buttons[b.i].act : st.gest[b.i][1];
    h = `<div class="ax-bh"><h4>${L("Ação|Action")}</h4></div>${ACTIONS.map((a,i)=>`<button type="button" class="ax-bi small${i===cur?" sel":""}" data-pickact="${i}"><span>${L(a)}</span>${i===cur?I.check:""}</button>`).join("")}`;
  }
  bal.innerHTML = h; bal.className = "ax-bal show" + (b.kind==="btns" ? " ax-acc" : "") + (b.kind==="action" ? " list" : "");
  // posição: embaixo do botão que abriu
  const w = win.getBoundingClientRect(), r = b.el.getBoundingClientRect(), bw = Math.min(330, w.width-20);
  bal.style.width = bw+"px";
  let left = r.left - w.left + r.width/2 - bw/2; left = Math.max(10, Math.min(w.width-bw-10, left));
  bal.style.left = left+"px"; bal.style.top = (r.bottom - w.top + 8)+"px";
  bal.style.setProperty("--ax", (r.left - w.left + r.width/2 - left)+"px");
}

/* ---------- cliques ---------- */
win.addEventListener("click", e => {
  const t = e.target.closest("button,[data-pickapp]"); if(!t || !win.contains(t)) { if(!bal.contains(e.target)) closeBalloon(); return; }
  const s = st.sec, d = t.dataset;
  if(st.identifying && d.act!=="identify") return;
  if(d.go){ st.sec = d.go; closeBalloon(); render(false); body.scrollTop = 0; return; }
  if(d.bal){ if(st.balloon && st.balloon.el===t){ closeBalloon(); return; } st.adding = !!d.ignore; openBalloon(d.bal, t, {src:d.src, i:d.i!=null?+d.i:null, ignore:!!d.ignore}); return; }
  if(d.tog){ setv(s, d.tog, val(s,d.tog) ? 0 : 1); render(); if(d.tog==="on" && SCOPED.includes(s)) say(L(val(s,"on")?`${L(TITLE[s])} ligado|${L(TITLE[s])} on`:`${L(TITLE[s])} desligado|${L(TITLE[s])} off`)); return; }
  if(d.set){ setv(s, d.set, +d.v); if(s==="skins") applySkin(); if(s==="ajustes" && d.set==="look") applyLook();
    if(s==="ajustes" && d.set==="lang"){ const v=+d.v; if(v===1||v===2){ setSiteLang(v===1?"pt":"en"); return; } if(v===3) say(L("No site: português e inglês. No app: também alemão.|On the site: Portuguese and English. In the app: German too.")); }
    render(); return; }
  // balões
  if(d.act==="adding"){ st.adding = !st.adding; st.more = false; drawBalloon(); return; }
  if(d.act==="more"){ st.more = true; drawBalloon(); return; }
  if(d.addapp){ const id = d.addapp;
    if(st.balloon && st.balloon.ignore){ closeBalloon(); say(L(`${appName(id)} ignorado: o LUUZI não age nele.|${appName(id)} ignored: LUUZI stays out of it.`)); return; }
    if(!st.apps[s].some(a=>a.id===id)) st.apps[s].push({id, on:true});
    st.sel[s].app = id; st.adding = false; render(); openBalloon("apps", $('[data-bal="apps"]', head)); say(L(`${appName(id)} adicionado. Agora os ajustes que você mudar valem só nele.|${appName(id)} added. Now the settings you change apply only there.`)); return; }
  if(d.ckapp){ const a = st.apps[s].find(a=>a.id===d.ckapp); a.on = !a.on; drawBalloon(); return; }
  if(d.delapp){ st.apps[s] = st.apps[s].filter(a=>a.id!==d.delapp); if(st.sel[s].app===d.delapp) st.sel[s].app="global";
    Object.keys(st.vals).forEach(k=>{ if(k.startsWith(`${s}|${d.delapp}|`)) delete st.vals[k]; }); render(); openBalloon("apps", $('[data-bal="apps"]', head)); return; }
  if(d.pickapp){ st.sel[s].app = d.pickapp; closeBalloon(); render(); return; }
  if(d.pickmouse){ if(st.balloon.i==null){ st.sel[s].mouse = d.pickmouse; } closeBalloon(); render(); return; }
  if(d.pickscr){ st.sel[s].scr = d.pickscr; closeBalloon(); render(); return; }
  if(d.pickbtn){ st.sel[s].btn = d.pickbtn; closeBalloon(); render(); return; }
  if(d.pickact){ const b = st.balloon; if(b.src==="btn") st.buttons[b.i].act = +d.pickact; else st.gest[b.i][1] = +d.pickact; closeBalloon(); render(); return; }
  // ações
  if(d.act==="identify"){ st.identifying = !st.identifying; render(); return; }
  if(d.act==="delbtn"){ st.buttons.splice(+d.i,1); render(); say(L("Botão excluído.|Button deleted.")); return; }
  if(d.act==="delgest"){ st.gest.splice(+d.i,1); render(); say(L("Gesto excluído.|Gesture deleted.")); return; }
  if(d.act==="newgest"){ const opts=[["Diagonal|Diagonal",8,"diag"],["Zigue-zague|Zigzag",9,"zig"]]; const g=opts[st.gest.length%2]; st.gest.push([g[0],g[1],g[2]]); render(); say(L("No app, você desenha o gesto novo com o mouse.|In the app, you draw the new gesture with the mouse.")); return; }
  if(d.act==="macdef"){ setv(s,"speed",.07); setv(s,"acc",1); setv(s,"inten",.69); render(); return; }
  if(d.act==="check"){ st.testMsg = L("Você já tem a versão mais nova|You're up to date"); render(); setTimeout(()=>{ st.testMsg=""; if(st.sec==="ajustes") render(); }, 2500); return; }
  if(d.act==="tutorial"){ say(L("O tutorial aparece na primeira vez que você abre o LUUZI.|The tutorial shows up the first time you open LUUZI.")); return; }
  if(d.act==="export"){ say(L("No app, isto salva um arquivo com todos os seus ajustes.|In the app, this saves a file with all your settings.")); return; }
  if(d.act==="import"){ say(L("No app, você escolhe o arquivo de ajustes para importar.|In the app, you pick the settings file to import.")); return; }
  if(d.act==="newskin"){ say(L("No app, você cria a sua skin com qualquer cor.|In the app, you create your own skin in any color.")); return; }
});
document.addEventListener("pointerdown", e => { if(st.balloon && !bal.contains(e.target) && !e.target.closest("[data-bal]")) closeBalloon(); });
document.addEventListener("keydown", e => { if(e.key==="Escape") closeBalloon(); });

/* identificar botão: o próximo clique (que não seja o principal) vira um botão novo */
win.addEventListener("mousedown", e => {
  if(!st.identifying || e.target.closest('[data-act="identify"]')) return;
  e.preventDefault();
  const names = {1:["Meio|Middle"],2:["Direito|Right"],3:["Botão 4 · Voltar|Button 4 · Back"],4:["Botão 5 · Avançar|Button 5 · Forward"]};
  const n = names[e.button] || (e.button===0 ? null : [`Botão ${e.button+1}|Button ${e.button+1}`]);
  st.identifying = false;
  if(!n){ say(L("Esse é o clique principal. No app, ele fica de fora; tente o direito ou um lateral.|That's the main click. LUUZI leaves it alone; try the right or a side button.")); render(); return; }
  st.buttons.push({name:n[0], id:n[0], use:"pronto para usar|ready to use", act:-2}); render();
  say(L(`${L(n[0])} identificado. Escolha uma ação para ele.|${L(n[0])} identified. Choose an action for it.`));
});
win.addEventListener("contextmenu", e => { if(st.identifying) e.preventDefault(); });

/* ---------- controles deslizantes ---------- */
win.addEventListener("pointerdown", e => {
  const tr = e.target.closest(".ax-tr"); if(!tr || tr.closest(".dis")) return;
  e.preventDefault(); tr.setPointerCapture(e.pointerId);
  const s = st.sec, k = tr.dataset.sl, min = +tr.dataset.min, max = +tr.dataset.max, fmt = FMT[tr.dataset.fmt] || (v=>v.toFixed(2));
  const move = ev => { const r = tr.getBoundingClientRect(), p = Math.max(0, Math.min(1, (ev.clientX-r.left)/r.width)), v = min + (max-min)*p;
    setv(s, k, v); tr.querySelector("i").style.width = tr.querySelector("u").style.left = (p*100)+"%"; tr.parentElement.querySelector(".ax-slh b").textContent = fmt(v);
    if(s==="skins"){ applySkin(); drawTrailPreview(); } };
  move(e);
  const up = () => { tr.removeEventListener("pointermove", move); tr.removeEventListener("pointerup", up); if(s==="rolagem"||s==="gestos") return; };
  tr.addEventListener("pointermove", move); tr.addEventListener("pointerup", up);
});

/* ---------- testes que funcionam de verdade ---------- */
let anim = 0;
function afterRender(){
  cancelAnimationFrame(anim);
  const s = st.sec, on = DEF[s].on==null || val(s,"on");
  $$("canvas[data-thumb]", body).forEach(c => { const d = c.dataset.thumb, P = { up:[[.5,.85],[.5,.15]], down:[[.5,.15],[.5,.85]], left:[[.85,.5],[.15,.5]], right:[[.15,.5],[.85,.5]], diag:[[.2,.8],[.8,.2]], zig:[[.15,.7],[.4,.3],[.6,.7],[.85,.3]] }[d];
    const x = c.getContext("2d"); drawTrail(x, P.map(([a,b])=>[a*c.width,b*c.height]), {width:7, color:getComputedStyle(win).getPropertyValue("--accent").trim(), glow:0}); });
  drawTrailPreview();
  const t = $(".ax-test", body); if(!t) return;
  const kind = t.dataset.test;
  if(kind==="scroll"){
    let target = 0, y = 0;
    t.onwheel = e => { if(!on){ return; } e.preventDefault();
      const pr = PRESETS[val("rolagem","preset")], sp = val("rolagem","speed"), ac = val("rolagem","accel");
      let dy = e.deltaMode===1 ? e.deltaY*16 : e.deltaY; if(val("rolagem","invV")) dy = -dy;
      dy *= (Math.abs(dy) > 40 ? 1 + ac*.6 : 1) * sp * .55;
      target = Math.max(0, Math.min(t.scrollHeight - t.clientHeight, target + dy));
      if(!pr[3]){ y = target; t.scrollTop = y; return; }
      cancelAnimationFrame(anim); let last = performance.now();
      const step = now => { const dt = now-last; last = now; y += (target-y) * (1-Math.exp(-dt/(pr[3]/3))); t.scrollTop = y; if(Math.abs(target-y) > .5) anim = requestAnimationFrame(step); };
      anim = requestAnimationFrame(step); };
  }
  if(kind==="drag"){
    let down = false, ly = 0, v = 0;
    t.onpointerdown = e => { if(!on) return; down = true; ly = e.clientY; v = 0; t.setPointerCapture(e.pointerId); t.classList.add("grab"); cancelAnimationFrame(anim); };
    t.onpointermove = e => { if(!down) return; let dy = (e.clientY-ly) * val("arrastar","speed"); ly = e.clientY; if(val("arrastar","invV")) dy = -dy; t.scrollTop -= dy; v = dy; };
    t.onpointerup = () => { down = false; t.classList.remove("grab"); const m = val("arrastar","mom");
      const glide = () => { v *= .9 + m*.08; t.scrollTop -= v; if(Math.abs(v) > .3) anim = requestAnimationFrame(glide); }; if(m > .02) glide(); };
  }
  if(kind==="auto"){
    const a = $(".ax-anchor", t); let active = false, ax = 0, ayy = 0, my = 0, mx = 0, frac = 0;
    const icon = val("auto","icon"); a.innerHTML = icon<4 ? anchorIcon(icon) : "";
    const stop = () => { active = false; a.classList.remove("show"); cancelAnimationFrame(anim); };
    const run = () => { const dy = my-ayy, dead = 12, m = Math.max(0, Math.abs(dy)-dead), sp = Math.sign(dy) * Math.pow(m, 1.35) * .06 * (val("auto","invV")?-1:1);
      frac += sp; const whole = Math.trunc(frac); frac -= whole; t.scrollTop += whole; anim = requestAnimationFrame(run); };
    t.onpointerdown = e => { if(!on) return; const r = t.getBoundingClientRect();
      if(active && !val("auto","act")) return stop();
      active = true; ax = e.clientX-r.left; ayy = my = e.clientY-r.top; a.style.left = ax+"px"; a.style.top = (ayy + t.scrollTop)+"px"; a.classList.add("show");
      t.setPointerCapture(e.pointerId); cancelAnimationFrame(anim); run(); };
    t.onpointermove = e => { const r = t.getBoundingClientRect(); my = e.clientY-r.top; mx = e.clientX-r.left; if(active) a.style.top = (ayy + t.scrollTop)+"px"; };
    t.onpointerup = () => { if(val("auto","act")) stop(); };
    t.onscroll = () => { if(active) a.style.top = (ayy + t.scrollTop)+"px"; };
  }
  if(kind==="cursor"){
    const f = $(".ax-fp", t); let x = 60, y = 60, inside = false;
    f.style.transform = `translate(${x}px,${y}px)`;
    t.onpointermove = e => { if(!inside){ inside = true; return; } const W = t.clientWidth-16, H = t.clientHeight-16, sp = val("cursor","speed"), acc = val("cursor","acc") ? val("cursor","inten") : 0;
      const v = Math.hypot(e.movementX, e.movementY), g = (.25 + sp*2.2) * (1 + acc*Math.min(2, v/12));
      x = Math.max(0, Math.min(W, x + e.movementX*g)); y = Math.max(0, Math.min(H, y + e.movementY*g)); f.style.transform = `translate(${x}px,${y}px)`; };
    t.onpointerleave = () => { inside = false; };
  }
  if(kind==="draw"){
    const c = $("canvas", t), nm = $(".ax-gname", t), ctx = c.getContext("2d"); let pts = null;
    const size = () => { const k = dpr(); c.width = t.clientWidth*k; c.height = t.clientHeight*k; ctx.setTransform(k,0,0,k,0,0); }; size();
    const color = () => getComputedStyle(win).getPropertyValue("--accent").trim();
    t.onpointerdown = e => { const r = t.getBoundingClientRect(); pts = [[e.clientX-r.left, e.clientY-r.top]]; t.setPointerCapture(e.pointerId); nm.classList.remove("show"); };
    t.onpointermove = e => { if(!pts) return; const r = t.getBoundingClientRect(); pts.push([e.clientX-r.left, e.clientY-r.top]);
      if(val("gestos","draw")){ ctx.clearRect(0,0,c.width,c.height); drawTrail(ctx, pts, {color:color(), width:val("skins","width"), glow:val("skins","glow")}); } };
    t.onpointerup = () => { if(!pts) return; const p = pts; pts = null;
      const [x0,y0] = p[0], [x1,y1] = p[p.length-1], dx = x1-x0, dy = y1-y0, len = Math.hypot(dx,dy);
      let dir = Math.abs(dx) > Math.abs(dy) ? (dx>0?"right":"left") : (dy>0?"down":"up");
      const g = st.gest.find(g=>g[2]===dir);
      nm.innerHTML = len < val("gestos","min") ? L("Curto demais: vira um clique normal|Too short: it's a normal click")
        : g ? `<b>${L(g[0])}</b> → ${L(ACTIONS[g[1]])}` : L("Nenhum gesto reconhecido|No gesture recognized");
      if(val("gestos","name")) nm.classList.add("show");
      const t0 = performance.now(); const fade = now => { const q = Math.min(1,(now-t0)/500); ctx.clearRect(0,0,c.width,c.height);
        if(val("gestos","draw")) drawTrail(ctx, p, {color:color(), width:val("skins","width"), glow:val("skins","glow"), erased:easeInOut(q)}); if(q<1) requestAnimationFrame(fade); };
      requestAnimationFrame(fade); };
  }
}
function drawTrailPreview(){
  const c = $("canvas[data-trail]", body); if(!c) return;
  const k = dpr(), w = c.clientWidth, h = c.clientHeight; c.width = w*k; c.height = h*k; const x = c.getContext("2d"); x.setTransform(k,0,0,k,0,0);
  const P = Array.from({length:30},(_,i)=>{ const t=i/29; return [w*(.06+.88*t), h*(.55 - .3*Math.sin(t*Math.PI*1.4))]; });
  drawTrail(x, P, {color:SKINS[val("skins","skin")][1], width:val("skins","width"), glow:val("skins","glow")});
}

/* ---------- como você usa o Mac → sugestões de apps ---------- */
const uses = $("#axUses");
function drawUses(){
  uses.innerHTML = `<span>${L("Como você usa o Mac?|How do you use your Mac?")}</span>` + USES.map(u=>`<button type="button" class="${st.use===u.id?"on":""}" data-use="${u.id}">${L(u.n)}</button>`).join("");
}
uses.addEventListener("click", e => { const b = e.target.closest("[data-use]"); if(!b) return;
  st.use = b.dataset.use; drawUses();
  if(!SCOPED.includes(st.sec)){ st.sec = "rolagem"; render(false); }
  st.adding = true; st.more = false; openBalloon("apps", $('[data-bal="apps"]', head));
  say(L("Estas são sugestões de apps para ter ajuste próprio. Clique num deles.|These are app suggestions for their own settings. Click one."));
});

function setSiteLang(l){ LANG = l; try{ localStorage.setItem("luuzi-lang", l); }catch(_){} applyLang(); }
langListeners.push(() => { drawUses(); render(); if(st.balloon) drawBalloon(); });
addEventListener("themechange", () => render());
addEventListener("resize", () => { if(st.balloon) drawBalloon(); });
applySkin(); applyLook(); drawUses(); render(false);
})();
