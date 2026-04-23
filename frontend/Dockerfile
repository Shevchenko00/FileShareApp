FROM node:20-slim

WORKDIR /app


COPY package*.json ./
RUN npm install

COPY . .

COPY .env_example .env


CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5174"]