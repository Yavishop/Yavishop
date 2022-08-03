FROM node:16 AS builder 

WORKDIR /

COPY . .

RUN npm run build
FROM nginx:1.23.0
 
#Rutinas para copiar el codigo
COPY  --from=builder /docs/* /usr/share/nginx/html/


ENTRYPOINT ["nginx", "-g", "daemon off;"]
