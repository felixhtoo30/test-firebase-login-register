
FROM node:21-alpine3.18
WORKDIR /app/backend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8002
CMD ["npm", "run", "start:dev"]