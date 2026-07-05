import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 8000;

const origins = [
  'https://lively-sky-0fc85c010.7.azurestaticapps.net',
  'http://localhost:5173',
  'http://localhost:3000',
];

app.use(cors({ origin: origins, credentials: true }));
app.use(express.json());

const users = {
  1: 'Isaac',
  2: 'Ellie',
  3: 'Irene',
};

const cards = [
  { id: 1, front: 'Who is the greatest team of all time?', back: 'France', reviewCount: 0 },
  { id: 2, front: 'What does Irene like to collect', back: 'Rocks', reviewCount: 0 },
  { id: 3, front: "How many years since America's founding?", back: '250', reviewCount: 0 },
  { id: 4, front: 'When did Isaac and Ellie become official?', back: 'June 8th, 2019 (According to Ellie)', reviewCount: 0 },
  { id: 5, front: 'Why not babies?', back: 'Always', reviewCount: 0 },
];

app.get('/users/:user_id', (req, res) => {
  const id = parseInt(req.params.user_id, 10);
  if (id < 1 || id > 3 || !users[id]) {
    return res.status(404).json({ detail: 'This user was not found' });
  }
  res.json({ user: users[id] });
});

app.get('/cards', (req, res) => {
  res.json(cards);
});

app.post('/review_count/:card_id', (req, res) => {
  const id = parseInt(req.params.card_id, 10);
  const card = cards.find((c) => c.id === id);
  if (!card) {
    return res.status(404).json({ detail: 'Card not found' });
  }
  card.reviewCount += 1;
  res.json(card);
});

app.listen(PORT, () => {
  console.log(`Tealeaves server running at http://127.0.0.1:${PORT}`);
});
