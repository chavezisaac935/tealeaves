CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS cards (
  id SERIAL PRIMARY KEY,
  front TEXT NOT NULL,
  back TEXT NOT NULL,
  review_count INTEGER NOT NULL DEFAULT 0
);

INSERT INTO users (name) VALUES
  ('Isaac'),
  ('Ellie'),
  ('Irene')
ON CONFLICT DO NOTHING;

INSERT INTO cards (front, back) VALUES
  ('Who is the greatest team of all time?', 'France'),
  ('What does Irene like to collect', 'Rocks'),
  ('How many years since America''s founding?', '250'),
  ('When did Isaac and Ellie become official?', 'June 8th, 2019 (According to Ellie)'),
  ('Why not babies?', 'Always')
ON CONFLICT DO NOTHING;
