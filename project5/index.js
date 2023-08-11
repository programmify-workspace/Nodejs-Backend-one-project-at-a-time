const express = require('express');
const ejs = require('ejs');
const emailRouter = require("./routes/emailRoutes");

const app = express();

// Set up middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.use("/", emailRouter);

const PORT=process.env.PORT || 3000;


app.listen(PORT, ()=> console.log(`Listening at port ${PORT}`));