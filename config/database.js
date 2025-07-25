const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'db_jewellery',
    password: '12345678',
    port: 3306
});

module.exports = connection;