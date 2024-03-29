FROM node:18

WORKDIR /home/api

COPY package.json ./

COPY prod.config.js ./

RUN npm install @nestjs/cli

COPY . .

RUN npm install --force

RUN npm run build

RUN npm install pm2 -g

EXPOSE 3000

CMD [ "pm2-runtime","--json","prod.config.js" ]