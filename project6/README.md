# DriveXchange (with Sorting, Filtering, Pagination)
This is a simple car marketplace app which allows the user to look through a list of different cars for sale.

## Prerequisites

Before running the project, make sure you have the following prerequisites installed:

- Node.js
- MySql

## Installation

1. Clone the repository:

- git clone <repository-url>

2. Install the dependencies:

npm install

This will install these dependencies: 

- dotenv
- ejs
- express
- mysql
- nodemon

## Usage

1. Set the port value in the env.example file to your port_number

<code>
    PORT=your_port_number

    DB_HOST=your_db_host
    DB_USER=your_db_username
    DB_PASS=your_db_password
    DB_NAME=your_db_name
</code>

2. Start the server:

- npm start: This will run nodemon index.js

3. Import mysql database 

cars_website_data.sql contains the table needed for this project.

4. Get Home Page:

Endpoint: GET /
Description: Displays the home page where the user can see all the cars, search through them and    filter through them.

5. Filter:

Endpoint: GET /filter

- This route helps to filter throught the make and the manufacture year of the vehicle.


# Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open a new issue or submit a pull request.