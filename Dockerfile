FROM node:18-alpine

WORKDIR /app

COPY package.json .
COPY yarn.lock .

# Install dependencies
RUN yarn install --frozen-lockfile --production

# Add required assets
COPY src src
COPY www www
COPY server.js server.js

EXPOSE 8080

CMD ["yarn", "start"]
