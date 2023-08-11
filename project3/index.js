const express = require('express');
const path = require('path');
require('dotenv').config();

const route = require('./routes/pdf-route');

const app = express();
const port = process.env.PORT || 3000 ;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));


app.use('/', route);


// Start the server
app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});