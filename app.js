/* ============================================================
   EDITE AQUI — downloads, cadastro, prints e textos
   ============================================================ */
/* Um link por tipo de Mac. Hoje o build é universal (roda nos dois), então os dois apontam para o mesmo arquivo.
   Quando houver builds separados, troque cada link. */
const DOWNLOADS = {
  arm:   "https://efieli.github.io/luuzi-releases/alpha/LUUZI-0.1.0.219.zip",  // Apple Silicon (M1, M2, M3…)
  intel: "https://efieli.github.io/luuzi-releases/alpha/LUUZI-0.1.0.219.zip",  // Intel
};

/* Formulário "LUUZI Alpha - download" no Brevo (lista LUUZI Alpha). Os cadastros aparecem em Brevo › Contatos. */
const BREVO_FORM_URL = "https://6cc41f43.sibforms.com/serve/MUIFAGM8vY_3BiW1ztNeYYENZjSV2amEx3zmA9ZS9YfxgEZLYC0cGQ2bniK91mR9GMZ-JBt5NKorAAswS_v_jq8S4tin3-w8FtJJrkIs6dzQ4wXJqoIHRJ7IptI3O6TcWxdyG4NbTrXkN8RywGxusbsjsfzDr1ngE0DZWWLtFvxY2pdd_PTSiEERx48jKtTSb_AQI188V56aAp72wQ==";

/* Janela do LUUZI desenhada: telas, textos curtos e o que a animação faz em cada seção.
   from = tela aberta no começo · ctl = opção que o cursor escolhe depois de ligar a seção */
const SCREENS = {
  rolagem:    { t:"Rolagem suave|Smooth Scrolling", s:"Como a roda do mouse move as páginas.|How the mouse wheel moves pages." },
  cursor:     { t:"Cursor|Pointer",                 s:"A velocidade do ponteiro.|How fast the pointer moves." },
  botoes:     { t:"Botões|Buttons",                 s:"Uma ação para cada botão.|An action for each button." },
  gestos:     { t:"Gestos|Gestures",                s:"Segure um botão e desenhe.|Hold a button and draw." },
  arrastar:   { t:"Arrastar|Drag",                  s:"Segure e arraste o conteúdo.|Hold and drag the content." },
  autoscroll: { t:"Auto Scroll|Autoscroll",         s:"Clique e afaste o mouse.|Click and move the mouse away." },
};
const CFG = {
  rolagem:    { from:"cursor",   ctl:"opt1" },
  botoes:     { from:"rolagem",  ctl:"row0" },
  gestos:     { from:"botoes",   ctl:"row2" },
  autoscroll: { from:"gestos",   ctl:"opt0" },
  cursor:     { from:"rolagem",  ctl:"knob", drag:[.30,.80], then:"acc" },
};

/* Textos em português (Brasil) e inglês (resto do mundo). As chaves batem com data-t="..." na página. */
const TEXT = {
  pt: {
    "title":"LUUZI — seu mouse, fluido no Mac",
  },
  en: {
    "title":"LUUZI — your mouse, as fluid as your Mac",
    "top.cta":"Download free",
    "hero.h":'Your mouse,<br><span class="grad">as fluid as your Mac.</span>',
    "hero.p":"Any mouse, with the smoothness and shortcuts of a trackpad.<br>Your way.",
    "hero.cta":"Download the free alpha", "hero.see":"See what it does", "hero.scroll":"scroll",
    "rol.h":"Smooth Scrolling", "rol.p":"Every turn of the wheel becomes one continuous, gentle glide, just like a trackpad.",
    "rol.chips":'<span class="chip">Works in <b>every app</b></span><span class="chip">Trackpad <b>momentum</b></span><span class="chip">Speed <b>your way</b></span>',
    "rol.bar":"mouse wheel ↓", "rol.off":"Without LUUZI", "rol.on":"With LUUZI",
    "bot.h":"Buttons", "bot.p":"Each button does what you want: back, close tab, open an app, a shortcut.<br>And it switches on its own with the app in front.",
    "bot.chips":'<span class="chip"><b>Per app</b></span><span class="chip"><b>Per mouse</b></span><span class="chip"><b>Per display</b></span>',
    "ges.h":"Gestures", "ges.p":"Hold a button and draw with the mouse.<br>Switching Spaces, opening Mission Control or showing the desktop is one gesture away.",
    "ges.left":"Space to the right", "ges.right":"Space to the left", "ges.up":"Mission Control", "ges.down":"Show Desktop",
    "ges.d1":"Desktop 1", "ges.d2":"Desktop 2", "ges.d3":"Desktop 3",
    "auto.h":"Autoscroll", "auto.p":"Click and move the mouse away: the page scrolls by itself, faster the farther you go.<br>No wheel spinning.",
    "auto.chips":'<span class="chip"><b>Autoscroll</b></span><span class="chip"><b>Drag</b> the content</span>', "auto.bar":"article.html",
    "cur.h":"Pointer", "cur.p":"Every mouse with its own speed.<br>And if you like, turn acceleration off: the pointer always moves exactly as much as your hand.", "cur.speed":"Speed", "cur.acc":"Acceleration", "cur.hand":"your hand", "cur.bar":"move your mouse here",
    "cada.h":"Every app, every mouse, every display.", "cada.p":"Every LUUZI section can have its own settings per app, per mouse and per display.<br>Switch apps, mice or monitors and LUUZI switches along, on its own.",
    "cada.chips":'<span class="chip"><b>Smooth Scrolling</b></span><span class="chip"><b>Buttons</b></span><span class="chip"><b>Gestures</b></span><span class="chip"><b>Autoscroll</b></span><span class="chip"><b>Pointer</b></span>',
    "inf.h":'One star.<br><span class="grad">Endless possibilities.</span>',
    "inf.p":"Stars form endless constellations.<br>In LUUZI, every setting is a star: combine buttons, gestures and speeds per app, per mouse and per display, and shape your mouse your way.",
    "app.h":"All in one app.", "app.p":"Simple to set up.<br>Click around.",
    "dl.h":'Use it before everyone else.<br><span class="grad">For free.</span>',
    "dl.p":'The alpha is free for everyone who tries it before the official launch.<br>And those who help build LUUZI now will get a <b style="color:var(--text)">special offer at launch</b>.',
    "dl.perks":"<span><b>Free</b>during the alpha</span><span><b>Automatic</b>updates</span>", "dl.btn":"Download LUUZI alpha",
    "m.h":"Download LUUZI alpha", "m.p":"Leave your name and email to secure the special launch offer.",
    "m.name":"Name", "m.email":"Email", "m.btn":"Download free", "m.done":"Your download has started",
    "m.thanks":"Thanks for helping build LUUZI. If the download doesn't start,", "m.again":"click here",
  },
};
/* Textos usados pelo código (os dois idiomas lado a lado) */
const S = {
  step1:["Configure no LUUZI","Set it up in LUUZI"], step2:["Na prática","In action"],
  req:["Grátis · macOS 14 ou mais novo · Apple Silicon e Intel","Free · macOS 14 or later · Apple Silicon and Intel"],
  reqArch:["Grátis · macOS 14 ou mais novo · versão para Mac com ","Free · macOS 14 or later · version for Macs with "],
  reqNoMac:["O LUUZI é para Mac (macOS 14 ou mais novo). Cadastre-se e baixe no seu Mac.","LUUZI is for Mac (macOS 14 or later). Sign up and download it on your Mac."],
  privacy:["Só usamos seu e-mail para falar do LUUZI. Sem spam.","We only use your email to talk about LUUZI. No spam."],
  forMac:["Versão para Mac com ","Version for Macs with "],
  errName:["Diga seu nome.","Tell us your name."], errEmail:["Confira o e-mail.","Check your email."], errLimit:["Você já se cadastrou. Tente de novo em alguns minutos.","You already signed up. Try again in a few minutes."], sending:["Enviando…","Sending…"],
};
const BUTTONS = [ // botão do mouse → ação, por app
  { app:"Safari", maps:[[3,"4 · VOLTAR|4 · BACK","Voltar ⌘[|Back ⌘["],[4,"5 · AVANÇAR|5 · FORWARD","Avançar ⌘]|Forward ⌘]"],[2,"3 · MEIO|3 · MIDDLE","Fechar aba ⌘W|Close tab ⌘W"]] },
  { app:"Figma",  maps:[[3,"4 · VOLTAR|4 · BACK","Desfazer ⌘Z|Undo ⌘Z"],[4,"5 · AVANÇAR|5 · FORWARD","Refazer ⌘⇧Z|Redo ⌘⇧Z"],[2,"3 · MEIO|3 · MIDDLE","Mission Control|Mission Control"]] },
  { app:"Finder", maps:[[3,"4 · VOLTAR|4 · BACK","Espaço à esquerda|Space to the left"],[4,"5 · AVANÇAR|5 · FORWARD","Espaço à direita|Space to the right"],[2,"3 · MEIO|3 · MIDDLE","Abrir Música|Open Music"]] },
];
/* Seção "Cada app, cada mouse, cada tela": o que muda em cada combinação */
const CTX_APPS = [
  { n:"Safari",   scroll:"Suave|Smooth",    b4:"Voltar ⌘[|Back ⌘[" },
  { n:"Figma",    scroll:"Preciso|Precise", b4:"Desfazer ⌘Z|Undo ⌘Z" },
  { n:"Premiere", scroll:"Linhas|Lines",    b4:"Marcador M|Marker M" },
];
const CTX_MICE = [
  { n:"MX Master",   v:1.4, a:true  },
  { n:"Magic Mouse", v:1.0, a:false },
  { n:"G203",        v:2.1, a:false },
];
const CTX_SCREENS = [
  { n:"MacBook",                   k:1   },
  { n:"Monitor 4K|4K monitor",     k:1.5 },
];
/* Estrelas da constelação: cada uma é um ajuste do LUUZI ("pt|en", x, y de 0 a 1) */
const STARS = [
  ["Rolagem suave|Smooth Scrolling",.10,.30],["Velocidade|Speed",.20,.62],["Inércia|Momentum",.30,.22],["Botões|Buttons",.40,.52],["Por app|Per app",.50,.14],
  ["Gestos|Gestures",.60,.68],["Atalhos|Shortcuts",.66,.30],["Auto Scroll|Autoscroll",.76,.58],["Arrastar|Drag",.84,.22],["Cursor|Pointer",.92,.50],
  ["Por mouse|Per mouse",.26,.88],["Por tela|Per display",.72,.88],["Curvas|Curves",.46,.86],["Mission Control|Mission Control",.88,.82],["Spaces|Spaces",.06,.72],
];
const LINKS = [[0,2],[2,4],[4,6],[6,8],[8,9],[0,1],[1,3],[3,5],[5,7],[7,9],[3,4],[1,10],[10,12],[12,5],[5,11],[11,7],[7,13],[0,14],[14,1],[6,7],[12,11]];

/* Posição dos brilhos do fundo em cada seção (x, y em vmax) */
const AURA = [
  [[0,0],[0,0],[0,0]],[[-8,30],[-30,-10],[20,-10]],[[10,40],[-20,-20],[50,-20]],[[60,10],[-60,40],[-10,-30]],
  [[70,-10],[-50,30],[0,-10]],[[20,20],[-10,40],[40,-40]],[[30,10],[-20,10],[10,-20]],[[50,20],[-30,30],[0,-30]],[[40,30],[-40,0],[-20,-20]],[[30,15],[-30,10],[20,-25]],
];

/* ============================================================ */
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const easeInOut = t => t<.5 ? 4*t*t*t : 1-Math.pow(-2*t+2,3)/2;
const sleep = ms => new Promise(r => setTimeout(r, ms));
const cssVar = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
const dpr = () => Math.min(2, window.devicePixelRatio || 1);
$("#yr").textContent = new Date().getFullYear();

/* ---------- idioma: português para o Brasil, inglês para o resto do mundo ---------- */
let LANG = (() => {
  try { const q=new URLSearchParams(location.search).get("lang"); if(q==="pt"||q==="en") return q; } catch(_){}
  try { const s=localStorage.getItem("luuzi-lang"); if(s==="pt"||s==="en") return s; } catch(_){}
  const langs=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||"en"]).map(l=>l.toLowerCase());
  return langs[0].startsWith("pt") ? "pt" : "en";
})();
const L = pair => Array.isArray(pair) ? pair[LANG==="pt"?0:1] : String(pair).split("|")[LANG==="pt"?0:1] ?? pair;
const ORIGINAL = {}; $$("[data-t]").forEach(el => { ORIGINAL[el.dataset.t] = ORIGINAL[el.dataset.t] ?? el.innerHTML; });
const langListeners = [];
function noOrphans(root){
  // em cada trecho entre <br>, troca o último espaço por um espaço que não quebra
  const lines=[[]], walk=document.createTreeWalker(root, NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT);
  while(walk.nextNode()){ const n=walk.currentNode; if(n.nodeName==="BR") lines.push([]); else if(n.nodeType===3) lines[lines.length-1].push(n); }
  lines.forEach(nodes=>{ for(let i=nodes.length-1;i>=0;i--){ const t=nodes[i].nodeValue, k=t.trimEnd().lastIndexOf(" "); if(k>0){ nodes[i].nodeValue=t.slice(0,k)+" "+t.slice(k+1); break; } } });
}
function applyLang(){
  document.documentElement.lang = LANG==="pt" ? "pt-BR" : "en";
  document.title = (TEXT[LANG].title) || TEXT.pt.title;
  $$("[data-t]").forEach(el => { const k=el.dataset.t; el.innerHTML = LANG==="pt" ? ORIGINAL[k] : (TEXT.en[k] ?? ORIGINAL[k]); });
  $$(".lang button").forEach(b => b.classList.toggle("on", b.dataset.lang===LANG));
  $$(".dots a").forEach((a,i) => { const s=sections[i]; a.firstChild.textContent = LANG==="pt" ? s.dataset.title : (s.dataset.titleEn||s.dataset.title); });
  langListeners.forEach(f => f());
  $$('h1,h2,.lead,.sheet p,.perks span').forEach(noOrphans);
}
$$(".lang button").forEach(b => b.addEventListener("click", () => { LANG=b.dataset.lang; try{ localStorage.setItem("luuzi-lang",LANG); }catch(_){} applyLang(); }));

/* Curva Bézier cúbica, como a BezierCurve do app: devolve y para um x de 0 a 1 */
function bezier(x1,y1,x2,y2){
  const cx=3*x1, bx=3*(x2-x1)-cx, ax=1-cx-bx, cy=3*y1, by=3*(y2-y1)-cy, ay=1-cy-by;
  const X=t=>((ax*t+bx)*t+cx)*t, Y=t=>((ay*t+by)*t+cy)*t, dX=t=>(3*ax*t+2*bx)*t+cx;
  return x=>{ if(x<=0) return 0; if(x>=1) return 1; let t=x; for(let i=0;i<8;i++){ const d=dX(t); if(Math.abs(d)<1e-6) break; t-=(X(t)-x)/d; } return Y(Math.min(1,Math.max(0,t))); };
}

/* Traço do gesto igual ao do app (TrailRenderer): grosso com bolinha no começo, afinando até o fim, com brilho */
function densify(pts){ const out=[pts[0]]; for(let i=1;i<pts.length;i++){ const a=pts[i-1], b=pts[i], n=Math.max(1,Math.floor(Math.hypot(b[0]-a[0],b[1]-a[1])/3)); for(let k=1;k<=n;k++) out.push([a[0]+(b[0]-a[0])*k/n, a[1]+(b[1]-a[1])*k/n]); } return out; }
function drawTrail(ctx, raw, {width=11, color=cssVar("--accent"), glow=.35, erased=0, head=true}={}){
  if(raw.length<2) return;
  const pts=densify(raw); let total=0; for(let i=1;i<pts.length;i++) total+=Math.hypot(pts[i][0]-pts[i-1][0],pts[i][1]-pts[i-1][1]);
  ctx.save(); ctx.lineCap="round"; ctx.strokeStyle=ctx.fillStyle=color;
  if(glow>0){ ctx.shadowColor=color; ctx.shadowBlur=width*(.4+glow*1.6); }
  let done=0;
  for(let i=1;i<pts.length;i++){
    const len=Math.hypot(pts[i][0]-pts[i-1][0],pts[i][1]-pts[i-1][1]);
    if(done/total >= erased){
      ctx.lineWidth = width + (width*.12 - width) * (done/total);
      ctx.beginPath(); ctx.moveTo(pts[i-1][0],pts[i-1][1]); ctx.lineTo(pts[i][0],pts[i][1]); ctx.stroke();
    }
    done+=len;
  }
  if(head && erased<.02){ ctx.beginPath(); ctx.arc(pts[0][0],pts[0][1],width*.62,0,7); ctx.fill(); }
  ctx.restore();
}

/* ---------- seções: entrada, navegação e fundo ---------- */
const sections = $$("main section"), nav = $(".dots"), blobs = $$(".blob");
sections.forEach(s => { const a = document.createElement("a"); a.href = "#"+s.id; a.innerHTML = `<span></span>`; nav.appendChild(a); });
const navLinks = $$(".dots a"), active = new Set();
const reveal = new IntersectionObserver(es => es.forEach(e => e.target.classList.toggle("in", e.isIntersecting)), { threshold:0 });
sections.forEach(s => reveal.observe(s));
const io = new IntersectionObserver(es => es.forEach(e => {
  const s = e.target, i = sections.indexOf(s);
  if (e.isIntersecting) {
    active.add(s.id);
    navLinks.forEach((a,k) => a.classList.toggle("on", k===i));
    (AURA[i]||AURA[0]).forEach(([x,y],k) => blobs[k].style.transform = `translate(${x}vmax,${y}vmax)`);
  } else { active.delete(s.id); }
}), { rootMargin:"-35% 0px -35% 0px", threshold:0 });
sections.forEach(s => io.observe(s));
const isOn = id => active.has(id);

/* ---------- céu de estrelas no fundo ---------- */
(function(){
  const c=$("#sky"), ctx=c.getContext("2d"); let W,H,stars=[],mx=0,my=0;
  const make=()=>{ W=c.width=innerWidth*dpr(); H=c.height=innerHeight*dpr(); const n=Math.round(innerWidth*innerHeight/(innerWidth<700?16000:9000));
    stars=Array.from({length:n},()=>({x:Math.random()*W,y:Math.random()*H,r:(Math.random()*1.2+.3)*dpr(),t:Math.random()*6.28,s:.4+Math.random()*1.2,z:.3+Math.random()})); };
  let lastW=innerWidth; make(); addEventListener("resize",()=>{ if(innerWidth!==lastW || !matchMedia("(pointer:coarse)").matches){ lastW=innerWidth; make(); } });
  let dot=cssVar("--star-dot"); addEventListener("themechange",()=>{ dot=cssVar("--star-dot"); });
  const calm=matchMedia("(prefers-reduced-motion: reduce)");
  addEventListener("pointermove",e=>{ mx=e.clientX/innerWidth-.5; my=e.clientY/innerHeight-.5; });
  (function f(now){ if(!calm.matches) requestAnimationFrame(f); else setTimeout(()=>requestAnimationFrame(f),1000); ctx.clearRect(0,0,W,H); ctx.fillStyle=dot;
    const off=scrollY*.05*dpr();
    for(const s of stars){ ctx.globalAlpha=(.25+.75*(.5+.5*Math.sin(now/1000*s.s+s.t)))*.7;
      const x=((s.x+mx*30*s.z*dpr())%W+W)%W, y=((s.y-off*s.z+my*30*s.z*dpr())%H+H)%H; ctx.beginPath(); ctx.arc(x,y,s.r,0,7); ctx.fill(); }
    ctx.globalAlpha=1; })(0);
})();

/* ---------- janela do LUUZI desenhada ---------- */
const ICONS = {
  rolagem:'<svg viewBox="0 0 16 16"><rect x="4" y="1.5" width="8" height="13" rx="4"/><path d="M8 4.2v2.6"/></svg>',
  cursor:'<svg viewBox="0 0 16 16"><path d="M3 2.5l10 4.6-4.4 1.5L7 13z"/></svg>',
  botoes:'<svg viewBox="0 0 16 16"><rect x="3.5" y="1.5" width="9" height="13" rx="4.5"/><path d="M8 1.5v5M3.5 6.5h9"/></svg>',
  gestos:'<svg viewBox="0 0 16 16"><path d="M1.8 7.5c2.2-3 4.2 2.6 6.6-.2 1-1.2 2.2-1.6 3.6-1.3M10.5 9.5l3.5 3.5M14 9.5v3.5h-3.5"/></svg>',
  arrastar:'<svg viewBox="0 0 16 16"><circle cx="3.5" cy="3.5" r="1.6"/><circle cx="12.5" cy="12.5" r="1.6"/><path d="M5.2 5.2l5.6 5.6" stroke-dasharray="1.6 1.8"/></svg>',
  autoscroll:'<svg viewBox="0 0 16 16"><path d="M8 1.6l2.2 2.6H5.8zM8 14.4l2.2-2.6H5.8z"/><circle cx="8" cy="8" r="1.5"/></svg>',
};
const ORDER = ["rolagem","cursor","botoes","gestos","arrastar","autoscroll"];
const gThumb = (d, x, y) => `<svg viewBox="0 0 34 22"><path d="${d}" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/><circle cx="${x}" cy="${y}" r="3" fill="currentColor"/></svg>`;
const curveSvg = d => `<svg viewBox="0 0 60 36"><path d="M3 33H57" stroke="var(--lz-line)" stroke-width="1"/><path d="${d}" fill="none" stroke="var(--accent)" stroke-width="2.2" stroke-linecap="round"/></svg>`;
const anchorIcon = k => `<svg viewBox="-20 -20 40 40">${k<2?'<circle r="15" fill="#3F404C" fill-opacity=".35" stroke="currentColor" stroke-opacity=".3"/>':''}
  ${k===0?'<path d="M0-12l3 4h-6zM0 12l3-4h-6zM12 0l-4 3v-6zM-12 0l4 3v-6z" fill="currentColor"/>':''}${k===1?'<path d="M0-12l3 4h-6zM0 12l3-4h-6z" fill="currentColor"/>':''}
  ${k===2?'<circle r="9" fill="var(--accent)" fill-opacity=".35"/><circle r="4.5" fill="var(--accent)" stroke="#fff" stroke-width="1.5"/>':''}${k===3?'<circle r="11" fill="none" stroke="var(--accent)" stroke-width="2.5"/><circle r="3.5" fill="#3F404C"/>':''}
  ${k<2?'<circle r="2" fill="currentColor"/>':''}</svg>`;
function lzBody(id){
  switch(id){
    case "rolagem": return `<div class="lz-card"><h5>Preset</h5><div class="lz-grid">${[["Padrão|Standard","M3 31 C 12 6, 30 4, 57 4"],["Suave|Smooth","M3 31 C 26 22, 40 7, 57 5"],["Rápido|Fast","M3 31 C 6 4, 20 3, 57 3"],["Preciso|Precise","M3 31 C 10 14, 22 11, 57 11"]]
      .map(([n,d],i)=>`<div class="lz-opt${i===0?" on":""}" data-k="opt${i}">${curveSvg(d)}<b>${L(n)}</b></div>`).join("")}</div></div>`;
    case "cursor": return `<div class="lz-card"><h5>${L("Velocidade|Speed")}</h5><div class="lz-sl" data-k="sl"><div class="f" style="width:30%"></div><div class="kn" data-k="knob" style="left:30%"></div></div>
      <div class="lz-lbl"><span>${L("lenta|slow")}</span><span>${L("rápida|fast")}</span></div>
      <div class="lz-row" style="margin:16px 0 0"><span class="lbl">${L("Aceleração|Acceleration")}</span><span class="lz-tog on" data-k="acc"></span></div></div>`;
    case "botoes": return `<div class="lz-card"><h5>${L("Botões do mouse|Mouse buttons")}</h5>${[["4 · VOLTAR|4 · BACK","Voltar ⌘[|Back ⌘["],["5 · AVANÇAR|5 · FORWARD","Avançar ⌘]|Forward ⌘]"],["3 · MEIO|3 · MIDDLE","Fechar aba ⌘W|Close tab ⌘W"]]
      .map(([k,v],i)=>`<div class="lz-row" data-k="row${i}"><span class="k">${L(k)}</span><span class="v">${L(v)}</span></div>`).join("")}</div>`;
    case "gestos": return `<div class="lz-card"><h5>${L("Seus gestos|Your gestures")}</h5>${[
      [gThumb("M28 11H6",28,11),"Espaço à direita|Space to the right"],[gThumb("M6 11H28",6,11),"Espaço à esquerda|Space to the left"],
      [gThumb("M17 19V4",17,19),"Mission Control|Mission Control"],[gThumb("M17 3V18",17,3),"Mostrar mesa|Show Desktop"]]
      .map(([g,v],i)=>`<div class="lz-row" data-k="row${i}">${g}<span class="v">${L(v)}</span></div>`).join("")}</div>`;
    case "arrastar": return `<div class="lz-card"><h5>${L("Botão para arrastar|Drag button")}</h5><div class="lz-row" data-k="row0"><span class="k">${L("3 · MEIO|3 · MIDDLE")}</span><span class="v">${L("Arrastar a página|Drag the page")}</span></div></div>`;
    case "autoscroll": return `<div class="lz-card"><h5>${L("Ícone na tela|Icon on screen")}</h5><div class="lz-grid">${["Clássico|Classic","Vertical|Vertical","Ponto|Dot","Anel|Ring"]
      .map((n,i)=>`<div class="lz-opt${i===3?" on":""}" data-k="opt${i}" style="text-align:center">${anchorIcon(i)}<b>${L(n)}</b></div>`).join("")}</div></div>`;
  }
}
const lzScreen = (id,on) => `<div class="lz-head"><h3>${L(SCREENS[id].t)}</h3><span class="lz-tog${on?" on":""}" data-k="tog"></span></div><p class="lz-sub">${L(SCREENS[id].s)}</p>${lzBody(id)}`;
function lzWindow(active,on=true){
  const el=document.createElement("div"); el.className="lz"+(on?"":" lz-off");
  el.innerHTML=`<div class="lz-lights"><i></i><i></i><i></i></div>
    <aside class="lz-side"><svg class="lz-logo" viewBox="0 0 426 108"><use href="#letters" fill="currentColor"/><use href="#star" fill="var(--accent)" transform="translate(314.336 0) scale(.4613 .4613)"/></svg>
    ${ORDER.map(k=>`<div class="lz-item${k===active?" on":""}" data-s="${k}">${ICONS[k]}<span>${L(SCREENS[k].t)}</span></div>`).join("")}</aside>
    <div class="lz-main">${lzScreen(active,on)}</div><svg class="lz-cur" viewBox="0 0 22 22"><use href="#pointer"/></svg><span class="lz-rip"></span>`;
  return el;
}
function lzShow(win,id,on){ win.classList.toggle("lz-off",!on); win.querySelector(".lz-main").innerHTML=lzScreen(id,on); win.querySelectorAll(".lz-item").forEach(i=>i.classList.toggle("on",i.dataset.s===id)); }
/* centro de um elemento em coordenadas da janela desenhada (640 × 440) */
function lzPos(el,root){ let x=el.offsetWidth/2, y=el.offsetHeight/2; while(el && el!==root){ x+=el.offsetLeft; y+=el.offsetTop; el=el.offsetParent; } return [x,y]; }

/* ---------- "Configure no LUUZI" → "Na prática", em cada palco ----------
   Começa do início quando o quadro aparece na tela e para quando sai.
   O seletor embaixo do quadro deixa a pessoa escolher o que ver. */
const STOP = Symbol("stop");
(function(){
  $$(".stage[data-cfg]").forEach(stage => {
    const id=stage.dataset.cfg, c=CFG[id];
    const box=document.createElement("div"); box.className="cfg"; box.innerHTML=`<div class="cam"></div>`;
    const step=document.createElement("div"); step.className="step"; step.setAttribute("role","group");
    step.innerHTML='<button type="button"></button><button type="button"></button>';
    // o seletor fica embaixo do quadro: os dois vão dentro de um bloco que faz a entrada na tela
    const holder=document.createElement("div"); holder.className="stage-wrap r"; holder.style.cssText=stage.style.cssText;
    stage.classList.remove("r"); stage.removeAttribute("style"); stage.replaceWith(holder); holder.append(stage, step); stage.append(box);
    const cam=box.querySelector(".cam"), [s1,s2]=step.children;
    const setLang=()=>{ s1.textContent=L(S.step1); s2.textContent=L(S.step2); step.setAttribute("aria-label",L(["Ver","Show"])); }; setLang(); langListeners.push(setLang);
    const mark=n=>{ [s1,s2].forEach((b,i)=>{ b.classList.toggle("on",i===n); b.setAttribute("aria-pressed",i===n); }); };
    let win, base=1, tok=0, manual=false;
    const wait=async(ms,t)=>{ await sleep(ms); if(t!==tok) throw STOP; };
    // câmera: z = aproximação; [px,py] = ponto da janela que fica no centro do palco
    const camTo=(z,p,instant)=>{ const W=stage.clientWidth, H=stage.clientHeight; base=Math.min(W/640,H/440)*.9;
      const k=base*z, [px,py]=p||[320,220];
      let tx=W/2-px*k, ty=H/2-py*k;
      if(z>1){ tx=Math.min(W*.12,Math.max(W*.88-640*k,tx)); ty=Math.min(H*.12,Math.max(H*.88-440*k,ty)); }
      cam.style.transition=instant?"none":""; cam.style.transform=`translate(${tx}px,${ty}px) scale(${k})`; };
    const q=k=>win.querySelector(`[data-k="${k}"]`);
    const cur=()=>win.querySelector(".lz-cur");
    const curTo=(p,instant)=>{ const c=cur(); c.style.transition=instant?"none":""; c.style.left=(p[0]-3)+"px"; c.style.top=(p[1]-2)+"px"; };
    const click=async(p,t)=>{ const r=win.querySelector(".lz-rip"); r.style.left=p[0]+"px"; r.style.top=p[1]+"px"; r.classList.remove("go"); void r.offsetWidth; r.classList.add("go");
      cur().style.transform="scale(.82)"; await wait(160,t); cur().style.transform=""; };
    async function goClick(el,z,t){ const p=lzPos(el,win); camTo(z,p); curTo(p); await wait(1050,t); await click(p,t); return p; }
    // 1 · configurar: abre a seção, liga, escolhe
    async function configure(t){
      win=lzWindow(c.from,true); cam.innerHTML=""; cam.appendChild(win);
      camTo(1,null,true); curTo([560,400],true);
      stage.classList.add("cfg-on"); mark(0);
      await wait(800,t);
      await goClick(win.querySelector(`.lz-item[data-s="${id}"]`),1.9,t);
      lzShow(win,id,false); await wait(650,t);
      await goClick(q("tog"),2.3,t);
      q("tog").classList.add("on"); win.classList.remove("lz-off"); await wait(750,t);
      const ctl=q(c.ctl);
      await goClick(ctl,2,t);
      if(c.drag){ const [a,b]=c.drag, sl=q("sl"), f=sl.querySelector(".f"), t0=performance.now();
        await new Promise(res=>{ const g=n=>{ const e=easeInOut(Math.min(1,(n-t0)/1100)), x=a+(b-a)*e;
          ctl.style.left=f.style.width=(x*100)+"%"; curTo(lzPos(ctl,win),true); e<1&&t===tok?requestAnimationFrame(g):res(); }; requestAnimationFrame(g); });
        if(t!==tok) throw STOP;
      } else { ctl.parentElement.querySelectorAll(".on").forEach(e=>e.classList.remove("on")); ctl.classList.add("on"); }
      if(c.then){ await wait(500,t); const x=q(c.then); await goClick(x,2.3,t); x.classList.toggle("on"); }   // ex.: desliga a aceleração
      await wait(900,t);
      camTo(1); await wait(1100,t);
    }
    // 2 · na prática (os gestos têm a própria sequência; os outros mostram por alguns segundos)
    async function practice(t){
      stage.classList.remove("cfg-on"); mark(1);
      if(stage.practice) await stage.practice(()=>t===tok); else await wait(6500,t);
      if(t!==tok) throw STOP;
    }
    async function play(from){
      const t=++tok;
      try{
        if(from==="cfg") await configure(t);
        while(true){ await practice(t); if(!manual) await configure(t); }   // escolha da pessoa: fica no que ela pediu
      }catch(e){ if(e!==STOP) throw e; }
    }
    s1.addEventListener("click",()=>{ manual=true; play("cfg"); });
    s2.addEventListener("click",()=>{ manual=true; play("practice"); });
    mark(1);
    new IntersectionObserver(es=>es.forEach(e=>{
      if(e.isIntersecting){ manual=false; play("cfg"); }    // apareceu: começa do início
      else tok++;                                           // saiu da tela: para
    }),{ threshold:.55 }).observe(stage);
  });
})();

/* ---------- 2. rolagem suave: degraus x deslize contínuo ---------- */
(function(){
  const colors=["#E8562A","#3B5BFF","#FF4FA3","#2E9A64","#8A4FE8","#febc2e"];
  const N=24, ROW=56;
  const fill=el=>{ for(let i=0;i<N*2;i++){ const d=document.createElement("div"); d.style.setProperty("--c",colors[i%6]+"bb"); d.style.setProperty("--w",(40+((i*37)%45))+"%"); el.appendChild(d);} };
  const A=$("#feedA"), B=$("#feedB"); fill(A); fill(B);
  const LOOP=N*ROW, NOTCH=70, EVERY=.24;
  let target=0, y=0, last=performance.now(), acc=0;
  (function tick(now){
    requestAnimationFrame(tick);
    const dt=Math.min(.05,(now-last)/1000); last=now;
    if(!isOn("rolagem")) return;
    acc+=dt; while(acc>=EVERY){ acc-=EVERY; target+=NOTCH; }
    A.style.transform=`translateY(${-(target%LOOP)}px)`;              // sem LUUZI: pula a cada giro
    y += (target-y)*(1-Math.exp(-dt/.45));                            // com LUUZI: segue devagar, sem parar
    B.style.transform=`translateY(${-(y%LOOP)}px)`;
  })(last);
})();

/* ---------- 3. botões ---------- */
(function(){
  const maps=$("#maps"), tabs=$$("#apptabs span"), btns=$$(".mouse .btnz"); let a=0,k=0;
  const render=()=>{ maps.innerHTML=BUTTONS[a].maps.map(m=>`<div class="map"><span class="n">${L(m[1])}</span><span class="arrow">→</span><span class="act">${L(m[2])}</span></div>`).join(""); tabs.forEach((t,i)=>t.classList.toggle("on",i===a)); $$("#maps .map").forEach((m,i)=>m.classList.toggle("on",i===k)); };
  render(); langListeners.push(render);
  setInterval(()=>{ if(!isOn("botoes")) return;
    k++; if(k>=BUTTONS[a].maps.length){ k=0; a=(a+1)%BUTTONS.length; }
    render(); const b=BUTTONS[a].maps[k][0]; btns.forEach(el=>el.classList.toggle("on",+el.dataset.b===b)); },1500);
})();

/* ---------- 4. gestos: o traço do app + troca de Space ---------- */
const GESTURES = {
  left:  [[.82,.52],[.62,.49],[.40,.47],[.18,.50]],
  right: [[.18,.48],[.40,.51],[.62,.53],[.82,.50]],
  up:    [[.50,.82],[.48,.62],[.49,.40],[.52,.18]],
  down:  [[.50,.18],[.52,.40],[.51,.62],[.48,.82]],
};
(function(){
  const thumbs=$$("#gmap canvas");
  const drawThumbs=()=>thumbs.forEach(c=>{ const x=c.getContext("2d"); x.clearRect(0,0,c.width,c.height);
    drawTrail(x, GESTURES[c.dataset.dir].map(([a,b])=>[a*c.width,b*c.height]), {width:8,color:cssVar("--text"),glow:0}); });
  drawThumbs(); addEventListener("themechange",drawThumbs);

  const stage=$("#gStage"), cv=$("#trail"), ctx=cv.getContext("2d"), cur=$("#gCursor"), pill=$("#pill"), spaces=$("#spaces"), items=$$("#gmap div");
  let space=1; spaces.style.transform=`translateX(-${space*100}%)`;
  const size=()=>{ const r=stage.getBoundingClientRect(); cv.width=r.width*dpr(); cv.height=r.height*dpr(); return r; };
  const anim=(dur,fn)=>new Promise((res,rej)=>{ const t0=performance.now(); const f=n=>{ if(!alive()) return rej(STOP); const p=Math.min(1,(n-t0)/dur); fn(p); p<1?requestAnimationFrame(f):res(); }; requestAnimationFrame(f); });
  const place=(x,y)=>cur.style.transform=`translate(${x-3}px,${y-2}px)`;
  let alive=()=>true;
  const nap=async ms=>{ await sleep(ms); if(!alive()) throw STOP; };
  async function gesture(dir){
    const r=size(), k=dpr(), dx=dir==="left"?-1:dir==="right"?1:0;
    const pts=GESTURES[dir].map(([a,b])=>[a*r.width,b*r.height]);
    items.forEach(d=>d.classList.toggle("on",d.dataset.g===dir));
    const [sx,sy]=pts[0];
    await anim(650,p=>{ const e=easeInOut(p); place(r.width/2+(sx-r.width/2)*e, r.height*.75+(sy-r.height*.75)*e); });
    await nap(250);
    const path=densify(pts), drawn=[];
    await anim(700,p=>{ const e=1-Math.pow(1-p,2), n=Math.max(2,Math.round(e*path.length)); drawn.length=0; drawn.push(...path.slice(0,n));
      const [x,y]=drawn[drawn.length-1]; place(x,y);
      ctx.setTransform(k,0,0,k,0,0); ctx.clearRect(0,0,r.width,r.height); drawTrail(ctx,drawn); });
    const [ex,ey]=drawn[drawn.length-1];
    pill.textContent=$(`#gmap div[data-g="${dir}"]`).textContent.trim();
    pill.style.left=ex+"px"; pill.style.top=(ey-24)+"px"; pill.classList.add("show");
    if(dx){ space=Math.max(0,Math.min(2,space+(dx<0?1:-1))); spaces.style.transform=`translateX(-${space*100}%)`; }
    if(dir==="up") stage.classList.add("mc-on");        // Mission Control: as janelas se espalham e aparecem as mesas
    if(dir==="down") stage.classList.add("desk-on");    // Mostrar mesa: as janelas saem para os lados
    await anim(550,p=>{ ctx.clearRect(0,0,r.width,r.height); drawTrail(ctx,drawn,{erased:easeInOut(p)}); });   // sai apagando
    ctx.clearRect(0,0,r.width,r.height);
    await nap(700); pill.classList.remove("show");
    if(dir==="up"||dir==="down"){ await nap(1100); stage.classList.remove("mc-on","desk-on"); await nap(900); }
    await nap(450);
  }
  // na prática: os quatro gestos inteiros e depois volta para o app (nenhum desenho fica pela metade)
  const clean=()=>{ const r=stage.getBoundingClientRect(); ctx.setTransform(1,0,0,1,0,0); ctx.clearRect(0,0,cv.width,cv.height);
    pill.classList.remove("show"); stage.classList.remove("mc-on","desk-on"); items.forEach(d=>d.classList.remove("on"));
    space=1; spaces.style.transform=`translateX(-${space*100}%)`; place(r.width/2,r.height*.75); };
  stage.practice=async ok=>{ alive=ok; try{ for(const d of ["left","up","right","down"]) await gesture(d); }
    catch(e){ if(e!==STOP) throw e; clean(); } };
})();

/* ---------- 5. auto scroll: ícone Clássico com o elástico do app ---------- */
(function(){
  const st=$("#aStage"), page=$("#page"), cur=$("#aCursor"), svg=$("#anchor"), disc=$("#aDisc"), dot=$("#aDot"), ag=$("#aArrows");
  let html=""; for(let i=0;i<14;i++){ html+=`<p class="h"></p><p></p><p style="width:92%"></p><p style="width:80%"></p>${i%2?'<p class="img"></p>':''}<p></p><p style="width:65%"></p>`; } page.innerHTML=html;
  const S0=52, arrows=[0,90,180,270].map(rot=>{ const p=document.createElementNS("http://www.w3.org/2000/svg","path");
    const w=S0*.18,h=S0*.12,top=S0*.12-S0/2; p.setAttribute("d",`M0 ${top} L${w/2} ${top+h} L${-w/2} ${top+h}Z`); p.setAttribute("transform",`rotate(${rot})`); ag.appendChild(p); return p; });
  const AMOUNT=.81, RANGE=305, FOLLOW=.37, curve=bezier(.31,0,.6,1);   // valores padrão do app (AnchorStyle)
  let y=0, last=performance.now(), t0=last;
  (function tick(now){
    requestAnimationFrame(tick);
    const dt=Math.min(.05,(now-last)/1000); last=now;
    if(!isOn("autoscroll") || st.classList.contains("cfg-on")) { t0=now; return; }
    const r=st.getBoundingClientRect(), ax=r.width/2, ay=r.height*.42;
    const T=((now-t0)/1000)%7.5;
    let ox=0, oy=0, show=false;
    if(T>.4 && T<6.6){ show=true; const q=(T-.4)/6.2, reach=Math.sin(q*Math.PI);
      oy=reach*r.height*.36; ox=Math.sin(q*Math.PI*2)*r.width*.05*reach; }
    svg.classList.toggle("show",show);
    const d=Math.hypot(ox,oy), pull=curve(d/RANGE*1.6), a=AMOUNT*pull, ang=Math.atan2(oy,ox)*180/Math.PI, ux=d?ox/d:0, uy=d?oy/d:0;
    svg.style.transform=`translate(${ax}px,${ay}px)`;
    const k=FOLLOW*pull*.18*S0*1.4; dot.setAttribute("cx",ux*k); dot.setAttribute("cy",uy*k);
    const acc=cssVar("--accent-2");
    arrows.forEach((p,i)=>{ const on=(i===2&&oy>8)||(i===0&&oy<-8)||(i===1&&ox>14)||(i===3&&ox<-14);
      p.setAttribute("fill",on?acc:"#fff"); p.setAttribute("fill-opacity",on?1:.92); p.style.filter=on?`drop-shadow(0 0 3px ${acc})`:"none"; });
    const speed=Math.sign(oy)*Math.pow(Math.max(0,Math.abs(oy)-8),1.5)*.35;
    y+=speed*dt; const max=page.scrollHeight-r.height; if(y>max||y<0) y=0;
    page.style.transform=`translateY(${-y}px)`;
    cur.style.transform=`translate(${ax+ox-3}px,${ay+oy-2}px)`;
  })(last);
})();

/* ---------- 6. cursor: cada mouse com a sua velocidade, aceleração liga e desliga ---------- */
(function(){
  const pad=$("#pad"), real=$("#pReal"), ghost=$("#pGhost"), glow=$("#pGlow"), spd=$("#spd"), out=$("#spdOut"), acc=$("#acc"), badge=$("#pDev");
  const DEV = { mx:{n:"MX Master",v:1.6,a:true}, magic:{n:"Magic Mouse",v:1.0,a:false}, g203:{n:"G203",v:2.3,a:false} };
  let cur="mx", tx=0, ty=0, ptx=null, pty=null, rx=null, ry=null, vh=0, hover=false;
  const show=()=>{ const d=DEV[cur];
    spd.value=d.v; out.textContent=d.v.toFixed(1)+"×"; spd.style.setProperty("--p",((d.v-.5)/2.5*100)+"%");
    acc.classList.toggle("on",d.a); acc.setAttribute("aria-checked",d.a); acc.setAttribute("aria-label",L(["Aceleração","Acceleration"]));
    $$("#devs button").forEach(b=>b.classList.toggle("on",b.dataset.dev===cur));
    badge.textContent=`${d.n} · ${d.v.toFixed(1)}× · ${L(d.a?["com aceleração","acceleration on"]:["sem aceleração","no acceleration"])}`; };
  $$("#devs button").forEach(b=>b.addEventListener("click",()=>{ cur=b.dataset.dev; show(); }));
  spd.addEventListener("input",()=>{ DEV[cur].v=+spd.value; show(); });
  acc.addEventListener("click",()=>{ DEV[cur].a=!DEV[cur].a; show(); });
  show(); langListeners.push(show);
  pad.addEventListener("pointermove",e=>{ const r=pad.getBoundingClientRect(); hover=true; tx=e.clientX-r.left; ty=e.clientY-r.top; });
  pad.addEventListener("pointerleave",()=>{ hover=false; });
  (function tick(now){
    requestAnimationFrame(tick);
    if(!isOn("cursor")) return;
    const w=pad.clientWidth, h=pad.clientHeight, cx=w/2, cy=h/2, d=DEV[cur];
    if(!hover){ const t=now/1000; tx=cx+Math.sin(t*.9)*w*.18+Math.sin(t*2.7)*w*.04; ty=cy+Math.sin(t*1.3)*h*.15; }
    if(rx===null){ rx=cx; ry=cy; }
    if(ptx!==null){
      const dx=tx-ptx, dy=ty-pty; vh += (Math.hypot(dx,dy)-vh)*.25;              // rapidez da mão
      const gain = d.v * (d.a ? Math.min(2.2, .45 + vh/7) : 1);                 // com aceleração: rápido vai mais longe
      rx += dx*gain; ry += dy*gain;
      rx += (cx+(tx-cx)*d.v - rx)*.03; ry += (cy+(ty-cy)*d.v - ry)*.03;          // não deixa sair do quadro aos poucos
      rx=Math.max(10,Math.min(w-20,rx)); ry=Math.max(10,Math.min(h-20,ry));
    }
    ptx=tx; pty=ty;
    ghost.style.transform=`translate(${tx}px,${ty}px)`;
    real.style.transform=glow.style.transform=`translate(${rx}px,${ry}px)`;
  })(0);
})();

/* ---------- 7. cada app, cada mouse, cada tela ---------- */
(function(){
  const bar=$("#ctxbar"), res=$("#res");
  const IC = {
    app:'<svg viewBox="0 0 16 16"><rect x="2" y="2" width="5" height="5" rx="1.3"/><rect x="9" y="2" width="5" height="5" rx="1.3"/><rect x="2" y="9" width="5" height="5" rx="1.3"/><rect x="9" y="9" width="5" height="5" rx="1.3"/></svg>',
    mouse:ICONS.rolagem,
    screen:'<svg viewBox="0 0 16 16"><rect x="1.5" y="2.5" width="13" height="8.5" rx="1.5"/><path d="M6 14h4M8 11v3"/></svg>',
  };
  const KINDS = [["app",CTX_APPS],["mouse",CTX_MICE],["screen",CTX_SCREENS]];
  const sel = { app:0, mouse:0, screen:0 };
  let last={}, userAt=0, turn=0;
  function render(changed){
    bar.innerHTML = KINDS.map(([k,list])=>`<button class="ctxp${k===changed?" hl":""}" data-kind="${k}">${IC[k]}${L(list[sel[k]].n)}<i>▼</i></button>`).join("");
    const a=CTX_APPS[sel.app], m=CTX_MICE[sel.mouse], sc=CTX_SCREENS[sel.screen];
    const rows = [
      ["rolagem", L("Rolagem suave|Smooth Scrolling"), L("por app|per app"), L(a.scroll)],
      ["botoes",  L("Botão 4|Button 4"),               L("por app|per app"), L(a.b4)],
      ["cursor",  L("Velocidade|Speed"),               L("mouse + tela|mouse + display"), (m.v*sc.k).toFixed(1)+"×"],
      ["cursor",  L("Aceleração|Acceleration"),        L("por mouse|per mouse"), L(m.a?"Ligada|On":"Desligada|Off")],
    ];
    res.innerHTML = rows.map(([ic,label,tag,val],i)=>`<div class="rrow${changed && last[i]!==val?" flash":""}">${ICONS[ic]}<span>${label}</span><span class="tag">${tag}</span><b>${val}</b></div>`).join("");
    rows.forEach(([, , ,val],i)=>last[i]=val);
  }
  bar.addEventListener("click",e=>{ const b=e.target.closest(".ctxp"); if(!b) return; const k=b.dataset.kind, list=KINDS.find(x=>x[0]===k)[1];
    sel[k]=(sel[k]+1)%list.length; userAt=performance.now(); render(k); });
  render(); langListeners.push(()=>render());
  setInterval(()=>{ if(!isOn("cada") || performance.now()-userAt<8000) return;          // troca sozinho, um seletor de cada vez
    const [k,list]=KINDS[turn++%3]; sel[k]=(sel[k]+1)%list.length; render(k); }, 2300);
})();

/* ---------- 7. constelação de ajustes ---------- */
(function(){
  const c=$("#const"), ctx=c.getContext("2d"); let mx=-1, my=-1, t0=performance.now();
  c.addEventListener("pointermove",e=>{ const r=c.getBoundingClientRect(); mx=e.clientX-r.left; my=e.clientY-r.top; });
  c.addEventListener("pointerleave",()=>{ mx=my=-1; });
  let col; const readCol=()=>{ col={acc:cssVar("--accent"),text:cssVar("--text"),dim:cssVar("--dim"),line:cssVar("--star-line"),font:getComputedStyle(document.body).fontFamily}; };
  readCol(); addEventListener("themechange",readCol);
  const starPath=new Path2D("M61.341 86.673 L0 108.776 L40.728 141.309 L6.209 233.694 L96.358 179.058 L151.988 195.449 L156.706 139.323 L240.4 67.799 L122.932 81.706 L57.616 0Z");
  (function tick(now){
    requestAnimationFrame(tick);
    if(!isOn("infinito")) { t0=now; return; }
    const r=c.getBoundingClientRect(), k=dpr(); if(c.width!==Math.round(r.width*k)){ c.width=Math.round(r.width*k); c.height=Math.round(r.height*k); }
    ctx.setTransform(k,0,0,k,0,0); ctx.clearRect(0,0,r.width,r.height);
    const {acc,text,dim,line,font}=col;
    const P=STARS.map(([n,x,y],i)=>[x*r.width + Math.sin(now/2400+i)*4, y*r.height + Math.cos(now/2000+i*1.7)*4]);
    const T=(now-t0)/1000;
    LINKS.forEach(([a,b],i)=>{ const p=Math.min(1,Math.max(0,(T-i*.12)/.6)); if(!p) return;
      const e=easeInOut(p), [x1,y1]=P[a], [x2,y2]=P[b];
      ctx.strokeStyle=line; ctx.lineWidth=1.2; ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x1+(x2-x1)*e,y1+(y2-y1)*e); ctx.stroke(); });
    STARS.forEach(([name],i)=>{ const [x,y]=P[i], near=mx>=0 && Math.hypot(mx-x,my-y)<80, tw=.6+.4*Math.sin(now/700+i*2), rad=(near?7:4)+tw*1.5;
      ctx.save(); ctx.shadowColor=acc; ctx.shadowBlur=near?24:12; ctx.fillStyle=near?acc:text; ctx.globalAlpha=near?1:.85;
      ctx.beginPath(); ctx.arc(x,y,rad*.55,0,7); ctx.fill(); ctx.restore();
      ctx.font=`${near?600:500} ${near?14:12.5}px ${font}`; ctx.textAlign="center"; ctx.fillStyle=near?text:dim;
      ctx.globalAlpha=Math.min(1,Math.max(0,(T-.3-i*.08)/.5)); ctx.fillText(L(name),x,y-14); ctx.globalAlpha=1; });
    // raios: depois das ligações entre os pontos, cada ponto se liga à estrela, e uma luz corre do ponto até ela
    const cx=r.width*.5, cy=r.height*.44, R0=Math.min(r.width,r.height)*.075, T2=T-LINKS.length*.12-.5;
    let hits=0;
    P.forEach(([x,y],i)=>{ const p=Math.min(1,Math.max(0,(T2-i*.07)/.7)); if(!p) return;
      const e=easeInOut(p), dx=cx-x, dy=cy-y, len=Math.hypot(dx,dy), ux=dx/len, uy=dy/len, L2=Math.max(0,len-R0);
      const gx=x+ux*L2*e, gy=y+uy*L2*e, gr=ctx.createLinearGradient(x,y,cx,cy);
      gr.addColorStop(0,"rgba(232,86,42,.06)"); gr.addColorStop(1,"rgba(232,86,42,.5)");
      ctx.strokeStyle=gr; ctx.lineWidth=1; ctx.setLineDash([2,5]); ctx.beginPath(); ctx.moveTo(x,y); ctx.lineTo(gx,gy); ctx.stroke(); ctx.setLineDash([]);
      if(p<1) return;
      const f=((now/1000)*.45+i*.137)%1, fx=x+ux*L2*f, fy=y+uy*L2*f;            // a luz vai até a estrela
      if(f>.9) hits++;
      ctx.save(); ctx.globalAlpha=Math.sin(f*Math.PI)*.9; ctx.shadowColor=acc; ctx.shadowBlur=10; ctx.fillStyle=acc;
      ctx.beginPath(); ctx.arc(fx,fy,1.8,0,7); ctx.fill(); ctx.restore(); });
    const s=Math.min(r.width,r.height)*.12*(1+.04*Math.sin(now/900)+.025*Math.min(hits,3));
    ctx.save(); ctx.translate(cx-s/2,cy-s/2); ctx.scale(s/240,s/234); ctx.shadowColor=acc; ctx.shadowBlur=40+hits*8; ctx.fillStyle=acc; ctx.fill(starPath); ctx.restore();
  })(0);
})();

/* ---------- 8. a janela do LUUZI, para clicar ---------- */
(function(){
  const box=$("#appwin"); let cur="rolagem", on={};
  const fit=()=>{ const w=box.clientWidth, k=w/640; box.style.height=440*k+"px"; const win=box.firstChild; if(win) win.style.transform=`scale(${k})`; };
  const render=()=>{ box.innerHTML=""; const win=lzWindow(cur,on[cur]!==false); box.appendChild(win); fit(); };
  box.addEventListener("click",e=>{
    const item=e.target.closest(".lz-item"), tog=e.target.closest(".lz-tog"), opt=e.target.closest(".lz-opt,.lz-row"), sl=e.target.closest(".lz-sl"), win=box.firstChild;
    if(item){ cur=item.dataset.s; lzShow(win,cur,on[cur]!==false); return; }
    if(tog && tog.dataset.k==="acc"){ tog.classList.toggle("on"); return; }
    if(tog){ on[cur]=!(on[cur]!==false); tog.classList.toggle("on",on[cur]); win.classList.toggle("lz-off",!on[cur]); return; }
    if(opt){ opt.parentElement.querySelectorAll(".on").forEach(x=>x.classList.remove("on")); opt.classList.add("on"); return; }
    if(sl){ const r=sl.getBoundingClientRect(), x=Math.max(0,Math.min(1,(e.clientX-r.left)/r.width)); sl.querySelector(".f").style.width=sl.querySelector(".kn").style.left=(x*100)+"%"; }
  });
  render(); addEventListener("resize",fit); langListeners.push(render);
})();

/* ---------- download: descobre o tipo de Mac ---------- */
let ARCH=null;
async function detectArch(){
  try{ if(navigator.userAgentData && navigator.userAgentData.getHighEntropyValues){
    const v=await navigator.userAgentData.getHighEntropyValues(["architecture","platform"]);
    if(v.platform==="macOS" && v.architecture) return v.architecture==="arm"?"arm":"intel"; } }catch(_){}
  try{ const gl=document.createElement("canvas").getContext("webgl"); const ext=gl&&gl.getExtension("WEBGL_debug_renderer_info");
    const r=gl?(ext?gl.getParameter(ext.UNMASKED_RENDERER_WEBGL):gl.getParameter(gl.RENDERER)):"";
    if(/Apple M\d|Apple GPU/i.test(r)) return "arm"; if(/Intel|AMD|Radeon|NVIDIA/i.test(r)) return "intel"; }catch(_){}
  return null;
}
const isMac=/Mac/.test(navigator.platform||navigator.userAgent) && !/iPhone|iPad/.test(navigator.userAgent) && !(navigator.maxTouchPoints>1);
const archText=()=>{ const name=ARCH==="arm"?"Apple Silicon":ARCH==="intel"?"Intel":null;
  $("#req").textContent = !isMac ? L(S.reqNoMac) : name ? L(S.reqArch)+name : L(S.req);
  $("#mArch").textContent = (isMac&&name ? L(S.forMac)+name+". " : "") + L(S.privacy); };
langListeners.push(archText);
detectArch().then(a=>{ ARCH=a; archText(); });
const downloadUrl=()=>DOWNLOADS[ARCH||"arm"];

/* ---------- cadastro antes do download ---------- */
// e-mails descartáveis mais comuns (não entram na lista)
const DISPOSABLE = /@(mailinator|guerrillamail|10minutemail|temp-?mail|tempmail|yopmail|trashmail|sharklasers|getnada|dispostable|maildrop|throwawaymail|fakeinbox|mohmal|emailondeck|moakt|mintemail|spamgourmet|discard\.email|tempr\.email|mailnesia|burnermail)\b/;
(function(){
  const modal=$("#modal"), sheet=$("#sheet"), form=$("#signup"), err=$("#mErr"), btn=$("#mBtn");
  let lastFocus=null;
  const startDownload=()=>{ const a=document.createElement("a"); a.href=downloadUrl(); a.download=""; document.body.appendChild(a); a.click(); a.parentNode.removeChild(a); };
  let openedAt=0;
  const open=e=>{ e.preventDefault(); lastFocus=document.activeElement; openedAt=performance.now(); modal.classList.add("open"); setTimeout(()=>form.NOME.focus(),350); };
  const close=()=>{ modal.classList.remove("open"); if(lastFocus) lastFocus.focus(); setTimeout(()=>sheet.classList.remove("ok"),700); };
  $$("[data-signup]").forEach(a=>a.addEventListener("click",open));
  $$("[data-close]").forEach(el=>el.addEventListener("click",close));
  $("#dlAgain").addEventListener("click",e=>{ e.preventDefault(); startDownload(); });
  addEventListener("keydown",e=>{ if(e.key==="Escape"&&modal.classList.contains("open")) close(); });
  form.addEventListener("submit",async e=>{
    e.preventDefault(); err.textContent="";
    if(btn.disabled) return;                                                       // impede clique duplo
    const nome=form.NOME.value.normalize("NFC").replace(/\s+/g," ").trim(), email=form.EMAIL.value.trim().toLowerCase();
    // robôs: preenchem o campo escondido ou enviam rápido demais (menos de 2,5 s). Fingimos sucesso e nada é enviado.
    const bot = form.email_address_check.value!=="" || performance.now()-openedAt<2500;
    if(!bot){
      if(!/^[\p{L}\p{M}' .-]{2,60}$/u.test(nome)){ err.textContent=L(S.errName); form.NOME.focus(); return; }
      if(email.length>254 || !/^[a-z0-9._%+-]{1,64}@(?:[a-z0-9-]{1,63}\.)+[a-z]{2,24}$/.test(email) || DISPOSABLE.test(email)){ err.textContent=L(S.errEmail); form.EMAIL.focus(); return; }
      // limite por navegador: no máximo 3 cadastros a cada 10 minutos
      let log=[]; try{ log=JSON.parse(localStorage.getItem("luuzi-sent")||"[]").filter(t=>Date.now()-t<6e5); }catch(_){}
      if(log.length>=3){ err.textContent=L(S.errLimit); return; }
      try{ localStorage.setItem("luuzi-sent",JSON.stringify([...log,Date.now()])); }catch(_){}
    }
    const label=btn.textContent; btn.disabled=true; btn.textContent=L(S.sending);
    if(!bot){
      const data=new FormData(); data.append("NOME",nome); data.append("EMAIL",email); data.append("email_address_check","");
      data.append("locale",LANG==="pt"?"pt":"en"); data.append("html_type","simple");
      try{ await fetch(BREVO_FORM_URL+"?isAjax=1",{method:"POST",body:data,mode:"no-cors",credentials:"omit",referrerPolicy:"strict-origin"}); }catch(_){ /* não impede o download */ }
    } else await new Promise(r=>setTimeout(r,900));
    sheet.classList.add("ok"); form.reset(); setTimeout(()=>{ btn.disabled=false; btn.textContent=label; },5000);
    startDownload();
  });
})();

/* ---------- ícone do app antes do título de cada seção ---------- */
const H_ICONS = { rolagem:"rolagem", botoes:"botoes", gestos:"gestos", autoscroll:"autoscroll", cursor:"cursor" };
const addTitleIcons = () => Object.entries(H_ICONS).forEach(([sec,key]) => {
  const h=$(`#${sec} h2`); if(h && !h.querySelector(".h-ico")) h.insertAdjacentHTML("afterbegin", `<span class="h-ico" aria-hidden="true">${ICONS[key]}</span>`); });
langListeners.unshift(addTitleIcons);

/* ---------- tema claro / escuro ---------- */
const mqDark = matchMedia("(prefers-color-scheme: dark)");
let THEME = (()=>{ try{ const t=localStorage.getItem("luuzi-theme"); return t==="light"||t==="dark" ? t : null; }catch(_){ return null; } })();
const isDark = () => THEME ? THEME==="dark" : mqDark.matches;
const SUN = '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6"/></svg>';
const MOON = '<svg viewBox="0 0 24 24"><path d="M20.5 14.2A8.5 8.5 0 1 1 9.8 3.5a6.8 6.8 0 0 0 10.7 10.7z"/></svg>';
function applyTheme(){
  const r=document.documentElement, b=$("#themeBtn");
  if(THEME) r.dataset.theme=THEME; else delete r.dataset.theme;
  r.style.colorScheme = isDark() ? "dark" : "light";
  b.innerHTML = isDark() ? SUN : MOON;
  const lbl = L(isDark() ? ["Usar tema claro","Use light theme"] : ["Usar tema escuro","Use dark theme"]);
  b.setAttribute("aria-label", lbl); b.title = lbl;
  dispatchEvent(new Event("themechange"));
}
$("#themeBtn").addEventListener("click", () => { THEME = isDark() ? "light" : "dark"; try{ localStorage.setItem("luuzi-theme",THEME); }catch(_){} applyTheme(); });
mqDark.addEventListener("change", applyTheme);
langListeners.push(applyTheme);

applyLang();
