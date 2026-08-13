# Patch nginx prod — anthonyprime.fr (VM 103)
# À appliquer dans /etc/nginx/conf.d/anthonyprime.conf (server www.anthonyprime.fr)
# APRÈS validation Anthony sur OpenClaw.
#
# 1) Dans le bloc "location /" du server www.anthonyprime.fr, remplacer :
#        try_files $uri $uri/ =404;
#    par :
#        if ($md_suffix) {
#            rewrite ^(.*)/$ $1/index.md last;
#            rewrite ^(.*)$ $1.md last;
#        }
#        try_files $uri $uri/ =404;
#
# 2) Ajouter juste après ce location :
#        # Les .md sont servis en text/markdown
#        location ~ \.md$ {
#            default_type text/markdown;
#            try_files $uri =404;
#        }
#
# 3) Ajouter "text/markdown" à gzip_types si présent.
#
# 4) Créer /etc/nginx/conf.d/markdown-negotiation.conf (voir deploy/markdown-negotiation.conf)
#    puis : sudo nginx -t && sudo systemctl reload nginx
#
# 5) Link headers (RFC 8288) — ajouter dans le server www, avant "root" :
#        add_header Link '<https://www.anthonyprime.fr/llms.txt>; rel="llms-txt", <https://www.anthonyprime.fr/sitemap.xml>; rel="sitemap"' always;
#    ⚠️ Utiliser des guillemets SIMPLES pour la valeur (les doubles internes
#    ne sont pas échappables proprement via sed/python multi-couches).
#    ⚠️ Ne PAS mettre dans conf.d/ : les add_header du niveau http sont
#    écrasés par ceux du bloc server.

