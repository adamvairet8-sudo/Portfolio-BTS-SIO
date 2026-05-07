# Guide des pages — Contenu section par section

> Chaque page a la meme structure de base : skip-link, navbar, modal contact, main, footer.
> Seul le contenu de `<main>` change. La navbar et le footer sont identiques (aux chemins relatifs pres).

---

## index.html — Accueil

### Section 1 : Hero
- Canvas particules en arriere-plan (`#particles-canvas`)
- Photo d'Adam (actuellement **placeholder** SVG utilisateur)
- Titre : "Adam VAIRET" en gradient-text
- Sous-titre : "Etudiant BTS SIO option SISR — AFTEC Rennes"
- **Typewriter** : boucle sur 3 phrases (`data-texts="Passionne de cybersecurite|Infrastructure & Reseaux|En alternance BTS SIO SISR"`)
- Deux CTA : "Decouvrir mon parcours" (→ competences.html) + "Me contacter" (ouvre modal)

### Section 2 : "Qui suis-je ?"
- Layout deux colonnes (`.two-col`)
- **Colonne gauche** : Texte de presentation (parcours atypique GEII → SIO), **placeholder alternance**
- **Colonne droite** : 4 chiffres cles dans des carres neo-inset avec compteurs animes :
  - 19/20 (meilleure note promo GEII)
  - 2 ans (d'etudes superieures)
  - 5+ (langages maitrises)
  - SISR (option choisie)

### Section 3 : Timeline parcours (fond `--bg-alt`)
- 4 etapes : BTS SIO (en cours) → BUT GEII annee 1 (highlight, 19.5/20) → BUT GEII S1 → Bac NSI
- Barre verticale gradient accent
- Le BUT GEII annee 1 a un `.timeline-dot.highlight` + badge "19,5/20"

### Section 4 : Cards apercu "Explorer"
- 3 cards cliquables (liens vers les autres pages) :
  - Competences (icone code)
  - Situations Pro (icone moniteur)
  - Veille Technologique (icone signal)

---

## html/competences.html — Competences

### Section 1 : Hero compact (`.hero-page`)
- Titre + sous-titre uniquement, pas de photo/typewriter

### Section 2 : Tableau de synthese BTS SIO SISR
- Tableau HTML (`.skills-table`) avec 4 colonnes : Competence, Description, Contexte, Niveau
- 6 competences du referentiel listees
- La plupart des cellules Contexte/Niveau sont des **placeholders inline** (`.placeholder-inline`)
- Seuls "Developper la presence en ligne" (ce portfolio) et "Travailler en mode projet" (mini console) sont remplis
- **Placeholder global** sous le tableau rappelant qu'il est incomplet

### Section 3 : Competences techniques (fond `--bg-alt`)
- Layout `.two-col`
- **Colonne gauche** "Langages & Scripting" : 6 progress bars (Python 65%, C/C++ 60%, Java 50%, Bash 45%, SQL 50%, HTML/CSS 70%) — tous estimes, **placeholder** en bas
- **Colonne droite** "Reseaux & Systemes" : 6 progress bars (Routage 50%, DNS/DHCP 55%, Windows 65%, WinServer/AD 35%, Linux 40%, Cybersecu 35%) — tous estimes, **placeholder** en bas
- Chaque barre utilise `.progress-bar[data-width]` anime au scroll + `.counter[data-target]`

### Section 4 : Outils & Technologies
- Grille de 8 items (`.tools-grid`) : Windows, Terminal/Bash, SQL, Python, Cybersecurite, Reseaux, HTML/CSS, Unreal Engine
- **Placeholder** en bas pour outils supplementaires (virtualisation, Cisco, Wireshark...)

### Section 5 : Savoir-etre (fond `--bg-alt`)
- 3 cards : Travail en equipe, Rigueur & Organisation, Adaptabilite
- Contenu argumente avec les experiences d'Adam

---

## html/situations.html — Situations Professionnelles

### Section 1 : Hero compact

### Section 2 : Cards SP (empilees verticalement, pas de grille)
Chaque SP est une `.card` pleine largeur avec :
- En-tete : icone + titre + date + badge optionnel
- Description textuelle
- Placeholder(s) pour les details manquants
- Tags en bas

**SP 1 : Alternance BTS SIO SISR** (badge "En cours")
- **Entierement placeholder** — c'est la SP la plus critique
- Liste des infos a fournir (entreprise, missions, technos, competences SISR)

**SP 2 : Projet Mini Console de Jeu** (badge "19,5/20")
- Description existante basee sur le CV
- Competences mobilisees listees
- **Placeholder** pour details techniques (langages, photos, code source, schema)

**SP 3 : Stage Finlab — Geneve**
- Description minimale basee sur le CV
- **Placeholder** pour missions precises, langages, valorisabilite BTS

**SP 4 : Projets & TP — BTS SIO**
- **Entierement placeholder** — liste des choses a documenter

---

## html/veille.html — Veille Technologique

### Section 1 : Hero compact

### Section 2 : Methodologie de veille
- 4 etapes en grille (`.methodology-steps`) avec compteur CSS automatique :
  1. Identifier (sources fiables)
  2. Collecter (RSS, newsletters, reseaux sociaux)
  3. Analyser (trier et synthetiser)
  4. Partager (documenter et restituer)

### Section 3 : Theme(s) de veille (fond `--bg-alt`)
- **2 placeholders** :
  - Theme(s) choisi(s) (cybersecurite ? reseaux ? IA ?)
  - Sources de veille (sites, YouTube, Reddit, newsletters)

### Section 4 : Articles & Actualites
- 3 cartes `.veille-card` empilees (pas de grille) — toutes **placeholder**
- Chaque carte a : meta (date + source), titre, contenu placeholder
- Adam doit fournir 3-5 articles avec titre, source, date, resume, avis personnel

---

## html/about.html — A propos

### Section 1 : Hero compact

### Section 2 : Bio + Photo
- Layout `.two-col`
- **Colonne gauche** : Photo (placeholder) + nom + age + ville + titre
- **Colonne droite** : Texte biographique (3 paragraphes sur le parcours atypique) + bouton telechargement CV (**placeholder** — PDF a fournir)

### Section 3 : CV interactif (fond `--bg-alt`)
- Timeline complete (7 etapes) — plus detaillee que celle de l'accueil :
  - BTS SIO (avec placeholder alternance)
  - BUT GEII annee 1 (highlight)
  - BUT GEII S1
  - Bac NSI
  - Leclerc Drive (4 mois, 2024)
  - Vandemoortele (ete 2023)
  - Finlab (2020)

### Section 4 : Centres d'interet
- 4 items (`.interests-grid`) : Football, Musique, Sports mecaniques, Informatique
- Chacun avec icone + titre + sous-texte

### Section 5 : Langues (fond `--bg-alt`)
- 2 items : Francais (maternelle), Anglais (specialite bac, niveau a preciser)

### Section 6 : Certifications
- **Entierement placeholder** — Cisco CCNA ? Microsoft ? CompTIA ?

---

## Elements communs a toutes les pages

### Navbar
```
Logo (SVG layers + "Adam V.") | Accueil | Competences | Situations Pro | Veille | A propos | [Toggle theme] [Contact] [Burger mobile]
```
- Le lien de la page courante a la classe `.active`
- Le bouton Contact ouvre le modal (`data-modal="contact"`)

### Modal contact
- Telephone : 06 31 24 37 82
- Email : adamvairet8@gmail.com
- Localisation : Cornille (35) — Bretagne
- Liens sociaux : **placeholder** (GitHub + LinkedIn a fournir)

### Footer
- 3 colonnes : Presentation | Navigation (5 liens) | Contact (email + tel)
- Copyright : "2025-2026 Adam VAIRET — Portfolio BTS SIO SISR"
