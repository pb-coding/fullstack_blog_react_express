FROM node:alpine
WORKDIR /app
COPY package.json ./
RUN ls -al
COPY package-lock.json ./
COPY ./ ./
RUN npm i
CMD ["npm", "run", "start"]