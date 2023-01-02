const express = require("express");
require("dotenv").config;
const app = express();
const PORT = 3000;
const connectDB = require("./db/connect.js");
const routes_router = require("./routes/contract.js");
app.get("/", (req, res) => {
  res.send("testing rest api");
});

app.use("/api/contract", routes_router);
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

start();
