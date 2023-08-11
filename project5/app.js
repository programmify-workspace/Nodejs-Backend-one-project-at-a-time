// Required dependencies
const express = require('express');
const nodemailer = require('nodemailer');
const ejs = require('ejs');

// Create Express app
const app = express();

// Set up middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'ejs');

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'your-email-service-provider', // Replace with your email service provider (e.g., 'Gmail', 'SendGrid')
  auth: {
    user: 'your-email@example.com', // Replace with your email address
    pass: 'your-email-password' // Replace with your email password
  }
});

// Render the email composition form
app.get('/', (req, res) => {
  res.render('compose');
});

// Handle the email sending
app.post('/send', (req, res) => {
  // Get form data from request body
  const { to, subject, message } = req.body;

  // Create email template
  const emailTemplate = `
    <h1>${subject}</h1>
    <p>${message}</p>
  `;

  // Set up email options
  const mailOptions = {
    from: 'your-email@example.com', // Replace with your email address
    to,
    subject,
    html: emailTemplate
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('An error occurred while sending the email.');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully!');
    }
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});