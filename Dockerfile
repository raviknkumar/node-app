FROM node:18

COPY . /node-hello

WORKDIR /node-hello

RUN npm ci

# RUN npm install pm2 -g

EXPOSE 8000 

CMD ["node", "index"]