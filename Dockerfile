FROM node:14.15.4-slim

WORKDIR /usr/local/src/express-graphql
ADD . .
RUN yarn install
CMD [ "yarn", "start" ]