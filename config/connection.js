const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'select777',
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Connected.');
});

module.exports = connection;