const mongoose = require("mongoose");
const Contract = require("./models/contract.js");
const connectDB = require("./db/connect.js");
connectDB();
const Contract1 = new Contract({
  tokenName: "TEST1",
  Symbol: "TXT1",
  contractAddress: "0x8b65E3846BDecfD20b3a767A5C9C526B63dE6212",
  company: "Gensis pvt limited",
  deployedOn: "ethereum",
  decimal: 18,
});

Contract1.save();
