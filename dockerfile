FROM node:18

WORKDIR /machines-api
COPY package.json .
RUN npm install
COPY . .
CMD npm start