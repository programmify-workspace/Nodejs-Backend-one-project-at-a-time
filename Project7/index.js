// index.js
const express = require('express');
const path = require('path');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 5000;
const routes = require('./routes/route');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set up EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Load routes
app.use('/', routes);

// Start server
app.listen(PORT, () => {
    console.log(`Server starting on http://localhost:${PORT}`);
});
