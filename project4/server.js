const express = require('express');
const session = require('express-session');

const productsRouter = require("./routes/products.router");

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// middleware for serving static file
app.use(express.static('public'));

// sert up ejs template engine
app.set('view engine', 'ejs');

// Set up session middleware
app.use(session({
    secret: '12345',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false}
}))


app.use("/", productsRouter);








PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log("Listening on port 3000..."));




