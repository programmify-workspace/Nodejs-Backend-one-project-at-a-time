
const weatherController = {
    getWeather: async (req, res) => {
        try {
            const { city } = req.query;
            if (typeof city === "undefined") {
                return res.redirect("/?city=Denver");
            }

            let response;
            let data;
            let retryCount = 0;
            const MAX_RETRIES = 5; // Set the maximum number of retries

            while (retryCount < MAX_RETRIES) {
                try {
                    response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`);
                    data = await response.json();
                    break; // Exit loop if successful
                } catch (fetchError) {
                    console.error(`Fetch attempt ${retryCount + 1} failed:`, fetchError.message);
                    retryCount++;
                }
            }

            if (!data) {
                console.error(`Fetch failed after ${MAX_RETRIES} attempts`);

                const pageNotFound = "Something Went Wrong!!!"
                return res.status(500).render("index", {city, pageNotFound});
                // return res.status(500).send("<h2>Failed to get weather data. Go back to <a href='/'>index</a></h2>");
            }


            const { cod } = data;

            let name, country, description, icon, speed, temp, temp_min, temp_max, pressure, humidity;

            if (cod === 200) {
                name = data.name;
                country = data.sys.country;
                description = data.weather[0].description;
                icon = data.weather[0].icon;
                speed = data.wind.speed;
                temp = data.main.temp;
                temp_min = data.main.temp_min;
                temp_max = data.main.temp_max;
                pressure = data.main.pressure;
                humidity = data.main.humidity;
            }

            console.log(name, description, icon, temp, temp_min, temp_max, pressure, humidity, speed, country, cod);

            res.status(200).render('index', { city, name, description, icon, temp, temp_min, temp_max, pressure, humidity, speed, country, cod });

        } catch (err) {
            console.error(err);
            const city = ''
            const pageNotFound = "Something Went Wrong!!!"
            res.status(500).render("index", {city, pageNotFound});
            // res.status(500).send("<h2>Something went wrong! Go back to <a href='/'>index</a></h2>");
        }
    }
};

export default weatherController;