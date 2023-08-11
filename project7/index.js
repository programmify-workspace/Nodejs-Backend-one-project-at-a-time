const express = require('express');
const ejs = require('ejs');
require('dotenv').config();
const generateQRcodeRouter = require('./routes/generateQRcodeRoute');

const app = express();

// Set middleware up
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');

app.use('/', generateQRcodeRouter);

app.use((req, res, next)=>{
    res.status(404).send("<h2>Page not found! Go back to <a href='/'>home</a></h2>");
})

app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500).send("<h4>Something went wrong! Go back to <a href='/'>home</a></h4>");
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`Listening on port ${PORT}...`))