FROM node:14-alpine
WORKDIR /app

COPY package*.json ./
RUN npm ci --production
COPY . .
RUN npm run build

CMD node dist/server.js
