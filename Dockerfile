FROM nginx:alpine

COPY static /var/www/public

ENTRYPOINT ["nginx", "-g", "daemon off;"]
