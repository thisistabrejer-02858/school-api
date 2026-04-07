const mysql = require("mysql2");

// create connection pool (better than single connection)
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// this gives promise-based queries
const db = pool.promise();

module.exports = db;