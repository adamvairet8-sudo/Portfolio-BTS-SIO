# ==========================================================================
# Portfolio Adam VAIRET - Image de production
# Site 100% statique servi par Nginx (aucune dependance, aucun build)
# ==========================================================================
FROM nginx:1.27-alpine

LABEL org.opencontainers.image.title="Portfolio Adam VAIRET"
LABEL org.opencontainers.image.description="Portfolio BTS SIO SISR - site statique HTML/CSS/JS"
LABEL org.opencontainers.image.authors="Adam VAIRET <adamvairet8@gmail.com>"

# Configuration Nginx personnalisee (gzip, cache, headers de securite)
COPY docker/security-headers.conf /etc/nginx/snippets/security-headers.conf
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Contenu du site
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*

COPY index.html ./
COPY html/ ./html/
COPY assets/ ./assets/
COPY images/ ./images/
COPY docs/ ./docs/

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --spider -q http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
