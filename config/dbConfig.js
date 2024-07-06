const mongoose = require('mongoose');

// connection to db
mongoose.connect(process.env.MONGODB_URL);

// connection object
const connection = mongoose.connection;

// verify connection
connection.on('error',()=>{
    console.log('Error in DB connection');
});

connection.on('connected',()=>{
    console.log('Connected to DB successfully');
})

module.exports = mongoose;