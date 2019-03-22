import express from 'express';

import 'dotenv/config';

const app = express();

app.use('/', (req, res) => {
  res.json({ message: 'route working', name: 'John Doe', age: 25 });
});

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} :rocket: `);
});
