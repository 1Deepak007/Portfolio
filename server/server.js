const express = require('express');
const app = express();
const port = process.env.PORT || 5674;

require('dotenv').config(); // Load environment variables from .env file
require('./config/dbConfig'); // Import and run database configuration

app.use(express.json()); // Middleware to parse JSON

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello from server.');
});

// Test: http://localhost:5674/api/portfolio/get-portfolio-data
const portfolioRoute = require('./routes/portfolioRoutes');
app.use("/api/portfolio", portfolioRoute);

