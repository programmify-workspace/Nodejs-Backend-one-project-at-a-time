const fetch = require('node-fetch');

require('dotenv').config();

const apiKey = process.env.key;

exports.fetchWeather = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    if (!response.ok) {
      throw new Error("Weather data not found.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Weather data not found.");
  }
};
