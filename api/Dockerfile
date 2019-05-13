FROM node:11.6.0-alpine as server

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /usr/src/app
COPY package.json .

RUN yarn install --production

COPY src src
COPY api-db.json api-db.json

CMD ["yarn", "start"]
