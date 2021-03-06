import 'dotenv/config';


const express = require('express');
const cors = require('cors');
const routes = require('./routes/users');

const app = express();

// Middleware
app.use(cors());

// app.use('/', (req, res) => {
//   res.json({ message: 'route working', name: 'John Doe', age: 25 });
// });

// Add routes
app.use('/users', routes);

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT} :rocket: `);
});
