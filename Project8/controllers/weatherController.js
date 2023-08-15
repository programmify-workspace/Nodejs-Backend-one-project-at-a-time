const fetch = require('node-fetch');
const weatherModel = require('../models/weatherModel');

const apiKey = process.env.key;

exports.getWeather = (req, res) => {
    const city = req.query.city || "Denver"; // Default city is Denver
    weatherModel.fetchWeather(city, apiKey) // Pass the apiKey to the fetchWeather function
        .then(weatherData => {
            res.render('index', { weatherData, error: null });
        })
        .catch(error => {
            res.render('index', { weatherData: null, error: "Weather data not found." });
        });
};
