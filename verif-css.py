#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Verifie l'equilibre des commentaires CSS dans tous les fichiers du site.

POURQUOI CE SCRIPT EXISTE. Un « */ » sans « /* » correspondant ne
provoque aucune erreur visible : le navigateur jette silencieusement la
regle qui suit, et on cherche longtemps pourquoi un style ne s'applique
pas. Cette erreur a ete commise trois fois sur ce projet, toujours en
ajoutant un commentaire explicatif au milieu d'un bloc existant.

A lancer apres toute modification de CSS :   python verif-css.py
"""
import io, glob, sys

def sans_commentaires(texte):
    """Retire les /* ... */ pour ne compter que les accolades du code."""
    sortie, i = [], 0
    while i < len(texte):
        if texte[i:i+2] == '/*':
            fin = texte.find('*/', i + 2)
            if fin < 0:
                break               # commentaire non ferme : signale ailleurs
            i = fin + 2
            continue
        sortie.append(texte[i]); i += 1
    return ''.join(sortie)


def analyser(texte, decalage_ligne=0):
    """Retourne (commentaires_non_fermes, [lignes des */ orphelins])."""
    profondeur, i, orphelins = 0, 0, []
    while i < len(texte) - 1:
        if texte[i:i+2] == '/*':
            profondeur += 1; i += 2; continue
        if texte[i:i+2] == '*/':
            if profondeur == 0:
                orphelins.append(texte[:i].count('\n') + 1 + decalage_ligne)
            else:
                profondeur -= 1
            i += 2; continue
        i += 1
    return profondeur, orphelins

soucis = 0
for chemin in sorted(glob.glob('*.css') + glob.glob('*.html')):
    if chemin.startswith('_'):
        continue
    s = io.open(chemin, encoding='utf-8').read()

    if chemin.endswith('.css'):
        morceaux = [(s, 0)]
    else:
        morceaux = []
        depart = 0
        while True:
            a = s.find('<style>', depart)
            if a < 0: break
            b = s.find('</style>', a)
            if b < 0: break
            morceaux.append((s[a+7:b], s[:a+7].count('\n')))
            depart = b
    if not morceaux:
        continue

    for texte, decalage in morceaux:
        profondeur, orphelins = analyser(texte, decalage)
        if profondeur:
            print('%-24s %d commentaire(s) jamais ferme(s)' % (chemin, profondeur)); soucis += 1
        for ligne in orphelins:
            print('%-24s ligne %d : « */ » orphelin, la regle suivante est ignoree'
                  % (chemin, ligne)); soucis += 1

    # Les accolades, une fois les COMMENTAIRES RETIRES. Sans cela, une
    # accolade citee dans un commentaire explicatif (« @media(...){ ... »)
    # est comptee comme du code et declenche une fausse alerte. C'est
    # arrive des le premier usage de ce script.
    total = sans_commentaires(''.join(t for t, _ in morceaux))
    if total.count('{') != total.count('}'):
        print('%-24s accolades desequilibrees : %d ouvertes, %d fermees'
              % (chemin, total.count('{'), total.count('}'))); soucis += 1

print('--- %s ---' % ('AUCUN PROBLEME' if soucis == 0 else '%d PROBLEME(S)' % soucis))
sys.exit(1 if soucis else 0)
