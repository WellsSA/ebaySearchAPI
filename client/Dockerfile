FROM node:10-slim

WORKDIR /usr/app/client

COPY package*.json ./

RUN npm install -qy

COPY . .

EXPOSE 3000

CMD ["npm", "start"]