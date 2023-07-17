const express = require('express');
const mysql = require('mysql');


//Make MySQL Database Connection
const connection = mysql.createConnection({
	host : 'localhost',
	database : 'testing',
	user : 'root',
	password : ''
});

//Check MySQL Database Connection
connection.connect((error) => {
	console.log('MySQL Database is connected Successfully');
});

module.exports = connection;
