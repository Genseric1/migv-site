/* ===================================================================
   CE QUE TOUTE PAGE REFONDUE FAIT.

   Trois choses, qui etaient recopiees dans chaque page :
     1. ecrire le pied de page ;
     2. poser l'entete sur l'encre une fois la banniere depassee ;
     3. repondre au formulaire de la lettre d'information.

   A charger APRES commun.js : commun.js remplit #entete et #pied,
   refonte.js s'occupe du reste.

   Pourquoi le pied est-il ecrit en JavaScript plutot qu'en HTML ?
   Parce qu'il est identique sur neuf pages. Ecrit en HTML, il faut le
   corriger neuf fois ; ecrit ici, une seule.
   =================================================================== */

/* --- 1. le pied ----------------------------------------------------
   Les deux colonnes de liens. La premiere colonne suit le menu, la
   seconde rassemble ce qui n'y est pas.

   CHAQUE COLONNE PORTE UN TITRE. Sur un grand ecran, les deux
   colonnes cote a cote se lisaient d'elles-memes. Sur un telephone
   elles s'empilaient, et le pied devenait douze liens d'affilee sans
   la moindre articulation : « c'est tout droit ». Les titres sont
   ajoutes ici plutot qu'en CSS parce qu'ils disent quelque chose, et
   qu'ils servent aussi a la lecture vocale.                       */
const PIED_COLONNES = [
  ['À lire et à voir',
   [['enseignements.html','Enseignements'],
   ['traites.html','Traités'],
   ['livres.html','Livres'],
   ['collections.html','Collections'],
   ['dimanche.html','Le dimanche'],
   ['videos.html','Les vidéos']]],
  ['Le ministère',
   [['actualites.html','Actualités'],
   ['histoire.html','Notre histoire'],
   ['biographie.html','Le fondateur'],
   ['contact.html','Nos assemblées'],
   ['soutenir.html','Nous soutenir'],
   ['contact.html','Nous écrire']]]
];

/* Les icones des reseaux : un trace SVG chacune, sans fichier a
   telecharger ni police d'icones. */
const PIED_RESEAUX = [
  ['YouTube',  '<path d="M3 7.5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3Z"/><path d="M10 9.2 15 12l-5 2.8Z"/>'],
  ['Facebook', '<path d="M14.5 21v-8h2.7l.5-3h-3.2V8.2c0-.9.3-1.5 1.6-1.5h1.7V4a22 22 0 0 0-2.5-.1c-2.5 0-4.2 1.5-4.2 4.3V10H8v3h3.1v8Z"/>'],
  ['Instagram','<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.1" cy="6.9" r=".9" fill="currentColor" stroke="none"/>'],
  ['WhatsApp', '<path d="M12 3.5a8.5 8.5 0 0 0-7.3 12.8L3.5 20.5l4.4-1.1A8.5 8.5 0 1 0 12 3.5Z"/><path d="M9 9.4c.3-.7.6-.7.9-.7.3 0 .6.1.8.6l.5 1.2-.7.8c.5 1 1.3 1.8 2.3 2.3l.8-.7 1.2.5c.5.2.6.5.6.8 0 .3 0 .6-.7.9-.8.3-2 .2-3.5-.8a9 9 0 0 1-2.6-3c-.5-1-.4-1.5-.3-1.9Z"/>'],
  ['TikTok',   '<path d="M14.3 3.2v10.9a3.4 3.4 0 1 1-2.9-3.4"/><path d="M14.3 3.2a4.6 4.6 0 0 0 4.4 4.3"/>'],
  ['Podcast',  '<rect x="9.2" y="2.8" width="5.6" height="10.4" rx="2.8"/><path d="M5.6 11.2a6.4 6.4 0 0 0 12.8 0M12 17.6V21"/>']
];

function piedRefonte(){
  const cols = PIED_COLONNES.map(function(c){
    return '<div><h4>' + c[0] + '</h4>' + c[1].map(function(l){
      return '<a href="' + l[0] + '">' + l[1] + '</a>';
    }).join('') + '</div>';
  }).join('');

  const res = PIED_RESEAUX.map(function(r){
    return '<li><a href="#" aria-label="' + r[0] + '" title="' + r[0] + '">'
         + '<svg viewBox="0 0 24 24" aria-hidden="true">' + r[1] + '</svg></a></li>';
  }).join('');

  return '<div class="wrap">'
    + '<div class="appel">'
    +   '<p>Tout ce que le ministère publie est en accès libre, et le restera.</p>'
    +   '<a class="bt bt-clair" href="soutenir.html">Soutenir le MIGV <span>&rarr;</span></a>'
    + '</div>'
    + '<div class="corps">'
    +   '<div class="colonnes">' + cols + '</div>'
    +   '<div class="lettre">'
    +     '<p>Recevez le résumé de la prédication du dimanche et son visuel, '
    +     'une fois par semaine. Rien d\'autre.</p>'
    +     '<form id="lettre-form">'
    +       '<input id="courriel" type="email" placeholder="Adresse e-mail" required '
    +              'aria-label="Votre adresse e-mail">'
    +       '<button type="submit">Abonnez-vous</button>'
    +     '</form>'
    +     '<p class="note" id="note">Formulaire de maquette : rien n\'est encore envoyé.</p>'
    +   '</div>'
    + '</div>'
    + '<div class="bas">'
    +   '<ul class="reseaux">' + res + '</ul>'
    +   '<p class="droits">&copy; 2026 Ministère International Grâce et Vérité. '
    +   'Tous droits réservés.</p>'
    + '</div>'
    + '</div>';
}

/* --- 2. la mise en place ------------------------------------------- */
(function(){
  const pied = document.querySelector('.pied-neuf');
  if(pied) pied.innerHTML = piedRefonte();

  /* le formulaire, une fois le pied ecrit */
  const form = document.getElementById('lettre-form');
  if(form) form.addEventListener('submit', function(e){
    e.preventDefault();
    document.getElementById('note').textContent =
      'Merci. Le formulaire sera relié dès la mise en ligne.';
  });

  /* L'entete : claire tant qu'elle est sur la banniere, posee ensuite.
     Le point de bascule est le bas de .haut, moins la hauteur de
     l'entete elle-meme (90 px), pour que le changement se fasse juste
     avant que le texte ne passe dessous.                            */
  const tete = document.querySelector('.tete');
  const haut = document.querySelector('.haut');
  if(tete && haut){
    const poser = function(){
      /* La hauteur de l'entete n'est plus la meme partout : 108 px
         sur un ecran de bureau, 68 sur un telephone. Un seuil fige a
         90 faisait donc basculer l'entete trop tot sur l'un et trop
         tard sur l'autre. On lit la hauteur reelle. */
      const seuil = haut.offsetHeight - tete.offsetHeight;
      tete.classList.toggle('clair', scrollY <  seuil);
      tete.classList.toggle('pose',  scrollY >= seuil);
    };
    addEventListener('scroll', poser, {passive:true});
    addEventListener('resize', poser, {passive:true});
    poser();
  }

  /* L'entete s'efface quand le pied entre dans l'ecran : sur le pied,
     fonce lui aussi, elle n'apporte plus rien.                      */
  if(tete && pied){
    new IntersectionObserver(function(es){
      tete.classList.toggle('efface', es[0].isIntersecting);
    },{rootMargin:'0px 0px -88% 0px'}).observe(pied);
  }
})();
