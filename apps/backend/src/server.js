import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: "Backend is running successfully 🚀",
    status: "ok"
  });
});

app.get('/api/test', (req, res) => {
  res.json({
    message: "API is working fine",
    serverTime: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server started on http://localhost:${PORT}`);
});