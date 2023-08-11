# PDF Generation
This is a simple app which recieves personal information from the user and then generates a pdf file with those information.

## Prerequisites

Before running the project, make sure you have the following prerequisites installed:

- Node.js

## Installation

1. Clone the repository:

- git clone <repository-url>

2. Install the dependencies:

npm install
This will install these dependencies: 
- Express
- Pdfkit
- Nodemon (as a dev dependency)

## Usage

1. Start the server:

npm start

2. Get Home Page:

Endpoint: GET /
Description: Displays the home page to allow the user to enter personal information.
Response: The home page containing an input form for personal details.

3. Generate PDF

- Endpoint: POST /to-pdf
- Description: Takes the user-provided data and generates a personalized PDF with the entered information.
- Request Body: JSON object containing the following fields:
firstName (required): The first name of the user.
lastName (optional): The last name of the user.
email (required): The email address of the user.
age (optional): The age of the user.
nationality (required): The nationality of the user.
address (optional): The address of the user.
- Response: The generated PDF file is automatically downloaded with the name "generated.pdf".

# Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open a new issue or submit a pull request.