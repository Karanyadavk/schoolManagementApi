const mysql = require('mysql2');
const url = require('url');

// Load environment variables
require('dotenv').config();

const dbUrl = process.env.MYSQL_DATABASE_URL;
if (!dbUrl) {
    throw new Error('Database connection string is not defined in environment variables');
}

const parsedUrl = url.parse(dbUrl);
const [username, password] = parsedUrl.auth.split(':');

const connection = mysql.createConnection({
    host: parsedUrl.hostname,
    port: parsedUrl.port || 3306,
    user: username,
    password: password,
    database: parsedUrl.pathname.substring(1) // Removes the leading '/'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database as ID', connection.threadId);
});

module.exports = connection;
