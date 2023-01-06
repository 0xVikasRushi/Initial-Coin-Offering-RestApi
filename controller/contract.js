const Contract = require("./../models/contract.js");
const { db } = require("./../models/contract.js");

const getAllContracts = async (req, res) => {
  try {
    // ? sort?=+name,createdAt
    const queryObj = {};
    const {
      company,
      tokenName,
      Symbol,
      contractAddress,
      deployedOn,
      decimal,
      featured,
      sort,
    } = req.query;

    if (company) queryObj.company = company;
    if (tokenName) {
      queryObj.tokenName = { $regex: tokenName, $options: "i" };
    }
    if (Symbol) queryObj.Symbol = Symbol;
    if (contractAddress) queryObj.contractAddress = contractAddress;
    if (decimal) queryObj.decimal = decimal;
    if (deployedOn) queryObj.deployedOn = deployedOn;
    if (featured) queryObj.featured = featured;

    let apiData = Contract.find(queryObj);
    if (sort) {
      const sortFix = sort.replace(",", " ");
      queryObj.sort = apiData.sort(sortFix);
    }

    const contract = await apiData;
    let message = contract.length === 0 ? "no results found" : contract;
    res.status(201).json({ msg: message, nbhints: contract.length });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getAllContractsTesting = async (req, res) => {
  try {
    const queryObj = {};

    const {
      company,
      tokenName,
      Symbol,
      contractAddress,
      deployedOn,
      decimal,
      featured,
      sort,
    } = req.query;

    if (company) queryObj.company = company;
    if (tokenName) {
      queryObj.tokenName = { $regex: tokenName, $options: "i" };
    }
    if (Symbol) queryObj.Symbol = Symbol;
    if (contractAddress) queryObj.contractAddress = contractAddress;
    if (decimal) queryObj.decimal = decimal;
    if (deployedOn) queryObj.deployedOn = deployedOn;
    if (featured) queryObj.featured = featured;

    let apiData = Contract.find(queryObj);
    // sorting functions
    if (sort) {
      const sortFix = sort.replace(",", " ");
      queryObj.sort = apiData.sort(sortFix);
    }

    const contract = await apiData;
    let message = contract.length === 0 ? "no results found" : contract;
    res.status(201).json({ msg: message, nbhints: contract.length });
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
