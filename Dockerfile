# frontend/Dockerfile

FROM node:22-alpine
WORKDIR /app

COPY package*.json ./
# Чтобы вызвать ng serve, нужно глобально установить @angular/cli
RUN npm install -g @angular/cli@17
RUN npm ci
COPY . .

EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0"]