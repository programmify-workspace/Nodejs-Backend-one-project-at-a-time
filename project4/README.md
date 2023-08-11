# Shopping Cart
This is a simple app which adds products to a cart, view the cart contents, and remove content from cart.

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

- express
- express-session
- ejs
- mysql
- dotenv
- nodemon as a dev dependency

## Usage

1. Start the server:

npm start

2. Import mysql database 

products.sql contains the tables needed for this project.

3. Get Home Page:

Endpoint: GET /
Description: Displays the home page displaying all the products for sale.

4. Add product to cart:

Endpoint: POST /

- Adds the product selected to the cart

5. Remove products from cart:

Endpoint: POST /

- Removes the product selected from the cart

# Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open a new issue or submit a pull request.