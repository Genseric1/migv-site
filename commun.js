/* En-tête, pied de page et comportements partagés par tout le site MIGV */

/* OPTION A, decidee le 6 novembre 2026.
   Le pasteur a tranche le 3 octobre : les enseignements du ministere
   SONT ses traites et ses livres. "Enseignements" est donc le
   contenant, pas une rubrique a cote des deux autres. Traites et
   Livres quittent le menu principal et s'atteignent depuis la page
   Enseignements. Collections, qui existe maintenant, prend une place. */
const PAGES=[
  ['index.html','Accueil'],
  ['dimanche.html','Le dimanche'],
  ['enseignements.html','Enseignements'],
  ['collections.html','Collections'],
  ['videos.html','Vidéos'],
  ['actualites.html','Actualités'],
  ['soutenir.html','Nous soutenir'],
  ['contact.html','Contact']
];

/* Les huit assemblées du ministère.
   lat/lon : position réelle. cote/ly : place de l'étiquette sur la carte.
   pasteur/tel : à renseigner quand le ministère aura transmis les noms et
   les numéros, avec l'accord des intéressés. Vides, ils ne s'affichent pas. */
const ASSEMBLEES=[
  {n:'Abidjan',      r:'Siège du ministère', a:'21 BP 374 Abidjan 21', pasteur:'', tel:'', lat:5.32, lon:-4.03, cote:'d', ly:530, siege:true},
  {n:'Yamoussoukro', r:'District autonome',  a:'Adresse à préciser', pasteur:'', tel:'',   lat:6.82, lon:-5.28, cote:'d', ly:400},
  {n:'Bouaké',       r:'Vallée du Bandama',  a:'Adresse à préciser', pasteur:'', tel:'',   lat:7.69, lon:-5.03, cote:'d', ly:250},
  {n:'Vavoua',       r:'Haut-Sassandra',     a:'Adresse à préciser', pasteur:'', tel:'',   lat:7.38, lon:-6.48, cote:'g', ly:180},
  {n:'Bazra-Nattis', r:'Haut-Sassandra',     a:'Adresse à préciser', pasteur:'', tel:'',   lat:7.28, lon:-6.63, cote:'g', ly:295},
  {n:'Senoufla',     r:'Marahoué',           a:'Adresse à préciser', pasteur:'', tel:'',   lat:7.00, lon:-6.00, cote:'g', ly:410},
  {n:'Danané',       r:'Tonkpi',             a:'Adresse à préciser', pasteur:'', tel:'',   lat:7.26, lon:-8.16, cote:'g', ly:520},
  {n:'Zouan-Hounien',r:'Tonkpi',             a:'Adresse à préciser', pasteur:'', tel:'',   lat:6.90, lon:-8.20, cote:'g', ly:625}
];

/* Contour officiel de la Cote d'Ivoire (geoBoundaries ADM0, simplifie a 209 points),
   en [longitude, latitude]. */
const CONTOUR=[
 [-7.990,10.162],[-8.174,9.942],[-8.124,9.845],[-8.158,9.531],[-8.054,9.389],[-7.865,9.410],
 [-7.930,9.184],[-7.747,9.076],[-7.932,8.997],[-7.969,8.813],[-7.804,8.749],[-7.697,8.625],
 [-7.662,8.375],[-7.771,8.387],[-7.824,8.478],[-7.899,8.426],[-7.971,8.497],[-8.200,8.492],
 [-8.254,8.447],[-8.266,8.246],[-8.086,8.162],[-8.003,8.184],[-8.021,8.103],[-7.963,8.015],
 [-8.069,8.029],[-8.129,7.883],[-8.098,7.792],[-8.229,7.544],[-8.415,7.613],[-8.485,7.558],
 [-8.426,7.502],[-8.287,6.994],[-8.352,6.755],[-8.619,6.493],[-8.497,6.431],[-8.468,6.487],
 [-8.418,6.451],[-8.412,6.340],[-8.353,6.361],[-8.171,6.274],[-7.914,6.272],[-7.847,6.197],
 [-7.862,6.081],[-7.810,6.071],[-7.787,5.958],[-7.717,5.901],[-7.680,5.941],[-7.494,5.806],
 [-7.479,5.860],[-7.447,5.846],[-7.384,5.569],[-7.450,5.423],[-7.390,5.317],[-7.419,5.260],
 [-7.476,5.264],[-7.489,5.141],[-7.576,5.072],[-7.550,4.914],[-7.606,4.897],[-7.606,4.816],
 [-7.574,4.375],[-7.457,4.344],[-6.903,4.662],[-6.627,4.725],[-5.851,5.030],[-5.551,5.115],
 [-5.002,5.129],[-5.033,5.183],[-5.228,5.204],[-5.187,5.164],[-5.283,5.177],[-5.338,5.142],
 [-5.269,5.129],[-5.358,5.124],[-5.414,5.170],[-5.359,5.129],[-5.297,5.190],[-5.338,5.198],
 [-5.322,5.230],[-5.112,5.183],[-5.010,5.216],[-4.982,5.136],[-4.893,5.129],[-3.996,5.232],
 [-4.060,5.283],[-4.184,5.280],[-4.783,5.170],[-4.804,5.204],[-4.673,5.314],[-4.667,5.252],
 [-4.714,5.252],[-4.680,5.232],[-4.557,5.267],[-4.564,5.300],[-4.454,5.259],[-4.464,5.298],
 [-4.351,5.273],[-4.275,5.312],[-3.989,5.269],[-3.941,5.293],[-4.009,5.314],[-3.900,5.348],
 [-3.744,5.274],[-3.817,5.365],[-3.767,5.372],[-3.729,5.267],[-3.933,5.287],[-3.987,5.244],
 [-3.756,5.190],[-3.721,5.239],[-3.718,5.189],[-3.378,5.123],[-3.276,5.149],[-3.321,5.194],
 [-3.241,5.232],[-3.289,5.252],[-3.262,5.341],[-3.163,5.369],[-3.128,5.325],[-3.205,5.219],
 [-3.139,5.142],[-2.978,5.115],[-2.947,5.177],[-2.804,5.148],[-2.757,5.180],[-2.790,5.347],
 [-2.730,5.373],[-2.786,5.595],[-2.877,5.637],[-2.946,5.608],[-2.965,5.710],[-3.030,5.704],
 [-3.023,5.855],[-3.184,6.264],[-3.263,6.617],[-3.210,6.716],[-3.225,6.849],[-2.973,7.215],
 [-2.942,7.577],[-2.791,7.943],[-2.611,8.040],[-2.611,8.165],[-2.506,8.209],[-2.619,8.924],
 [-2.661,9.015],[-2.775,9.055],[-2.661,9.254],[-2.715,9.311],[-2.672,9.374],[-2.689,9.489],
 [-2.764,9.392],[-2.810,9.411],[-2.990,9.708],[-3.095,9.734],[-3.215,9.916],[-3.302,9.841],
 [-3.317,9.901],[-3.755,9.936],[-4.054,9.798],[-4.150,9.818],[-4.284,9.732],[-4.316,9.617],
 [-4.365,9.624],[-4.371,9.583],[-4.409,9.648],[-4.502,9.655],[-4.510,9.745],[-4.552,9.696],
 [-4.604,9.727],[-4.681,9.682],[-4.796,9.754],[-4.798,9.843],[-4.966,9.901],[-4.963,10.040],
 [-5.070,10.110],[-5.039,10.134],[-5.084,10.227],[-5.117,10.208],[-5.136,10.304],[-5.403,10.301],
 [-5.594,10.454],[-5.878,10.376],[-5.905,10.275],[-5.963,10.283],[-6.016,10.190],[-6.240,10.252],
 [-6.181,10.420],[-6.190,10.491],[-6.261,10.514],[-6.204,10.630],[-6.256,10.726],[-6.427,10.686],
 [-6.399,10.592],[-6.446,10.552],[-6.669,10.654],[-6.669,10.361],[-6.961,10.345],[-6.997,10.253],
 [-6.959,10.186],[-7.016,10.141],[-7.106,10.207],[-7.363,10.252],[-7.372,10.345],[-7.444,10.334],
 [-7.501,10.459],[-7.556,10.417],[-7.664,10.437],[-7.829,10.212],[-7.971,10.155]
];

/* Carte des assemblées. Les villes sont dispersées à leurs vraies coordonnées ;
   la flèche n'apparaît qu'au clic. */
function carteCI(hote){
  const VB_W=1240, VB_H=700;
  const LON=[-8.72,-2.41], LAT=[4.26,10.82];
  const dLon=LON[1]-LON[0], dLat=LAT[1]-LAT[0];
  const kmLon=dLon*110.6*Math.cos(7.5*Math.PI/180), kmLat=dLat*110.6;
  const MH=596, MW=MH*(kmLon/kmLat);
  const MX=(VB_W-MW)/2, MY=42;
  const px=lon=>MX+((lon-LON[0])/dLon)*MW;
  const py=lat=>MY+((LAT[1]-lat)/dLat)*MH;
  const GAUCHE=MX-40, DROITE=MX+MW+40;

  const trace='M'+CONTOUR.map(p=>px(p[0]).toFixed(1)+' '+py(p[1]).toFixed(1)).join(' L')+' Z';
  let pts='',labs='',fls='',mbs='';

  ASSEMBLEES.forEach((v,i)=>{
    const x=px(v.lon), y=py(v.lat);
    pts+=`<g class="g-ville" data-i="${i}">
        <circle class="halo" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="18"/>
        <circle class="pt${v.siege?' siege':''}" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${v.siege?12:9}"/>
      </g>`;
    const dr=v.cote==='d', lx=dr?DROITE:GAUCHE, anc=dr?'start':'end';
    const contact=[v.pasteur,v.tel].filter(Boolean).join(' · ');
    labs+=`<g class="lab" data-i="${i}">
        <rect class="zone" x="${dr?lx-10:lx-270}" y="${v.ly-32}" width="280" height="72"/>
        <text class="nom" x="${lx}" y="${v.ly}" text-anchor="${anc}">${v.n}</text>
        <text class="reg" x="${lx}" y="${v.ly+20}" text-anchor="${anc}">${v.r}</text>
        <text class="past" x="${lx}" y="${v.ly+40}" text-anchor="${anc}">${contact}</text>
      </g>`;
    const dep=dr?lx-18:lx+18, dx=x-(dr?14:-14), cx=(dep+dx)/2, cy=v.ly-52;
    fls+=`<path class="fleche" data-i="${i}" marker-end="url(#fl-${hote.id})"
        d="M${dep} ${v.ly-9} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${dx.toFixed(1)} ${y.toFixed(1)}"/>`;
    mbs+=`<button class="mb" data-i="${i}">${v.n}<small>${v.r}</small>${
      contact?`<em>${contact}</em>`:''}</button>`;
  });

  hote.innerHTML=`<svg viewBox="0 0 ${VB_W} ${VB_H}" class="carte-ci" role="img"
      aria-label="Carte de la Côte d'Ivoire situant les huit assemblées du ministère">
    <defs><marker id="fl-${hote.id}" markerWidth="10" markerHeight="10" refX="9" refY="5" orient="auto">
      <path d="M0 0 L10 5 L0 10 z" fill="var(--accent)"/></marker></defs>
    <path class="pays" d="${trace}"/>
    <g class="g-fl">${fls}</g>${pts}${labs}
  </svg><div class="mobiles">${mbs}</div>`;

  hote.querySelectorAll('.fleche').forEach(f=>f.style.setProperty('--len',f.getTotalLength()));

  let actif=null;
  const eteindre=()=>{actif=null;
    hote.querySelectorAll('.fleche.on,.lab.actif,.mb.actif,.g-ville.actif,.halo.on')
      .forEach(e=>e.classList.remove('on','actif'))};
  const choisir=i=>{
    if(actif===i){eteindre();return}
    eteindre(); actif=i;
    hote.querySelector(`.fleche[data-i="${i}"]`).classList.add('on');
    hote.querySelector(`.lab[data-i="${i}"]`).classList.add('actif');
    hote.querySelector(`.mb[data-i="${i}"]`).classList.add('actif');
    const g=hote.querySelector(`.g-ville[data-i="${i}"]`);
    g.classList.add('actif'); g.querySelector('.halo').classList.add('on');
  };
  hote.querySelectorAll('.lab,.g-ville,.mb').forEach(el=>
    el.addEventListener('click',e=>{e.stopPropagation();choisir(+el.dataset.i)}));
  hote.querySelector('svg').addEventListener('click',eteindre);
}

function entete(actif){
  const liens=PAGES.map(([h,t])=>`<a href="${h}"${h===actif?' class="ici"':''}>${t}</a>`).join('');
  return `<div class="bar">
    <a class="logo" href="index.html">
      <img src="images/logo.png" alt="">
      <b>MIGV<span>Ministère International Grâce &amp; Vérité</span></b>
    </a>
    <button class="burger" id="burger" aria-label="Menu" aria-expanded="false" aria-controls="nav"><span></span></button>
    <nav id="nav">${liens}</nav>
  </div>`;
}

function pied(){
  return `<div class="wrap">
    <div class="sigle">
      <span class="mig">MIGV</span>
      <span class="def">Ministère International Grâce &amp; Vérité</span>
    </div>
    <div class="pcol">
      <div><h5>Le siège</h5><p>21 BP 374 Abidjan 21<br>Abidjan, Côte d'Ivoire</p></div>
      <div><h5>Écrire</h5><a href="contact.html">contact@migv.ci</a><a href="contact.html">Nos huit assemblées</a></div>
      <div><h5>Lire</h5><a href="enseignements.html">Enseignements</a><a href="traites.html">Traités</a><a href="livres.html">Livres</a><a href="dimanche.html">Le dimanche</a></div>
      <div><h5>Regarder</h5><a href="videos.html">Les vidéos</a><a href="actualites.html">Actualités</a><a href="#">Facebook</a><a href="#">YouTube</a><a href="#">TikTok</a></div>
      <div><h5>Soutenir</h5><a href="soutenir.html">Nous soutenir</a><a href="livres.html">Commander un livre</a></div>
    </div>
    <div class="pfin"><span>Jusqu'aux extrémités de la terre</span><span>MIGV 2026</span></div>
  </div>`;
}

/* ================= LA GAMME =================
   Chaque page declare son point de depart dans la feuille de style :
       :root{--depart:3}
   teinte(n) rend la couleur du n-ieme element d'une serie, en tournant
   sur les cinq teintes. Une serie de cinq montre donc les cinq couleurs,
   et jamais deux fois la meme de suite. */
const GAMME=['var(--t1)','var(--t2)','var(--t3)','var(--t4)','var(--t5)'];
let _depart=null;
function depart(){
  if(_depart===null){
    const v=parseInt(getComputedStyle(document.documentElement).getPropertyValue('--depart'),10);
    _depart=(isNaN(v)?1:v)-1;
  }
  return _depart;
}
function teinte(n){ return GAMME[(depart()+n)%GAMME.length]; }

/* ================= ANIMATIONS DE TEXTE =================
   decouper() enveloppe chaque mot d'un .mot sans toucher aux balises
   qui se trouvent a l'interieur : un <em> ou un <b> reste intact. */
function decouper(el){
  let i=0;
  (function marche(n){
    [].slice.call(n.childNodes).forEach(function(c){
      if(c.nodeType===3){
        if(!c.textContent.trim())return;
        const frag=document.createDocumentFragment();
        c.textContent.split(/(\s+)/).forEach(function(t){
          if(!t)return;
          if(/^\s+$/.test(t)){frag.appendChild(document.createTextNode(t));return}
          const m=document.createElement('span');
          m.className='mot'; m.textContent=t;
          m.style.transitionDelay=(i++*0.075).toFixed(3)+'s';
          frag.appendChild(m);
        });
        n.replaceChild(frag,c);
      } else if(c.nodeType===1){ marche(c) }
    });
  })(el);
}

function preparerTextes(){
  document.querySelectorAll('.mots:not([data-prete])').forEach(function(el){
    el.dataset.prete='1'; decouper(el);
  });
  document.querySelectorAll('.monte:not([data-prete])').forEach(function(el){
    el.dataset.prete='1';
    const d=document.createElement('span'); d.className='dedans';
    while(el.firstChild)d.appendChild(el.firstChild);
    el.appendChild(d);
  });
}

/* e. compteur : monte de zero jusqu'a la valeur, puis s'arrete net */
function compter(el){
  const fin=parseFloat(el.dataset.fin||el.textContent)||0;
  let t0=null;
  const pas=function(t){
    if(t0===null)t0=t;
    const k=Math.min(1,(t-t0)/1100);
    el.textContent=Math.round(fin*(1-Math.pow(1-k,3)));
    if(k<1)requestAnimationFrame(pas); else el.textContent=fin;
  };
  requestAnimationFrame(pas);
  setTimeout(function(){el.textContent=fin},1700);   // filet : si rAF ne tourne pas
}

const ANIMES='.mots,.monte,.surligne,.filet,.compteur';
function allumer(el){
  if(el.classList.contains('vu'))return;
  el.classList.add('vu');
  if(el.classList.contains('compteur'))compter(el);
}

const MOIS=['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];

/* Les prédications publiées. Une entrée par dimanche. */
const PRED={
 '2026-08-02':{
   titre:"Melchisédek, la dîme et la soumission à l'autorité que Dieu établit",
   orateur:"Pasteur Théodore Nettaud GUEU",
   cit:"« C'est lui qui change les temps et les circonstances, qui renverse et qui établit les rois. »",
   ref:"Daniel 2:21",
   img:"images/dim-2026-08-02.png",
   chapo:"En partant de la campagne de Kedorlaomer et de la rencontre d'Abraham avec Melchisédek, le pasteur montre comment Dieu gouverne les temps, ce qu'implique la consécration totale, et pourquoi le croyant se soumet aux autorités établies.",
   points:[
     {t:"Dieu change les temps",
      x:"Kedorlaomer semblait invincible et inarrêtable, car c'était son temps. Mais Dieu seul élève et abaisse les rois, en son temps.",
      r:"Daniel 2:21"},
     {t:"Ne pas toucher à ce qui est à Dieu",
      x:"Kedorlaomer a tout pillé sans conséquence, jusqu'à toucher à Lot, lié à Abraham. C'est cet acte-là qui a causé sa chute, car on ne touche pas à ce qui appartient à Dieu.",
      r:"Genèse 14:11-16"},
     {t:"La consécration totale",
      x:"Abraham donne la dîme de tout à Melchisédek et refuse tout bien du roi de Sodome, montrant qu'il faut se consacrer entièrement à Dieu, sans réserve.",
      r:"Genèse 14:18-24"},
     {t:"Melchisédek annonce Christ",
      x:"Melchisédek, roi de justice et de paix, sacrificateur sans commencement ni fin, préfigure Jésus-Christ, seul vrai Roi de justice et sacrificateur éternel.",
      r:"Hébreux 7:1-3"},
     {t:"Se soumettre aux autorités que Dieu a établies",
      x:"Puisque Dieu contrôle les temps et les circonstances des nations, le croyant doit se soumettre aux autorités établies et servir loyalement là où il est placé.",
      r:"Romains 13:1"}
   ],
   min:5}
,
 '2026-08-16':{
   titre:"Le bon combat de la foi contre les puissances spirituelles",
   orateur:"Pasteur Théodore Nettaud GUEU",
   cit:"« Nous n'avons pas à lutter contre la chair et le sang, mais contre les dominations, contre les autorités, contre les princes de ce monde de ténèbres. »",
   ref:"Éphésiens 6:12",
   img:"images/dim-2026-08-16.png",
   chapo:"Le combat du croyant ne se livre pas sur le terrain des hommes. Le pasteur montre contre qui il se livre réellement, ce que la croix a déjà réglé, et l'autorité que le croyant a reçue pour délivrer les autres.",
   points:[
     {t:"Une guerre spirituelle, pas humaine",
      x:"Le combat du croyant n'est pas contre des hommes, mais contre des puissances spirituelles organisées en hiérarchie, comme l'illustre la résistance du « prince de Perse » à un ange pendant vingt et un jours.",
      r:"Éphésiens 6:12 ; Daniel 10:13"},
     {t:"La croix, piège tendu à Satan",
      x:"Christ s'est fait homme pour déjouer la stratégie de Satan. Il a porté nos péchés, il est mort puis ressuscité, dépouillant publiquement les puissances des ténèbres.",
      r:"Colossiens 2:15"},
     {t:"Une autorité donnée au croyant, pas aux anges",
      x:"En Christ, le croyant reçoit une position de prêtre et de roi dans l'armée céleste, une autorité que les anges eux-mêmes n'ont pas reçue.",
      r:"Apocalypse 1:6"},
     {t:"Le croyant hors de portée du malin",
      x:"Celui qui est né de Dieu est délivré du pouvoir des ténèbres, et le malin ne peut le toucher.",
      r:"Colossiens 1:13 ; 1 Jean 5:18"},
     {t:"Envoyé pour libérer les autres",
      x:"Avec toute l'autorité reçue de Christ, le croyant a pour mission d'ouvrir les yeux des hommes, pour qu'ils passent des ténèbres à la lumière.",
      r:"Matthieu 28:18-20 ; Actes 26:17-18"}
   ],
   min:5}
};

/* La cle du dimanche publie le plus recent. L'accueil s'en sert pour
   afficher toujours la derniere affiche, sans qu'on touche au code. */
function dernierDimanche(){
  const cles=Object.keys(PRED).sort();
  return cles[cles.length-1];
}

(function(){
  const actif=(location.pathname.split('/').pop()||'index.html');
  const e=document.querySelector('#entete'), p=document.querySelector('#pied');
  if(e)e.innerHTML=entete(actif);
  if(p)p.innerHTML=pied();

  const burger=document.querySelector('#burger'), nav=document.querySelector('#nav');
  if(burger&&nav)burger.onclick=()=>{
    /* aria-expanded doit suivre l'etat reel du menu : sans lui, un
       lecteur d'ecran annonce « Menu, bouton » sans jamais dire si
       le menu est ouvert ou ferme. aria-controls le relie au <nav>
       qu'il commande. */
    const ouvert = nav.classList.toggle('ouvert');
    burger.setAttribute('aria-expanded', ouvert ? 'true' : 'false');
  };
  if(e&&!e.classList.contains('clair'))e.classList.add('pose');

  const io=new IntersectionObserver(es=>{
    es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('on');io.unobserve(x.target)}});
  },{threshold:.08});
  function reveler(){
    document.querySelectorAll('.rv:not(.on)').forEach(el=>{
      io.observe(el);
      if(el.getBoundingClientRect().top<innerHeight*0.94)el.classList.add('on');
    });
  }
  /* animations de texte : meme principe, une seule fois par bloc */
  preparerTextes();
  const ioa=new IntersectionObserver(es=>{
    es.forEach(x=>{if(x.isIntersecting){allumer(x.target);ioa.unobserve(x.target)}});
  },{threshold:.2});
  function animer(){
    document.querySelectorAll(ANIMES).forEach(el=>{
      if(el.classList.contains('vu'))return;
      ioa.observe(el);
      if(el.getBoundingClientRect().top<innerHeight*0.92)allumer(el);
    });
  }

  addEventListener('scroll',()=>{reveler();animer()},{passive:true});
  addEventListener('resize',()=>{reveler();animer()},{passive:true});
  reveler(); animer();

  /* Filet de securite. Il ne force que ce qui est deja a l'ecran, sinon
     l'effet au defilement serait annule des la troisieme seconde.
     Une veille repasse toutes les 1,5 s pendant une minute, au cas ou
     l'observateur ou les evenements de defilement ne repondraient pas.
     Passe ce delai, tout est affiche : rien ne peut rester invisible. */
  let tours=0;
  const veille=setInterval(()=>{
    reveler(); animer();
    if(++tours>40){
      clearInterval(veille);
      document.querySelectorAll('.rv:not(.on)').forEach(el=>el.classList.add('on'));
      document.querySelectorAll(ANIMES).forEach(allumer);
    }
  },1500);

  /* rendu par une page apres coup : themes charges, liste refiltree, etc. */
  window.rafraichirAnimations=function(){preparerTextes();animer()};
})();
