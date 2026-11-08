/* ===================================================================
   LES RESSOURCES NON TEXTUELLES ET LES SUJETS.

   Ce fichier est lu par videos.html, videos-toutes.html, collections.html
   et collection.html. Avant, la liste des videos etait recopiee dans
   chaque page : une correction devait etre faite plusieurs fois, et une
   page finissait toujours par etre oubliee. Elle n'existe plus qu'ici.

   Les textes, eux, restent dans donnees.js (DATA_ENSEIGNEMENTS).
   =================================================================== */

/* --- les videos ---------------------------------------------------
   src indique la plateforme. Quand le ministere aura transmis les liens
   Facebook, il suffira de passer src:'facebook' et de remplacer
   l'identifiant : rien d'autre ne bouge.

   L'ORDRE DU TABLEAU EST L'ORDRE EDITORIAL : la premiere ligne est la
   plus recente. Pour publier une nouvelle video, on l'ajoute EN HAUT.

   deb:1 marque la selection "Par ou commencer". C'est un choix
   editorial, pas une mesure d'audience : nous n'avons aucun chiffre de
   vues. Le jour ou YouTube fournira ces chiffres, cette rangee pourra
   devenir "Les plus regardees" avec de vraies donnees.                */
const VIDS=[
 {src:'youtube',id:'6J-DWHU9QaY',t:"Peut-on perdre le salut",s:'Le salut',d:'48 min',deb:1},
 {src:'youtube',id:'OZs4RjCjqrE',t:"Testament I : De Canaan à la cité céleste",s:'Alliances',d:'56 min',deb:1},
 {src:'youtube',id:'6epc8lQEgnI',t:"La justification par la foi",s:'La grâce',d:'41 min',deb:1},
 {src:'youtube',id:'XpVnqgOBUcY',t:"La régénération",s:'La grâce',d:'37 min'},
 {src:'youtube',id:'WAzGdK_EQGA',t:"Aux pieds du Seigneur : Marthe, Marie et vous",s:'Vie chrétienne',d:'52 min',deb:1},
 {src:'youtube',id:'OqzeZ1uLRbE',t:"Le salut, comment y parvenir",s:'Le salut',d:'45 min'},
 {src:'youtube',id:'jcsYfzfH52I',t:"Le royaume de Dieu attaque Satan",s:'Le Royaume',d:'49 min',deb:1},
 {src:'youtube',id:'BLZaXjufGB4',t:"L'amour parfait",s:'Vie chrétienne',d:'38 min'}
];

/* --- les sujets ---------------------------------------------------
   Un sujet est une COLLECTION. Le meme nom sert aux enseignements, aux
   videos et, demain, aux traites, aux livres et aux podcasts. C'est ce
   seul vocabulaire partage qui permet de les rassembler.

   ordre : celui d'affichage sur la page Collections.
   image : une des six photographies, une par sujet.
   ligne : l'accroche affichee sous le nom. A relire par le ministere. */
const SUJETS=[
 {n:'Vie chrétienne', img:'h-mains-pages', ligne:"Ce que la foi change dans les jours ordinaires."},
 {n:'La grâce',       img:'h-lumiere',     ligne:"La faveur imméritée, de la justification à la régénération."},
 {n:'Le Royaume',     img:'h-chaises',     ligne:"Le règne annoncé, inauguré, et encore attendu."},
 {n:'Le salut',       img:'h-carnet',      ligne:"Ce qu'il est, comment on y entre, et ce qu'il engage."},
 {n:'Alliances',      img:'h-rayonnage',   ligne:"Les deux testaments, leurs promesses et leurs héritiers."},
 {n:'Apologétique',   img:'h-brochures',   ligne:"Répondre, avec les textes, aux objections courantes."}
];


/* --- les livres ---------------------------------------------------
   La bibliographie du dossier remis par le ministere, dans son ordre.
   Decision du 3 octobre 2026 : les livres ne sont PAS vendus. Acces
   libre et gratuit, en ligne et en PDF.
   pdf : le fichier, quand il nous a ete remis.                      */
const LIVRES=[
 {n:1,t:"Doit-on encore payer la dîme ?"},
 {n:2,t:"Donner à Dieu aujourd'hui"},
 {n:3,t:"Symphonie de la grâce : Le dessein de Dieu pour les nations"},
 {n:4,t:"Le salut présent et le salut futur"},
 {n:5,t:"Le Père, le Fils, le Saint-Esprit : Trois ou un ?"},
 {n:6,t:"Le testament de Dieu pour les nations"},
 {n:7,t:"Les aspects visibles et invisibles de Dieu"},
 {n:8,t:"Le chrétien et la tradition"},
 {n:9,t:"Le temps avant les temps des nations",pdf:'documents/le-temps-avant-les-temps-des-nations.pdf'},
 {n:10,t:"L'Ekklésia de Dieu"},
 {n:11,t:"Le royaume de Dieu est proche"},
 {n:12,t:"La prière par le silence"},
 {n:13,t:"Structure de l'Apocalypse"},
 {n:14,t:"Visions pérennes (Daniel-Apocalypse)"},
 {n:15,t:"Le sabbat, une pratique révolue"}
];

/* --- les traites --------------------------------------------------
   La liste remise par le ministere. Le pasteur precise qu'elle "n'est
   pas exhaustive ; elle est a titre indicatif", et que les traites
   sont "generalement des extraits de nos livres et quelques fois des
   resumes de nos predications".

   La numerotation est la sienne : elle saute le 8 et le 52, et nous la
   gardons telle quelle plutot que de renumeroter, pour qu'un traite
   porte toujours le meme numero ici et dans ses papiers.

   txt : l'identifiant du texte dans DATA_ENSEIGNEMENTS, quand nous
   l'avons. Cinq seulement pour l'instant : ce sont les seuls dont le
   texte a ete retrouve sur l'ancien site.
   pdf : le fichier, quand il nous a ete remis.

   Aucun sujet n'est attribue ici. Classer 72 traites par theme serait
   une decision doctrinale, elle revient au ministere. Tant qu'elle
   n'est pas prise, les traites n'apparaissent pas dans les collections.  */
const TRAITES=[
 {n:1,t:"Dieu comment est-il ?"},
 {n:2,t:"Jésus-Christ un Esprit vivifiant"},
 {n:3,t:"Jésus-Christ le Dieu véritable"},
 {n:4,t:"Le Saint-Esprit qui est-il ?"},
 {n:5,t:"Le Saint-Esprit ce qu'il fait"},
 {n:6,t:"Le Saint-Esprit comment le recevoir ?"},
 {n:7,t:"Le Père et le Fils deux personnes ?"},
 {n:9,t:"Un Dieu unique en 3 personnes ?"},
 {n:10,t:"La gloire de Dieu nous est destinée"},
 {n:11,t:"La grâce source de salut"},
 {n:12,t:"Le salut y parvenir ?"},
 {n:13,t:"La grâce a surabondé"},
 {n:14,t:"Les bénéfices du salut"},
 {n:15,t:"Peut-on perdre le salut ?",txt:'peut-on-perdre-le-salut'},
 {n:16,t:"L'évangile le vrai"},
 {n:17,t:"La justification une bénédiction"},
 {n:18,t:"La régénération une métamorphose",txt:'la-r-g-n-ration'},
 {n:19,t:"La repentance pourquoi ?"},
 {n:20,t:"Réconciliation en Christ"},
 {n:21,t:"L'homme naturel"},
 {n:22,t:"La nouvelle créature"},
 {n:23,t:"Le chrétien charnel"},
 {n:24,t:"Recréés pour vaincre"},
 {n:25,t:"Dans le monde mais pas du monde",txt:'dans-le-monde-mais-pas-du-monde'},
 {n:26,t:"La perfection en Christ"},
 {n:27,t:"Aux pieds du Seigneur",txt:'aux-pieds-du-seigneur'},
 {n:28,t:"La prière par le silence",txt:'la-pri-re-par-le-silence'},
 {n:29,t:"La maison de Dieu"},
 {n:30,t:"Le sacerdoce nouveau"},
 {n:31,t:"Adam, Moïse et Jésus-Christ"},
 {n:32,t:"Tout est accompli"},
 {n:33,t:"Les prophètes une lampe"},
 {n:34,t:"De la loi à l'Esprit"},
 {n:35,t:"La loi de Moïse exclut les païens"},
 {n:36,t:"De Canaan à la cité céleste"},
 {n:37,t:"De la loi à l'évangile"},
 {n:38,t:"L'onction sous la loi"},
 {n:39,t:"L'onction en Christ"},
 {n:40,t:"La Pâque juive"},
 {n:41,t:"La Pâque chrétienne"},
 {n:42,t:"Les prémices sous la loi"},
 {n:43,t:"Les prémices en Christ"},
 {n:44,t:"La Pentecôte en Christ"},
 {n:45,t:"Le Jubilé en Christ"},
 {n:46,t:"La dot biblique de Moïse à Jésus"},
 {n:47,t:"Le mariage chrétien"},
 {n:48,t:"Où va-t-on après la mort ?"},
 {n:49,t:"Le sein du Christ et celui d'Abraham"},
 {n:50,t:"Le royaume de Dieu attaque Satan"},
 {n:51,t:"Le chrétien dans le combat"},
 {n:53,t:"Le royaume au-dedans de nous"},
 {n:54,t:"Le royaume céleste de Dieu"},
 {n:55,t:"Le royaume terrestre de Dieu"},
 {n:56,t:"La fin des temps : l'enlèvement"},
 {n:57,t:"Témoignage : la folle guérie"},
 {n:58,t:"Un temps pour tout"},
 {n:59,t:"La dîme à Melchisédech"},
 {n:60,t:"Melchisédech, l'ombre du Christ"},
 {n:61,t:"Jésus-Christ la fin de la loi"},
 {n:62,t:"La nature de la dîme"},
 {n:63,t:"La dîme les bénéficiaires"},
 {n:64,t:"La dîme en Christ, une hérésie"},
 {n:65,t:"La bénédiction en Jésus-Christ"},
 {n:66,t:"Ce que le Coran dit de Jésus-Christ"},
 {n:67,t:"L'église un corps"},
 {n:68,t:"L'église une plante"},
 {n:69,t:"L'église un sacerdoce"},
 {n:70,t:"Lève-toi et brille"},
 {n:71,t:"Brebis perdues"},
 {n:72,t:"Où va le monde ? La mondialisation"},
 {n:73,t:"Semer sur les eaux"},
 {n:74,t:"Croire et demeurer"}
];

/* Un livret remis a part : il annonce lui-meme etre "un extrait du
   livre revise intitule : Le Pere, le Fils, le Saint-Esprit : Trois ou
   Un ?". C'est donc la definition du traite, en acte. */
const LIVRETS=[
 {t:"Les aspects visibles et invisibles de Dieu",
  tire:"Le Père, le Fils, le Saint-Esprit : Trois ou un ?",
  pdf:'documents/les-aspects-de-dieu.pdf'}
];

/* --- les petits outils partages ----------------------------------- */
function lienVideo(v){
  return v.src==='facebook'
    ? 'https://www.facebook.com/plugins/video.php?href='+encodeURIComponent(v.id)+'&autoplay=1'
    : 'https://www.youtube.com/embed/'+v.id+'?autoplay=1';
}
function vignetteVideo(v){ return 'images/videos/'+v.id+'.jpg'; }
function minutesVideo(v){ return parseInt(v.d,10)||0; }
function echapper(s){
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
}
/* le temps de lecture : 200 mots a la minute, jamais moins d'une minute */
function minutesTexte(mots){ return Math.max(1,Math.round(mots/200)); }
