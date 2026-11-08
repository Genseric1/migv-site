# Site du Ministère International Grâce et Vérité

Maquette en relecture. **Ce n'est pas le site définitif.**

Site statique : du HTML, du CSS et du JavaScript, sans serveur ni base
de données. Il s'ouvre en double-cliquant sur `index.html`, et se publie
en copiant le dossier.

---

## Ce que le site contient

| Page | Ce qu'on y trouve |
|---|---|
| `index.html` | L'accueil : la mission, les quatre formes de ressources, l'histoire |
| `dimanche.html` | Le résumé illustré de la prédication, par date |
| `enseignements.html` | L'entrée vers les traités et les livres, plus 24 textes |
| `traites.html` | Les 72 traités du ministère, 5 lisibles en ligne |
| `livres.html` | Les 15 livres de la bibliographie, en accès libre |
| `collections.html` | Six sujets, chacun rassemblant textes et vidéos |
| `videos.html` | Les enseignements filmés |
| `histoire.html` | L'appel de 1977, la mission de 1984 |
| `biographie.html` | Le parcours du Docteur Théodore Nettaud GUEU |
| `actualites.html` | En attente des comptes rendus du ministère |
| `soutenir.html` | Pourquoi tout est gratuit, et comment participer |
| `contact.html` | Les canaux ouverts et les huit assemblées |

## Comment c'est organisé

```
index.html, dimanche.html, …   une page = un fichier
style.css                      le site d'origine
refonte.css                    le système visuel commun aux pages refondues
refonte.js                     le pied de page et le comportement d'en-tête
commun.js                      le menu, les assemblées, les prédications
ressources.js                  les vidéos, les sujets, les livres, les traités
donnees.js                     les 24 textes et les versets cités
images/   documents/           les photographies et les PDF
```

**Les données ne sont jamais écrites dans les pages.** Ajouter un livre,
une vidéo ou un traité se fait en ajoutant une ligne dans
`ressources.js` : les pages qui s'en servent se mettent à jour seules,
y compris les comptes affichés.

## Ce qui reste à confirmer par le ministère

Ces points sont signalés dans les pages elles-mêmes, et commentés dans
le code. Ils n'ont pas été comblés par des approximations.

- **L'adresse de courriel.** `contact@migv.ci` vient d'une
  recommandation d'audit, pas du ministère. L'orthographe exacte reste
  à valider.
- **Le nombre d'assemblées.** Le site en affiche huit ; les notes de
  réunion du 3 octobre 2026 disaient « cinq ou six ».
- **La date de fondation du MIGV.** Le dossier raconte l'appel de 1977
  et la mission de 1984, mais jamais l'année où le ministère a pris son
  nom.
- **Le classement des 72 traités par sujet.** C'est une décision
  doctrinale. Tant qu'elle n'est pas prise, les traités n'apparaissent
  pas dans les collections.
- **19 des 24 textes** retrouvés sur l'ancien site ne correspondent à
  aucun traité de la liste officielle et restent à classer.
- **Les photographies d'archives.** Elles sont dans le dossier du
  ministère ; leurs douze emplacements sont posés dans `histoire.html`.

## Pourquoi le site n'est pas dans Google

`robots.txt` interdit le parcours, et chaque page porte une balise
`noindex`. C'est volontaire tant que les points ci-dessus ne sont pas
tranchés : ils ne doivent pas remonter dans un moteur de recherche au
nom du ministère avant d'avoir été validés.

**Le jour de la vraie mise en ligne**, deux choses à faire :

1. dans `robots.txt`, remplacer `Disallow: /` par `Allow: /` ;
2. retirer la balise `<meta name="robots" content="noindex, nofollow">`
   des quatorze pages.

---

Ministère International Grâce et Vérité — Abidjan, Côte d'Ivoire.
