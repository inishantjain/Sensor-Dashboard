const express = require("express");
const app = express();
require("./database/test");
require("dotenv").config();
app.use(express.json());
app.get("/", (req, res) => {
  return res.status(200).json({
    message: "You just hit the home url",
  });
});

const port = process.env.PORT || 3000;
const start = async (port) => {
  try {
    app.listen(port, () => console.log("listening on port ", port));
  } catch (error) {
    console.error(error);
  }
};
start(port);
