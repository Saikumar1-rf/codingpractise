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


# Step 1: Build the React app
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Use Alpine + Install NGINX + Apache2
FROM alpine:latest

# Install required packages
RUN apk update && \
    apk add nginx apache2 apache2-utils && \
    rm -rf /var/cache/apk/*

# Remove default NGINX config and use custom
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

# Copy React build to NGINX's web directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Create folders Apache2 expects
RUN mkdir -p /run/apache2 && \
    echo "It works with Apache2 too!" > /var/www/localhost/htdocs/index.html

# Expose the ports for both NGINX and Apache (optional)
EXPOSE 80   
EXPOSE 8080 

# Start only NGINX (you can change this if you want to run apache2 instead)
CMD ["nginx", "-g", "daemon off;"]
