# Systeme de placeholders

## Principe

Toute information qu'Adam n'a pas encore fournie est visible sur le site via un **placeholder visuel** : bordure violette en pointilles avec une animation pulsante. Cela permet de :

1. Montrer a Adam exactement ce qui manque
2. Montrer a un evaluateur que le portfolio est en construction
3. Guider le prochain developpeur (humain ou Claude) sur ce qu'il faut remplir

## Les 3 types de placeholders

### 1. `.placeholder` — Bloc complet
```html
<div class="placeholder" data-missing="Description de l'info manquante">
  <p class="placeholder-text">Explication detaillee de ce qu'il faut fournir.</p>
</div>
```
- Bordure `2px dashed var(--accent)`, border-radius 16px
- Le `data-missing` s'affiche en haut en majuscules violettes via `::before`
- Animation `pulse-placeholder` (opacite 1 → 0.6 → 1 en 2s)
- **Usage** : sections entieres manquantes (alternance, veille, projets)

### 2. `.placeholder-inline` — Dans du texte ou un tableau
```html
<span class="placeholder-inline">A completer — details attendus</span>
```
- `display: inline-block`, fond violet 10%, bordure dashed, border-radius 4px
- Texte violet en italique
- **Usage** : cellules de tableau, bouts de phrase manquants

### 3. `.placeholder-badge` — Pour les tags et liens
```html
<span class="placeholder-badge">
  <svg>...</svg>  <!-- icone warning optionnelle -->
  Texte court
</span>
```
- Pilule (border-radius 2rem), fond violet 15%, bordure dashed
- Animation pulse
- **Usage** : tags de technologies inconnues, liens sociaux a fournir, bouton CV

## Synchronisation avec MISSING-INFO.md

Chaque placeholder sur le site doit avoir une entree correspondante dans `MISSING-INFO.md` a la racine du projet. Ce fichier est organise en 3 niveaux de priorite :

- **CRITIQUE** : Photo, GitHub, LinkedIn, CV PDF, details alternance, tableau SISR
- **IMPORTANT** : Niveaux de competences, projet mini console, Finlab, projets BTS
- **UTILE** : Veille, certifications, projets perso, favicon

## Procedure pour remplacer un placeholder

Quand Adam fournit une information :

1. **Trouver** le placeholder dans le HTML (chercher `data-missing` ou `placeholder-inline`)
2. **Remplacer** l'element placeholder par le contenu reel :
   - Pour `.placeholder` : remplacer tout le `<div class="placeholder">...</div>` par du contenu normal
   - Pour `.placeholder-inline` : remplacer le `<span>` par du texte brut
   - Pour `.placeholder-badge` : remplacer par un `.tag` ou `.social-link` normal
3. **Cocher** dans `MISSING-INFO.md` : `- [ ]` → `- [x]`
4. **Verifier** que le contenu s'integre bien visuellement (bon theme, responsive)

### Exemple concret

**Avant** (photo manquante) :
```html
<div class="hero-photo placeholder" data-missing="Photo professionnelle HD a fournir">
  <svg><!-- icone utilisateur --></svg>
</div>
```

**Apres** (photo fournie) :
```html
<div class="hero-photo">
  <img src="images/adam-photo.webp" alt="Adam VAIRET" loading="lazy" width="180" height="180">
</div>
```

### Exemple progress bar

**Avant** (niveau estime) :
```html
<div class="progress-bar" data-width="65"></div>
<!-- placeholder en dessous -->
```

**Apres** (niveau confirme a 75%) :
```html
<div class="progress-bar" data-width="75"></div>
<!-- placeholder supprime -->
```

## Inventaire actuel des placeholders par page

### index.html (3 placeholders)
1. Hero photo (`.placeholder`)
2. Details alternance (`.placeholder`)
3. Liens sociaux dans le modal (`.placeholder-badge` x2)

### competences.html (5 placeholders)
1. 4 cellules du tableau SISR (`.placeholder-inline`)
2. Placeholder global sous le tableau (`.placeholder`)
3. Niveaux langages a confirmer (`.placeholder`)
4. Details reseaux/systemes (`.placeholder`)
5. Outils supplementaires (`.placeholder`)

### situations.html (4 placeholders)
1. Alternance complete (`.placeholder` + `.placeholder-badge`)
2. Projet mini console details (`.placeholder` + `.placeholder-badge`)
3. Finlab details (`.placeholder`)
4. Projets BTS SIO (`.placeholder`)

### veille.html (5 placeholders)
1. Theme(s) de veille (`.placeholder`)
2. Sources de veille (`.placeholder`)
3. Article 1 (`.placeholder`)
4. Article 2 (`.placeholder`)
5. Article 3 (`.placeholder`)

### about.html (4 placeholders)
1. Photo bio (`.placeholder`)
2. Bouton CV PDF (`.placeholder-badge`)
3. Entreprise alternance dans timeline (`.placeholder`)
4. Certifications (`.placeholder`)
