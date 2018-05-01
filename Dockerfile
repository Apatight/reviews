FROM node:latest

RUN mkdir -p /app

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 3003

CMD [ "npm", "run", "docker" ]
