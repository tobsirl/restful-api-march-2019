const express = require('express');

const app = express();

app.use('/', (req, res) => {
  res.json({ message: 'route working', name: 'John Doe', age: 25 });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} :rocket: `);
});
