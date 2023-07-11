const { getReadings } = require("./functions");
(async () => {
  const readings = await getReadings(
    "2015-01-01 00:00:00",
    "2016-01-31 23:59:59"
  );
  console.log(readings);
})();
