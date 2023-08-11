const mysql = require('mysql');
require("dotenv").config();

// make mysql database connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
})

// Check mysql database connection

connection.connect((err) =>{
    console.log("Connection to dtabase has been successfull");
    if(err){
        console.log(`Error: ${err}`)
    }
});

module.exports = connection