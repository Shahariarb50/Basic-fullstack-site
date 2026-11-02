import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { pool } from './db.js';

const app = express();
const port = Number(process.env.PORT || 3001);

app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));
app.use(express.json());

app.get('/api/health', async (_req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ status: 'ok', database: 'connected' });
  } catch (error) {
    console.error('Database health check failed:', error.message);
    res.status(503).json({ status: 'error', database: 'disconnected' });
  }
});

app.get('/api/welcome', async (_req, res) => {
  try {
    const [rows] = await pool.execute(
      'SELECT setting_value FROM site_settings WHERE setting_key = ?',
      ['welcome_message'],
    );
    res.json({ message: rows[0]?.setting_value ?? 'Welcome to your new site.' });
  } catch (error) {
    console.error('Could not load welcome message:', error.message);
    res.status(500).json({ error: 'Could not load site content.' });
  }
});

app.listen(port, () => console.log(`API listening at http://localhost:${port}`));
