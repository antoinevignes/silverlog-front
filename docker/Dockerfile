FROM node:22.11.0-alpine AS dev

WORKDIR /app

COPY ../package*.json ./

RUN npm ci

COPY .. .

RUN npm run build

CMD ["npm", "run", "dev", "--", "--host"]

# PRODUCTION

FROM nginx:alpine AS prod
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=dev /app/dist /usr/share/nginx/html