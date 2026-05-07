# Design System — Neomorphisme + Dark/Light Mode

## Principe du neomorphisme

Le neomorphisme (ou neumorphism) cree de la profondeur uniquement avec des **ombres** sur un fond **uni et identique** entre parent et enfant. Pas de bordures, pas de background different pour les cards.

- **Raised** (`.neo-raised`) : Ombre foncee en bas-droite + ombre claire en haut-gauche → effet "souleve"
- **Inset** (`.neo-inset`) : Meme principe mais en `inset` → effet "enfonce"  
- **Flat** (`.neo-flat`) : Ombre subtile → separation visuelle legere

**Regle d'or** : `background` de l'element = `--bg` (la meme couleur que le fond de page). C'est les ombres qui font tout.

## Palettes de couleurs

### Dark Mode (defaut)
```css
--bg: #1e2a3a;           /* Fond principal */
--bg-alt: #1a2433;        /* Fond alterne (sections paires) */
--shadow-dark: rgba(10, 15, 25, 0.7);
--shadow-light: rgba(40, 58, 80, 0.5);
--text-primary: #e2e8f0;
--text-secondary: #94a3b8;
--accent: #7c5ce8;        /* Violet */
--accent-alt: #4facfe;    /* Bleu */
--accent-rgb: 124, 92, 232;  /* Pour rgba() */
```

### Light Mode
```css
--bg: #e8ecf1;
--bg-alt: #dde3ec;
--shadow-dark: rgba(163, 177, 198, 0.6);
--shadow-light: rgba(255, 255, 255, 0.8);
--text-primary: #2d3748;
--text-secondary: #718096;
--accent: #5b3de8;        /* Violet (plus sature) */
--accent-alt: #3182ce;    /* Bleu */
--accent-rgb: 91, 61, 232;
```

### Variables structurelles
```css
--transition-speed: 0.4s;   /* Duree transition theme */
--radius: 16px;              /* Border-radius principal */
--radius-sm: 12px;           /* Border-radius secondaire */
--max-width: 1200px;         /* Largeur max conteneur */
--nav-height: 72px;          /* Hauteur navbar (64px sur mobile) */
```

## Theme toggle

- Icone soleil (light) / lune (dark) dans la navbar
- Detection automatique de `prefers-color-scheme` au chargement
- Choix persiste dans `localStorage` (cle: `adam-portfolio-theme`)
- Rotation 360deg de l'icone a chaque switch
- Transition `background-color + color + box-shadow` en 400ms sur TOUT le site

## Composants CSS disponibles

### Navbar
- `.navbar` : fixed top, neo-flat
- `.nav-logo` : gradient-text accent → accent-alt
- `.nav-link` : underline pseudo-element animee, `.active` = accent
- `.theme-toggle` : bouton rond neo-raised, `:active` → neo-inset
- `.menu-toggle` : visible uniquement < 768px, neo-raised

### Boutons
- `.btn` : base commune (padding, radius, font-weight, transition)
- `.btn-primary` : gradient accent → accent-alt, ombres neo
- `.btn-outline` : fond transparent, border accent, hover → rempli
- `.btn-sm` : version compacte
- Hover : `translateY(-2px)` + ombre augmentee
- Active : `translateY(1px)` + neo-inset

### Cards
- `.card` : neo-raised, hover → `translateY(-6px)` + `border-left: 3px accent`
- `.card-icon` : carre neo-inset contenant un SVG
- `.card-tags` → `.tag` : pilules neo-inset
- `.card-link` : lien avec fleche, hover → gap augmente

### Progress bars
- `.progress-container` : creux neo-inset (12px de haut)
- `.progress-bar` : gradient accent, `width: 0` par defaut, anime via `data-width` au scroll
- `.skill-label` + `.skill-percent` : ligne au-dessus avec compteur anime

### Timeline
- `.timeline` : barre verticale gradient a gauche
- `.timeline-item` : point (`.timeline-dot`), date, contenu neo-flat
- `.timeline-dot.highlight` : plus gros + halo accent
- `.timeline-badge` : pilule gradient pour les distinctions

### Tableau
- `.table-container` : conteneur neo-raised avec `overflow-x: auto`
- `.skills-table` : tableau complet, thead gradient, hover lignes

### Modal contact
- `.modal-overlay` : fond flou (`backdrop-filter: blur(8px)`)
- `.modal` : neo-raised prononce, animation `scale(0.92) → scale(1)`
- Fermeture : clic overlay, bouton X, touche Escape

### Footer
- `.footer` : ombre top, grille 3 colonnes responsive
- `.footer-links` : liens couleur secondaire → accent au hover

### Placeholders (voir `.claude/placeholder-system.md`)
- `.placeholder` : bordure dashed accent, animation pulse
- `.placeholder-inline` : inline dans du texte/tableau
- `.placeholder-badge` : pilule pour les tags/liens manquants

## Animations (toutes dans `main.js`)

| Animation | Declencheur | Details |
|-----------|-------------|---------|
| Scroll reveal | IntersectionObserver (threshold 0.15) | `.animate-on-scroll` → `.visible`, stagger auto via `data-delay` |
| Typewriter | Au chargement du hero | `.typewriter[data-texts="A\|B\|C"]`, boucle infinie |
| Progress bars | IntersectionObserver (threshold 0.3) | `.progress-bar[data-width]`, transition 1.2s |
| Compteurs | IntersectionObserver (threshold 0.5) | `.counter[data-target][data-suffix]`, ease-out quad 1.2s |
| Curseur custom | Mouvement souris (desktop only) | `.cursor-dot` + `.cursor-ring` avec lag 0.15, grossit sur hover |
| Particules | Canvas continu | `#particles-canvas`, 40 particules + lignes, opacity 0.08 |
| Theme toggle | Clic bouton | Rotation 360deg icone, transition 400ms globale |
| Modal | Clic bouton / Escape | scale + opacity + blur overlay |

## Responsive

| Breakpoint | Changements principaux |
|------------|----------------------|
| 1024px | `.two-col` passe en 1 colonne |
| 768px | Menu burger visible, nav-links en dropdown vertical, hero compact, grilles en 1 colonne |
| 480px | Titres plus petits, boutons pleine largeur, padding reduit |

## Accessibilite

- Skip-link `#main` sur chaque page
- `aria-label` sur tous les boutons/icones
- `aria-expanded` sur le menu burger
- `role="dialog" aria-modal="true"` sur le modal
- `prefers-reduced-motion: reduce` desactive toutes les animations
- `:focus-visible` outline accent sur tout element focusable
- Curseur custom masque sur `(hover: none)` ou `(pointer: coarse)`
