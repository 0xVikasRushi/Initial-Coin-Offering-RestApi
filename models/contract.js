const mongoose = require("mongoose");

const ContractSchema = new mongoose.Schema({
  tokenName: {
    type: String,
    required: true,
  },
  Symbol: {
    type: String,
    required: [true, "Enter the Symbol"],
  },
  contractAddress: {
    type: String,
    required: [true, "Contract Address"],
  },
  company: {
    type: String,
  },
  deployedOn: {
    type: String,
    enum: {
      values: [
        "polygon",
        "ethereum",
        "Binance Smart Chain Mainnet",
        "polygon-mumbai",
        "goerli",
      ],
      message: `{Network} is not supported`,
    },
  },
  decimal: {
    type: Number,
  },
  featured: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});


module.exports = mongoose.model("Contract",ContractSchema)