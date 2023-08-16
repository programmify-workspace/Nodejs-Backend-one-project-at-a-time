const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const weatherController = require('./controllers/weatherController');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', weatherController.getWeather);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
