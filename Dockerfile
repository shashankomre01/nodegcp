FROM node:10
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm install mysql
COPY . /app
EXPOSE 8081

CMD [ "node", "index.js" ]