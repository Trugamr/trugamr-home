# Fetch node alpine image
FROM node:12.19.0-alpine3.10
# Create app directory
WORKDIR /app
# Copying package json and installing deps
COPY package.json /app
RUN npm i
# Copying other files
COPY * /app/
# Build app
RUN npm run-script build
# Expose default port
EXPOSE 3000
# Set enviornment variables
ENV SITE_URL https://trugamr.codes
# Start listening to port 3000
ENTRYPOINT ["npm", "start"]
