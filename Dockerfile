FROM node:10
WORKDIR /countdownah
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 2728
CMD [ "npm", "start" ]