import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const port = parseInt(process.env.PORT || '3001', 10);
const app = express();

app.use(cors());
app.use(express.json());
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));
app.use((req, res, next) => next(Object.assign(new Error('Not Found'), { statusCode: 404 })));
app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  res.status(status).json({ error: true, message: err.message || 'Internal Server Error' });
});

app.listen(port, () => console.log(`http://localhost:${port}`));
