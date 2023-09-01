# Weather App

This ia an app which shows the weather of a city that has been searched for.

## Installation

1. Clone the repository: `git clone `

2. Install dependencies: `npm install`
This will install these dependencies: 

- dotenv
- ejs
- express
- node-fetch
- nodemon

## Configuration

Set the port value and the open weather map api key in the env.example file to your port number and your api key

<code>
    PORT=your_port_number

    API_KEY=your_api_openweathermap_key
</code>


## Usage

1. Start the server:

- npm start: This will run nodemon index.js

2. Get Weather: 

Endpoint: GET /
Description: Display the weather of the city that has been inputed in the input field.


## Contributing

If you'd like to contribute to the project, follow these steps:

1. Fork the repository
2. Create a new branch
3. Make your changes and commit them
4. Push to the branch
5. Create a pull request