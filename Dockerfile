FROM node:12-alpine

RUN mkdir -p /src

WORKDIR /src

COPY . .

RUN npm install && npm run build

EXPOSE 8000

ENTRYPOINT ["npm", "run", "start:server"]
