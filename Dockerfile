# ========== base stage ==========
FROM node:22 AS base
WORKDIR /app
COPY . .
RUN npm ci

FROM base AS dev
ENV NODE_ENV=development
COPY .env.development .env
CMD ["npm", "run", "serve", "--", "--mode", "development"]

# ========== test ==========
FROM base AS test
ENV NODE_ENV=test
COPY .env.test .env
RUN npm run build -- --mode test
CMD ["npm", "run", "test:unit"]

# ========== build ==========
FROM base AS build
ENV NODE_ENV=production
COPY .env.production .env
RUN npm run build -- --mode production

# ========== prod ==========
FROM nginx:alpine AS prod
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80