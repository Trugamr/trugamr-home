# Fetch node alpine image
FROM node:12.19.0-alpine3.10
# Create app directory
WORKDIR /app
# Copying package json and installing deps
COPY package.json /app
RUN npm i
# Copying other files
COPY public /app/public
COPY src /app/src
COPY tsconfig.json /app
COPY next-env.d.ts /app
COPY .env.local /app
# Build app
RUN npm run-script build
# Expose default port
EXPOSE 3000
# Start listening to port 3000
ENTRYPOINT ["npm", "start"]