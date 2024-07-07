const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const mongoURI = process.env.MONGODB_URL;

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on('error', () => {
  console.log('Error in DB connection');
});

connection.once('open', () => {
  console.log('Connected to DB successfully');
});

module.exports = mongoose;
