FROM nginx:1.23.4-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY target/frontend-0.0.1-SNAPSHOT.tar.gz ./frontend-0.0.1-SNAPSHOT.tar.gz

RUN tar -xvpzf ./frontend-0.0.1-SNAPSHOT.tar.gz -C /usr/share/nginx/html