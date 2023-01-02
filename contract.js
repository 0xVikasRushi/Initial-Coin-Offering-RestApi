const connectDB = require("./db/connect.js");
const Contract = require("./models/contract");
const ContractJson = require("./contract.json");
const Start = async () => {
  try {
    await connectDB();
    await Contract.create(ContractJson);
    console.log("successfully sent data to db");
  } catch (error) {
    console.log(error.message);
  }
};
Start();
