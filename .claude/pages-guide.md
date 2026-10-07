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
- Une seule colonne centree (max 820px) : texte de presentation (parcours atypique GEII → SIO) + **placeholder alternance**
- (L'ancien bloc "En quelques chiffres" a ete retire a la demande d'Adam)

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

**Theme unique : l'automatisation par l'IA avec n8n et Python** (opportunites + risques de securite).
Contenu redige AVEC accents (contrairement au reste du site, encore sans accents).

### Section 1 : Hero compact (sous-titre = intitule du theme)

### Section 2 : Mon sujet de veille
- Encadre `.veille-problem` (problematique) + texte d'intro `.veille-intro`
- 3 cards : n8n / Python / IA & agents

### Section 3 : Les notions cles (fond `--bg-alt`)
- `.glossary-grid` : Workflow, Declencheur, LLM, Agent IA, MCP, Injection de prompt

### Section 4 : n8n ou Python ?
- Tableau comparatif `.skills-table.compare-table` (en-tetes de ligne `th[scope=row]`) + encadre "Mon constat"

### Section 5 : Cas d'usage etudie (fond `--bg-alt`)
- 5 etapes `.methodology-steps` (tri des alertes de securite) + `.two-col` : exemple Python (`.code-block`) / mesures de securite (`.veille-list`)
- Presente comme cas ETUDIE, pas comme realise par Adam

### Section 6 : Chronologie de l'actualite (`.timeline`, oct. 2025 → oct. 2026)

### Section 7 : Articles analyses (fond `--bg-alt`)
- 6 `article.veille-card` : meta, titre, tags, `.veille-summary`, encadre `.veille-analysis` ("Mon analyse"), lien source
- Les analyses sont des propositions a faire reformuler par Adam

### Section 8 : Bilan (3 cards) 

### Section 9 : Methodologie + sources (fond `--bg-alt`)
- 4 etapes (Identifier, Collecter, Verifier, Exploiter) + 3 cards : sources officielles, cybersecurite, outils (**placeholder**)

Pour ajouter un article : dupliquer un `article.veille-card`, et ajouter l'evenement a la chronologie si pertinent.

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
