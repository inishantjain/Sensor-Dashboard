```js
const { insertReading } = require("./functions");
const fs = require("fs");
const readline = require("readline");
insertReading("2015-01-01 00:00:00", 19.0, 75.0);

async function loadToDB() {
  try {
    const readStream = fs.createReadStream("./data.csv", { encoding: "utf8" });

    const rl = readline.createInterface({ input: readStream });

    rl.on("line", async (line) => {
      const reading = line.split(/,/);
      console.log(reading);
      await insertReading(...reading);
    });

    rl.on("close", () => {
      console.log("Loaded data to database");
    });
  } catch (error) {
    console.error(error);
  }
}
loadToDB();
```

```js
// examples
exports.insertReading = async (timestamp, temperature, humidity) => {
  const result = pool.query(
    `INSERT INTO DHT11 (timestamp, temperature , humidity)
 VALUES (?, ?, ?)`,
    [timestamp, temperature, humidity]
  );
  return result.insertId;
};

exports.getReadings = async (from, to) => {
  const [result] = await pool.query(
    `SELECT timestamp, temperature, humidity
    FROM DHT11
    WHERE timestamp BETWEEN ? AND ?`,
    [from, to]
  );
  return result;
};
```
