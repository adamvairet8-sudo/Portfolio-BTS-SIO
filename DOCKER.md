# Docker — Portfolio Adam VAIRET

Le portfolio est un site **100 % statique** (HTML/CSS/JS vanilla, aucun build,
aucune dépendance). Il est servi par **Nginx Alpine** dans un conteneur.

## Prérequis

- Docker Desktop (Windows) ou Docker Engine + plugin Compose

## Démarrage rapide

### Mode développement (recommandé pour travailler)

Le dossier du projet est monté dans le conteneur : **une modification du HTML,
du CSS ou du JS est visible avec un simple F5**, sans reconstruire l'image.

```bash
docker compose up -d dev
```

→ http://localhost:8081

Arrêter : `docker compose --profile dev down`

> ⚠️ `docker compose down` **seul n'arrête pas** le service `dev` : il est
> dans un profil, il faut donc préciser `--profile dev`.

### Mode production

Le site est **copié dans l'image** : elle est autonome et peut être déployée
sur n'importe quel serveur.

```bash
docker compose up -d --build
```

→ http://localhost:8081

Arrêter : `docker compose down`

> Les deux modes utilisent le port 8081 : ne pas les lancer en même temps.

## Commandes utiles

| Commande | Effet |
|----------|-------|
| `docker compose up -d --build` | Construit et lance la version prod en arrière-plan |
| `docker compose up -d dev` | Lance la version dev (volume monté, live reload) |
| `docker compose ps` | Liste les conteneurs du projet |
| `docker compose logs -f web` | Affiche les logs Nginx en direct |
| `docker compose down` | Arrête et supprime le conteneur de prod |
| `docker compose --profile dev down` | Arrête et supprime le conteneur de dev |
| `docker compose build --no-cache web` | Reconstruit l'image de zéro |
| `docker compose exec web nginx -t` | Vérifie la syntaxe de la config Nginx |

## Utiliser l'image sans Compose

```bash
docker build -t portfolio-adam-vairet .
docker run -d --name portfolio -p 8081:80 portfolio-adam-vairet
```

Changer de port (exemple : 9000) :

```bash
docker run -d -p 9000:80 portfolio-adam-vairet
```

> **Pourquoi 8081 ?** Sur cette machine, les ports 3000 (Grafana), 80, 8080
> et 9090 (relais WSL) sont déjà occupés. 8081 est libre. Sur une autre
> machine, n'importe quel port libre convient.

## Fichiers Docker du projet

| Fichier | Rôle |
|---------|------|
| `Dockerfile` | Image de production : Nginx Alpine + fichiers du site (74 Mo) |
| `docker-compose.yml` | Deux services : `web` (prod) et `dev` (volume monté) |
| `docker/nginx.conf` | Config Nginx prod : gzip, cache, en-têtes de sécurité |
| `docker/nginx.dev.conf` | Config Nginx dev : aucun cache, `sendfile off` |
| `docker/security-headers.conf` | En-têtes de sécurité, inclus dans chaque `location` |
| `.dockerignore` | Exclut `.git`, `.claude`, les `.md` internes de l'image |

> Pourquoi un fichier séparé pour les en-têtes ? Dans Nginx, un `add_header`
> déclaré dans un bloc `location` **annule tous ceux du bloc parent**. Le
> fichier est donc inclus dans chaque `location` pour qu'aucun en-tête de
> sécurité ne soit perdu.

## Ce que fait la configuration Nginx (prod)

- **Compression gzip** sur le HTML, CSS, JS, JSON et SVG
- **Cache navigateur** : 7 jours pour le CSS/JS, 30 jours pour les images,
  polices et PDF, aucun cache pour les pages HTML
- **En-têtes de sécurité** : `X-Content-Type-Options`, `X-Frame-Options`,
  `Referrer-Policy`, `Permissions-Policy`, `server_tokens off`
- **URLs propres** : `/html/about` fonctionne comme `/html/about.html`
- **Blocage** des fichiers et dossiers cachés (`/.git`, `/.env`…)
- **Documentation interne exclue** : `.claude/`, `CLAUDE.md` et
  `MISSING-INFO.md` ne sont jamais copiés dans l'image (`.dockerignore`)
- **Healthcheck** : Docker vérifie toutes les 30 s que le site répond

## Déploiement

L'image est autonome, elle peut être poussée sur un registre puis lancée
sur un serveur :

```bash
docker tag portfolio-adam-vairet ghcr.io/<utilisateur>/portfolio:latest
docker push ghcr.io/<utilisateur>/portfolio:latest
```

Pour du HTTPS en production, placer le conteneur derrière un reverse proxy
(Traefik, Caddy ou un Nginx hôte avec Let's Encrypt).

## Dépannage

| Problème | Solution |
|----------|----------|
| `failed to connect to the docker API` | Docker Desktop n'est pas démarré |
| `port is already allocated` | Le port 8081 est pris : changer `"8081:80"` en `"8082:80"` dans `docker-compose.yml` |
| Modifications invisibles en mode dev | Vider le cache du navigateur (Ctrl+F5) |
| Modifications invisibles en mode prod | Normal : relancer `docker compose up -d --build` |
