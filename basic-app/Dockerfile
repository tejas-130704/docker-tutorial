# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend files
COPY . .

# Expose the port the server runs on
EXPOSE 80

# Start the server
CMD ["node", "index.js"]
