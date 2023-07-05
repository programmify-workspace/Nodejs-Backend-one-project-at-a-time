# Express.js CRUD API with MySQL

This is a simple CRUD (Create, Read, Update, Delete) API built using Express.js and MySQL. It provides endpoints to perform CRUD operations on a user database.

## Prerequisites

Before running the project, make sure you have the following prerequisites installed:

- Node.js
- MySQL

## Installation

1. Clone the repository:

```bash

git clone <repository-url>

2. Install the dependencies:

npm install

3. Configure the environment variables:

Create a .env file in the project's root directory and set the following variables:

PORT=3000
DB_HOST=localhost
DB_USERNAME=root
DB_PASSWORD=
DB_DBNAME=user_data

Make sure to update the values according to your MySQL database configuration.

## Usage

1. Start the server:

npm start

3. Access the API endpoints:

The API will be available at http://localhost:3000. You can use tools like cURL or Postman to interact with the endpoints.

API Endpoints

GET /users: Get all users
GET /users/:id: Get a user by ID
POST /users: Create a new user
PUT /users/:id: Update a user by ID
DELETE /users/:id: Delete a user by ID

