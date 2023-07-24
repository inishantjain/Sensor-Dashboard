const express = require("express");
const route = require("./routes");
const cors = require("cors");
const { errorHandlerMiddleware } = require("./utils/ErrorHandler");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "You just hit the home url",
  });
});

app.use("/api", route);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;
const start = async (port) => {
  try {
    app.listen(port, () => console.log("listening on port ", port));
  } catch (error) {
    console.error(error);
  }
};
start(port);
