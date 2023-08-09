const express = require("express");
const { pool } = require("./database/config");
const { asyncWrapper } = require("./utils/asyncWrapper");
const { CustomAPIError } = require("./utils/custom-error");
const { isValidDate } = require("./utils/utilFunctions");
const router = express.Router();

router.get(
  "/latest",
  asyncWrapper(async (req, res) => {
    const [result] = await pool.query(
      `SELECT * FROM main
            WHERE timestamp=(SELECT MAX(timestamp) FROM main)`
    );
    res.status(200).json({
      data: result[0],
    });
  })
);

router.get(
  "/duration",
  asyncWrapper(async (req, res) => {
    const { from, to } = req.query;
    if (!isValidDate(from) || !isValidDate(to))
      throw new CustomAPIError(
        "Please Provide valid date in format of YYYY-MM-DD",
        400
      );
    // console.log(from, to);
    if (!from || !to) throw new Error();
    
    let data;
    data = await pool.query(
      `SELECT * FROM main
            WHERE DATE(timestamp) BETWEEN ? AND ?`,
      [from, to]
    );

    const [result] = data;

    console.log(result);
    res.status(200).json({
      data: result,
    });
  })
);

router.get(
  "/date/:date",
  asyncWrapper(async (req, res) => {
    const { date } = req.params;

    if (!isValidDate(date))
      throw new CustomAPIError(
        "Please Provide valid date in format of YYYY-MM-DD",
        400
      );
    const [result] = await pool.query(
      `SELECT * FROM main
            WHERE DATE(timestamp) = ?`,
      [date]
    );
    res.status(200).json({
      data: result,
    });
  })
);

router.get(
  "/year",
  asyncWrapper(async (req, res) => {
    const year = req.query.year;
    // console.log(year);
    const yearRegex = /^(?:19|20)\d{2}$/;
    if (!yearRegex.test(year))
      throw new CustomAPIError("Please Provide valid year", 400);
    const [result] = await pool.query(
      `SELECT
      DATE_FORMAT(timestamp, '%M') AS month,
      AVG(temperature) AS avg_temperature,
      MIN(temperature) AS min_temperature,
      MAX(temperature) AS max_temperature, 
      AVG(humidity) AS avg_humidity,
      MIN(humidity) AS min_humidity,
      MAX(humidity) AS max_humidity, 
      AVG(wind_speed) AS avg_wind_speed,
      MIN(wind_speed) AS min_wind_speed,
      MAX(wind_speed) AS max_wind_speed
      FROM main
      WHERE YEAR(timestamp) = ?
      GROUP BY month;`,
      [year]
    );

    res.status(200).json({ year, data: result });
  })
);

module.exports = router;
