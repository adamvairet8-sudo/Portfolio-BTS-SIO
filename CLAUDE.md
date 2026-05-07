# CLAUDE.md — Portfolio Adam VAIRET

> Ce fichier est la reference principale pour tout agent Claude qui travaille sur ce projet.
> Lis ce fichier EN ENTIER avant de toucher au code. Les fichiers detailles sont dans `.claude/`.

## Projet en un mot

Portfolio BTS SIO SISR d'**Adam VAIRET**, etudiant en alternance a l'AFTEC Rennes (promotion 2025/2026), axe cybersecurite. Site statique HTML/CSS/JS vanilla avec design **neomorphisme** et **dark/light mode**.

## Regles absolues

1. **Aucun framework** — Pas de Bootstrap, Tailwind, React, Vue, jQuery. HTML5 + CSS3 + JS vanilla uniquement.
2. **Poppins** est la seule police (Google Fonts, poids 400/500/600/700).
3. **Lucide Icons** en SVG inline — aucune dependance icones externe (pas de Font Awesome).
4. **Neomorphisme** — Le design repose sur des ombres (box-shadow) sur un fond uni, PAS sur des bordures ou du glassmorphisme. L'element et son parent partagent la meme couleur de fond.
5. **Deux themes** — Dark (defaut, accent `#7c5ce8`) et Light (accent `#5b3de8`). Les deux utilisent du violet. Le toggle est dans la navbar.
6. **Placeholders visuels** — Toute information manquante doit avoir un placeholder visible (classe `.placeholder` avec `data-missing="..."`) ET etre listee dans `MISSING-INFO.md`.
7. **Mobile-first** — Breakpoints : 480px / 768px / 1024px / 1200px.
8. **Accessibilite WCAG AA** — Contraste, ARIA, skip-link, navigation clavier, `prefers-reduced-motion`.

## Structure des fichiers

```
portfolio-code/
  index.html                    # Page d'accueil
  html/
    competences.html            # Competences techniques (tableau SISR + progress bars)
    situations.html             # Situations professionnelles
    veille.html                 # Veille technologique
    about.html                  # A propos, CV interactif, interets
  assets/
    css/style.css               # Tout le CSS (design system + composants + responsive)
    js/main.js                  # Tout le JS (theme, animations, modal, curseur, particules)
  images/                       # Images du projet (actuellement quasi vide)
  MISSING-INFO.md               # Liste des infos qu'Adam doit fournir
  CLAUDE.md                     # Ce fichier
  .claude/                      # Documentation detaillee pour Claude
```

## Conventions de code

- **CSS** : Un seul fichier `style.css`, organise par sections avec commentaires `/* ========== SECTION ========== */`. Variables CSS dans `:root`. Pas de `!important` sauf `prefers-reduced-motion`.
- **JS** : Un seul fichier `main.js`, IIFE englobante, `'use strict'`. Fonctions nommees `initXxx()`, toutes appelees dans `init()`. Pas de variables globales.
- **HTML** : Semantique (nav, main, section, footer). Chaque page a la meme navbar et le meme footer. Le modal de contact est duplique dans chaque page.
- **Chemins** : Depuis `index.html` → `html/xxx.html` et `assets/...`. Depuis `html/*.html` → `../index.html` et `../assets/...`.

## Comment ajouter du contenu

Quand Adam fournit des informations manquantes :
1. Remplacer le placeholder HTML (`.placeholder` ou `.placeholder-inline`) par le contenu reel
2. Retirer la classe placeholder et l'attribut `data-missing`
3. Cocher l'element dans `MISSING-INFO.md`
4. Si c'est une progress bar, ajuster la valeur `data-width`

## Fichiers .claude/ disponibles

| Fichier | Contenu |
|---------|---------|
| `.claude/adam-profil.md` | Toutes les donnees connues sur Adam (CV, parcours, contact) |
| `.claude/design-system.md` | Palettes, neomorphisme, composants CSS, animations |
| `.claude/pages-guide.md` | Contenu et structure de chaque page, section par section |
| `.claude/placeholder-system.md` | Comment fonctionne le systeme de placeholders |
| `.claude/roadmap.md` | Ce qui reste a faire, priorites, ameliorations possibles |
