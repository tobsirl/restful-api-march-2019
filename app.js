import express from 'express';
import cors from 'cors';

import 'dotenv/config';

const app = express();

// Middleware
app.use(cors());

app.use('/', (req, res) => {
  res.json({ message: 'route working', name: 'John Doe', age: 25 });
});

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} :rocket: `);
});
