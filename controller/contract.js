const Contract = require("./../models/contract.js");
const { db } = require("./../models/contract.js");
const getAllContracts = async (req, res) => {
  res.status(200).json({ msg: "Working getAllContract" });
};

const insertContract = (req, res) => {
  const contract = new Contract(req.body);
  db.collection("contracts")
    .insertOne(contract)
    .then((result) => res.status(201).json(result))
    .catch((error) => {
      res.status(500).json({ msg: error });
    });
};

const getAllContractsTesting = async (req, res) => {
  res.status(200).json({ msg: "Working getAllContractsTesting" });
};

module.exports = { getAllContracts, insertContract, getAllContractsTesting };
