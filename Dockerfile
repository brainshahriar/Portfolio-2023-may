FROM node:16.18-alpine

WORKDIR /app

COPY . .

EXPOSE 3000

# this displays empty node_modules directory on host machine
#CMD [ "npm", "start" ]

# if node_modules present in host directly run the server
# else install packages and run the server
CMD [ -d "node_modules" ] && npm run start || npm ci && npm run start