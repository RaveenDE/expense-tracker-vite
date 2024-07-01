# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app/server

# Copy the package.json and yarn.lock files to the container
COPY server/package.json yarn.lock ./

# Install dependencies
RUN npm install -g yarn

# Copy the rest of the application code to the container
COPY . .

# Expose the port the app runs on
EXPOSE 3001

# Command to run the app
CMD ["yarn", "dev"]
