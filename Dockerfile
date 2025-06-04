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



FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy our custom config
COPY default.conf /etc/nginx/conf.d/

# Copy the image to the nginx html directory
COPY myimage.png /usr/share/nginx/html/
