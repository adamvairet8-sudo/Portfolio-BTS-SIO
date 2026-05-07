# Roadmap — Ce qui reste a faire

## Priorite 1 : Contenu manquant (depend d'Adam)

Ces taches ne peuvent avancer que quand Adam fournit les informations.
Voir `MISSING-INFO.md` pour la liste complete.

### A remplir des reception des infos
- [ ] Integrer la photo HD d'Adam (hero + about, format WebP, lazy loading)
- [ ] Mettre les vrais liens GitHub et LinkedIn
- [ ] Ajouter le CV PDF + activer le bouton telechargement
- [ ] Completer la section alternance (toutes les pages concernees)
- [ ] Remplir le tableau de synthese SISR avec les vraies realisations
- [ ] Ajuster les progress bars aux niveaux reels
- [ ] Developper la fiche du projet mini console (texte + medias)
- [ ] Developper la fiche Finlab
- [ ] Lister les projets/TP BTS SIO
- [ ] Renseigner le(s) theme(s) de veille et sources
- [ ] Rediger les 3-5 articles de veille commentes
- [ ] Completer les certifications

## Priorite 2 : Ameliorations techniques

### Performance
- [ ] Convertir les images en **WebP** (quand elles seront fournies)
- [ ] Ajouter `loading="lazy"` sur toutes les images
- [ ] Minifier CSS et JS pour la production
- [ ] Ajouter un **favicon** (actuellement manquant — `images/favicon.png` reference mais inexistant)

### SEO
- [ ] Ajouter les meta `og:*` (Open Graph) pour le partage social
- [ ] Ajouter `<link rel="canonical">` sur chaque page
- [ ] Creer un `sitemap.xml` basique
- [ ] Verifier les meta descriptions de chaque page

### Accessibilite
- [ ] Tester avec un lecteur d'ecran (NVDA ou VoiceOver)
- [ ] Verifier le contraste WCAG AA sur les deux themes (notamment texte secondaire)
- [ ] Ajouter `aria-live="polite"` sur le typewriter pour les lecteurs d'ecran
- [ ] Tester la navigation clavier complete (tabulation, Escape, Enter)

## Priorite 3 : Enrichissements possibles

### Fonctionnalites
- [ ] **Formulaire de contact** fonctionnel (via Formspree, Netlify Forms, ou EmailJS — pas de backend)
- [ ] **Bouton "retour en haut"** apparaissant au scroll
- [ ] **Barre de progression de lecture** sur les pages longues
- [ ] **Transition de page** (fade entre les pages via JS)
- [ ] **Mode impression** (`@media print`) pour imprimer proprement le CV interactif

### Contenu
- [ ] Section **temoignages** (professeur, maitre d'alternance) si dispo
- [ ] **Galerie photos** pour le projet mini console
- [ ] **Liens vers documentation** des projets (rapports, presentations)
- [ ] Logos des outils/technologies (remplacer les SVG generiques par les vrais logos)

### Technique
- [ ] Passer les icones SVG en **sprite SVG** (`<symbol>` + `<use>`) pour reduire la duplication
- [ ] Extraire la navbar et le footer dans des **composants** reutilisables (via JS `fetch()` + `insertAdjacentHTML`) pour eviter la duplication entre pages
- [ ] Ajouter des **tests Lighthouse** et optimiser si score < 90
- [ ] Heberger sur GitHub Pages / Netlify / Vercel

## Ce qui ne doit PAS changer

- Le design neomorphisme — c'est le choix valide
- La palette violet/bleu — coherente avec le CV d'Adam
- Le dark mode par defaut — demande explicite
- HTML/CSS/JS vanilla — contrainte du BTS (pas de framework)
- La structure des fichiers (`assets/css/`, `assets/js/`, `html/`, `images/`)
- La police Poppins
- Les icones Lucide en SVG inline (pas de CDN icones)

## Problemes connus

1. **Favicon manquant** : `images/favicon.png` est reference dans le HTML mais le fichier n'existe pas. A creer ou supprimer la balise.
2. **Duplication navbar/footer/modal** : Le meme HTML est copie dans chaque page. Si on modifie un lien de nav, il faut le faire dans 5 fichiers. Solution future : composant JS ou build step.
3. **Particles canvas** : Uniquement present sur `index.html`. Si on veut l'ajouter sur d'autres pages, il suffit d'ajouter `<canvas id="particles-canvas"></canvas>` dans le hero.
4. **`@import` CSS pour la police** : Peut bloquer le rendu. En production, envisager `<link rel="preconnect">` + `<link rel="stylesheet">` dans le HTML a la place.
