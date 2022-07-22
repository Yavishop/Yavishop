FROM nginx:1.23.0

#Rutinas para copiar el codigo

COPY docs/* /usr/share/nginx/html/

ENTRYPOINT ["nginx", "-g", "daemon off;"]
