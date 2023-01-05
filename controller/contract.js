const Contract = require("./../models/contract.js");
const { db } = require("./../models/contract.js");

const getAllContracts = async (req, res) => {
  const { featured, company } = req.query;

  const queryObj = {};
  if (featured) {
    queryObj.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObj.company = company
  }
  
  try {
    const contract = await Contract.find(query);
    const nbhints = contract.length;
    let message = nbhints === 0 ? "no results found" : contract;
    res.status(201).json({ msg: message, nbhints });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getAllContractsTesting = async (req, res) => {
  try {
    const contract = await Contract.find({ decimal: 18 });
    res.status(200).json({ msg: contract });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
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

module.exports = { getAllContracts, insertContract, getAllContractsTesting };
