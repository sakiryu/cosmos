FROM node:18

WORKDIR /cosmos
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000

CMD [ "npm", "start" ]