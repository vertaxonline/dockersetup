# Frontend Dockerfile - React + Vite + Tailwind v4 (Development)
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

# Important: Vite ko Docker mein properly expose karne ke liye
ENV HOST=0.0.0.0
ENV PORT=5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]