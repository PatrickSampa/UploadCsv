from node:18

RUN npm install -g npm@9.5.1

WORKDIR /usr/app

COPY package.json ./

RUN npm install 

COPY . .

EXPOSE 3000

CMD ["npm","run","dev"]
