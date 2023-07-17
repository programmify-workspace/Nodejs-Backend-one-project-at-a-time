const express = require('express');
const path = require('path');
const mysql = require('mysql');

const route = require('./routes/route');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

// Serve the HTML form
app.use('/', route);

// Generate and download PDF
app.use('/generate-pdf', route);

// Start the server
app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});