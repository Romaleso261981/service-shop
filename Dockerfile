FROM node:20-bookworm-slim

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
ENV DATABASE_URL=postgres://shop:shop@postgres:5432/service_shop
RUN mkdir -p /seed/data /seed/images \
  && cp -a public/assets/images/. /seed/images/ \
  && cp src/data/products.json /seed/data/products.json \
  && npm run build \
  && chmod +x docker-entrypoint.sh

ENV NODE_ENV=production
EXPOSE 3000

ENTRYPOINT ["./docker-entrypoint.sh"]
