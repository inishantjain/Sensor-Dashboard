const mysql = require("mysql2");
require("dotenv").config();
exports.pool = mysql
  .createPool({
    host: process.env.SQL_URI,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASS, //us e.env for user and passwords
    database: process.env.SQL_DATABASE,
  })
  .promise();
