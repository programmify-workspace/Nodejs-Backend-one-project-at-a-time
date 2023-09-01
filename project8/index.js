import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import ejs from 'ejs';
import weatherRoute from './routes/weatherRoute.js'

dotenv.config();

const app = express();

// Setup Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static('public'));

app.use("/", weatherRoute)

app.use((req, res, next)=>{
    const city = ''
    const pageNotFound = "Page Not Found!!!"
    res.status(404).render("index", {city, pageNotFound});
})

app.use((err, req, res, next)=>{
    console.error(err.stack);
    const city = ''
    const pageNotFound = "Something Went Wrong!!!"
    res.status(500).render("index", {city, pageNotFound});
})

// https://source.unsplash.com/1600x900/?tokyo


const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> console.log(`Server is listening at ${PORT}`))