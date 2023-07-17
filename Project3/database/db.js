const express = require('express');
const mysql = require('mysql');

// Database connection setup
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pdf', 
});

module.exports = connection;
