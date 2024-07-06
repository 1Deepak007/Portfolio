const express = require('express');
const app = express();
const port = process.env.PORT || 5674;  // take port from .env or start at port 5674

const dbConfig = require("../config/dbConfig");

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});


//==========>  Define a route
app.get('/', (req, res) => {
    res.send(`This server is running at port ${port}`);
});
