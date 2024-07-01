# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app/client

# Copy the package.json and yarn.lock files to the container
COPY client/package.json client/yarn.lock ./

# Install dependencies
RUN npm install 

# Copy the rest of the application code to the container
COPY client/ ./
# Expose the port the app runs on
EXPOSE 5173

# Command to run the app
CMD ["yarn", "dev"]
