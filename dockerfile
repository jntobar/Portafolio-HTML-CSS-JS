# Usamos una imagen ligera de Nginx
FROM nginx:alpine

# Copiamos todos los archivos del portafolio a la carpeta de Nginx
COPY . /usr/share/nginx/html

# Exponemos el puerto 80 para servir la web
EXPOSE 80

# Iniciamos el servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
