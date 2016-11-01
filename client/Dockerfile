# include nginx server
FROM nginx

# TODO: build source in dockerfile

# override default nginx config with a custom one
COPY util/nginx.conf /etc/nginx/conf.d/default.conf

# copy webpack build to nginx default serve path
COPY public /usr/share/nginx/html
