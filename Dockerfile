# Build Stage
FROM node:18-slim AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Production Stage
FROM node:18-slim
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/index.js ./
RUN npm install --only=production
EXPOSE 3000
CMD ["node", "index.js"]
