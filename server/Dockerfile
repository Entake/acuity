FROM node:6.9.1

# Install Yarn
# RUN npm i -g yarn

# When using npm install, only print errors/warnings
RUN npm config set loglevel warn

# Create app folder
RUN mkdir -p /app
WORKDIR /app

# Cache npm dependencies
COPY package.json yarn.lock /app/
RUN npm i

# Copy application files
COPY . /app

# Precompile javascript
RUN ./node_modules/.bin/babel src --out-dir dist

CMD ["node", "dist/index.js"]
