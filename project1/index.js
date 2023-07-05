const express = require('express');
const cors = require('cors');


const app = express();
const usersRouter = require('./routes/users.router')
app.use(cors());

require('dotenv').config();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Get all users
app.use('/users', usersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`Listening on port ${PORT}...`));