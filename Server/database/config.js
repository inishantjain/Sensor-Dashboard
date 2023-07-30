const mysql = require("mysql2");
require("dotenv").config();
const pool = mysql
  .createPool({
    host: process.env.SQL_URI,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASS, //us e.env for user and passwords
    database: process.env.SQL_DATABASE,
    timezone: "+00:00",
  })
  .promise();

insertReading = async (timestamp, temperature, humidity) => {
  const result = await pool.query(
    `INSERT INTO main (timestamp, temperature , humidity)
    VALUES (?, ?, ?)`,
    [timestamp, temperature, humidity]
  );
  console.log([timestamp, temperature, humidity]);
  return result.insertId;
};

// (async()=>{
//   const [result] = await pool.query(`SELECT * FROM DHT11
//   WHERE DATE(timestamp) BETWEEN '2016-01-15' AND '2016-02-17'`)
//   console.log(result)
// })()

module.exports = { pool, insertReading };
