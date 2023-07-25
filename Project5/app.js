// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const route = require('./routes/route');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));


app.use('/', route);

app.listen(PORT, () => {
  console.log(`App started at http://localhost:${PORT}`);
});
