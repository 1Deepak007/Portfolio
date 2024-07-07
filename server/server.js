const express = require('express');
const app = express();
const port = process.env.PORT || 5674;

require('dotenv').config(); // Load environment variables from .env file
require('./config/dbConfig'); // Import and run database configuration

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
