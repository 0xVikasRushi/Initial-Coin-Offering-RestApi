const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;
const Contract = require("./models/contract.js");
const connectDB = require("./db/connect.js");
const routes_router = require("./routes/contract.js");
require("express-async-errors");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("testing rest api");
});

app.use("/api/v1/contracts", routes_router);
app.post("/api/v1/contracts", routes_router);

const start = async () => {
  try {
    connectDB();
    app.listen(PORT, () => {
      console.log(`running on ${PORT}`);
    });
  } catch (e) {
    console.log(e.message);
  }
};

app.use(notFound);
app.use(errorHandlerMiddleware);

start();
