FROM node:16-alpine AS build
WORKDIR /app

COPY . .
RUN npm install && \
    npm run build

FROM nginx
RUN rm -f /var/log/nginx/access.log && rm -f /var/log/nginx/error.log
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build/ /usr/share/nginx/html/
COPY ./nginx/filebeat.yml /etc/filebeat/filebeat.yml
EXPOSE 80
