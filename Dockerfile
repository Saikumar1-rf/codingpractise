# # Use the official Node.js image
# FROM node:18 

# # Set the working directory
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Build the application
# RUN npm run build

# # Serve the application
# CMD ["npm", "run","dev"]

# # Expose the port
# EXPOSE 3000




# # Use the official Node.js image
# FROM node:18

# # Set the working directory
# WORKDIR /app

# # Copy package.json and package-lock.json (if it exists)
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Build the production-ready app
# RUN npm run build

# # Install a lightweight static file server
# RUN npm install -g serve

# # Expose the port that serve will use
# EXPOSE 3000

# # Serve the built app using `serve`
# CMD ["serve", "-s", "dist", "-l", "3000"]


# # Step 1: Build the React app
# FROM node:18 AS builder

# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .
# RUN npm run build

# # Step 2: Serve the app with NGINX
# FROM nginx:alpine

# # Remove default config
# RUN rm /etc/nginx/conf.d/default.conf

# # Copy custom config
# COPY nginx.conf /etc/nginx/conf.d

# # Copy built files from React
# COPY --from=builder /app/dist /usr/share/nginx/html

# # Expose port
# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]


FROM ubuntu:20.04

ENV DEBIAN_FRONTEND=noninteractive

# Update and install all required software
RUN apt-get update && apt-get install -y \
    apache2 \
    nginx \
    openjdk-11-jdk \
    curl \
    gnupg \
    supervisor

# Install Jenkins
RUN curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io.key | apt-key add - && \
    echo "deb https://pkg.jenkins.io/debian-stable binary/" > /etc/apt/sources.list.d/jenkins.list && \
    apt-get update && apt-get install -y jenkins

# Remove default NGINX site and replace with your own if needed
RUN rm /etc/nginx/sites-enabled/default

# Copy your supervisord config
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Expose necessary ports
EXPOSE 80     
EXPOSE 8080   
EXPOSE 50000  

# Start Supervisor to run all services
CMD ["/usr/bin/supervisord"]
