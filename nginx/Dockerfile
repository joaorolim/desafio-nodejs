FROM nginx:latest

# # Instala dependências e o Dockerize
# RUN apt-get update && apt-get install -y wget \
#   && wget https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz \
#   && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-v0.6.1.tar.gz \
#   && rm dockerize-linux-amd64-v0.6.1.tar.gz

RUN rm /etc/nginx/conf.d/default.conf

# Copia a configuração do Nginx
COPY nginx.conf /etc/nginx/conf.d

# # Comando de inicialização usando dockerize
# ENTRYPOINT ["dockerize", "-wait", "tcp://app:3000", "-timeout", "20s", "nginx", "-g", "daemon off;"]
