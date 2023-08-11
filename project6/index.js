const express = require('express');
const ejs = require('ejs');
require('dotenv').config();

const carsRoutes = require("./routes/cars-routes")


const app = express();
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.use('/', carsRoutes);

app.use(function(req, res, next) {
    res.status(404).render("404");
});
  

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("<h4>Something went wrong! Go back to <a href='/'>home</a></h4>");
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`)); 