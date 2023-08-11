# Email sending
This is a simple app which send email to all users in the database. Users can be added, updated and deleted

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
- nodemailer
- nodemon as a dev dependency

## Usage

1. Set the port value in the env.example file to your port_number

<code>
    PORT=your_port_number
</code>

2. Start the server:

- npm start: This will run nodemon index.js

3. Import mysql database 

users_email_data.sql contains the tables needed for this project.

4. Set up nodemailer

Change the env values in the env.example to your own values

<code>
    SMTP_HOST=your_SMTP_HOST
    SMTP_PORT=your_SMTP_PORT
    SMTP_USER=your_SMTP_USER
    SMTP_PASSWORD=your_SMTP_PASSWORD
</code>

<code>
    const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
    }
    });
</code>

5. Get Home Page:

Endpoint: GET /
Description: Displays the home page where the user can send email to al the clients in the database, create new user, update and delete the user from the email list. This route gets all the users from the database.

6. Send email:

Endpoint: POST /send

- The subject and message are both accepted into the req.body. On send, the email is sent to all users in the email list.
After sending the user is redirected back to the home page ("/")

7. Add user:

Endpoint: POST /add-user

- The form recieves the name and the email. If they are accepted, the new user will be added to the database.

8. Delete user: 

Endpoint: POST /delete-user

- This removes the user completely from the database.

9. Update user:

Endpoint: POST /update-user

- This update a user's info in the database.


# Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open a new issue or submit a pull request.