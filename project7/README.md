# QR Code Generator

This ia an app which converts text or url entered by a user to a qr code image.

## Features

- The user can choose the height and width of the qr code generated
- Displays the image of the qr code generated.
- Gives the user the ability to download the qr code.

## Installation

1. Clone the repository: `git clone `

2. Install dependencies: `npm install`
This will install these dependencies: 

- dotenv
- ejs
- express
- qrcode
- nodemon

## Configuration

Set the port value in the env.example file to your port number

<code>
    PORT=your_port_number
</code>


## Usage

1. Start the server:

- npm start: This will run nodemon index.js

2. Get Home page: 

Endpoint: GET /
Description: Display the home page where the user can input text and select the height and width.

3. Get QR code:

Endpoint: POST /
Description: Displays the image of the QR code generated from the text.


## Contributing

If you'd like to contribute to the project, follow these steps:

1. Fork the repository
2. Create a new branch
3. Make your changes and commit them
4. Push to the branch
5. Create a pull request