import express from 'express';
import cors from 'cors';
import pool from './db/pool.js';

const app = express();
const PORT = 8000;

const origins = [
  'https://lively-sky-0fc85c010.7.azurestaticapps.net',
  'http://localhost:5173',
  'http://localhost:3000',
];

app.use(cors({ origin: origins, credentials: true }));
app.use(express.json());

app.get('/users/:user_id', async (req, res) => {
  const id = parseInt(req.params.user_id, 10);
  const { rows } = await pool.query('SELECT name FROM users WHERE id = $1', [id]);
  if (rows.length === 0) return res.status(404).json({ detail: 'This user was not found' });
  res.json({ user: rows[0].name });
});

app.get('/cards', async (req, res) => {
  const { rows } = await pool.query('SELECT id, front, back, review_count AS "reviewCount" FROM cards');
  res.json(rows);
});

app.post('/review_count/:card_id', async (req, res) => {
  const id = parseInt(req.params.card_id, 10);
  const { rows } = await pool.query(
    'UPDATE cards SET review_count = review_count + 1 WHERE id = $1 RETURNING id, front, back, review_count AS "reviewCount"',
    [id]
  );
  if (rows.length === 0) return res.status(404).json({ detail: 'Card not found' });
  res.json(rows[0]);
});

app.post('/add_card', async (req, res) => {
  const query = 'INSERT INTO cards (front, back) VALUES ($1, $2) RETURNING id, front, back, review_count AS "reviewCount"'
  const { front, back } = req.body;
  if(!front || !back) {
    return res.status(400).json({ detail: 'front and back are required' });
  }
  const { rows } = await pool.query(
    query, [front, back]
  );
  res.status(201).json(rows[0]);
});

app.listen(PORT, () => {
  console.log(`Tealeaves server running at http://127.0.0.1:${PORT}`);
});
