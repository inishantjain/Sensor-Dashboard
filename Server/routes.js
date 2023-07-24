const express = require("express");
const { pool } = require("./database/config");
const { asyncWrapper } = require("./utils/asyncWrapper");
const { CustomAPIError } = require("./utils/custom-error");
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
    console.log(from, to);
    if (!from || !to) throw new Error();
    const [result] = await pool.query(
      `SELECT * FROM main
            WHERE DATE(timestamp) BETWEEN ? AND ?`,
      [from, to]
    );
    res.status(200).json({
      data: result,
    });
  })
);

router.get(
  "/date/:date",
  asyncWrapper(async (req, res) => {
    const { date } = req.params;
    const dateRegex = /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|1\d|2\d|3[01])$/;
    if (!dateRegex.test(date))
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

router.get("/year");

module.exports = router;
