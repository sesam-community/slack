FROM node:4-slim
COPY ./service /service
WORKDIR /service
RUN npm install
EXPOSE 5000
CMD [ "npm", "start" ]
