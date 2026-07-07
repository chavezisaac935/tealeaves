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
  ('What is the Spanish word for "hello"?', 'Hola'),
  ('How do you say "thank you" in Spanish?', 'Gracias'),
  ('Translate: "Good morning"', 'Buenos días'),
  ('What does "adiós" mean in English?', 'Goodbye'),
  ('How do you say "please" in Spanish?', 'Por favor'),
  ('Translate: "My name is..."', 'Mi nombre es... / Me llamo...'),
  ('What is the Spanish word for "water"?', 'Agua'),
  ('How do you say "Yes, please" in Spanish?', 'Sí, por favor'),
  ('Translate: "Do you speak English?"', '¿Hablas inglés?'),
  ('What does "de nada" mean in English?', 'You''re welcome')
ON CONFLICT DO NOTHING;