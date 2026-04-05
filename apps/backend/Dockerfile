# 1. Base image select karein
FROM node:20-alpine

# 2. Container ke andar folder set karein
WORKDIR /app

# 3. Dependencies copy aur install karein
COPY package*.json ./
RUN npm install --production

# 4. Saara code copy karein
COPY . .

# 5. Port expose karein (jo aapke compose mein hai)
EXPOSE 5000

# 6. App start karne ki command
# Production ke liye 'node index.js' ya 'npm start' use karein
CMD ["node", "index.js"]