FROM klakegg/hugo:0.105.0-ext-alpine-onbuild AS hugo

FROM nginx:mainline-alpine
COPY --from=hugo /target /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
RUN nginx -c /etc/nginx/nginx.conf -t
RUN apk --no-cache add curl
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD curl --fail --header "Host: portfolio.cyberjake.xyz" -I http://localhost