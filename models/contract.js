const mongoose = require("mongoose");

const ContractSchema = new mongoose.Schema({
  tokenName: {
    type: String,
    required: [true, "token name must be provided"],
  },
  Symbol: {
    type: String,
    required: [true, "token Symbol must be provided"],
  },
  contractAddress: {
    type: String,
    required: [true, "Contract Address must be provided"],
  },
  contractCreator: {
    type: String,
    required: [true],
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
        "binance-smartchain",
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
  abi: {
    type: String,
  },
});

module.exports = mongoose.model("Contract", ContractSchema);
