FROM nginx:alpine

COPY . /var/www/public

ENTRYPOINT ["nginx", "-g", "daemon off;"]
