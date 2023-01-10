const Contract = require("./../models/contract.js");
const { db } = require("./../models/contract.js");
const contractStats = require("./../blockchain/contractStats.js");
const getAllContracts = async (req, res) => {
  try {
    // {{url}}/api/v1/contracts/?sort=+decimal
    // {{url}}/api/v1/contraccts/?company=something&Symbol=TXT
    // {{url}}/api/v1/contracts/getContractInfo?address=0x
    let queryObj = {};
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

    if (company) {
      queryObj.company = { $regex: company, $options: "i" };
    }
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
    let queryObj = {};

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

// const insertContract = (req, res) => {
//   const contract = new Contract(req.body);
//   db.collection("contracts")
//     .insertOne(contract)
//     .then((result) => res.status(201).json(result))
//     .catch((error) => {
//       res.status(500).json({ msg: error });
//     });
// };

const insertContract = async (req, res) => {
  const { address } = req.query;
  const blockchaininfo = await contractStats(address);
  // name
  // symbol
  // network
  // address
  // owner
  // fetching infomation of contractAddress
  const contract = new Contract(blockchaininfo);
  db.collection("contracts")
    .insertOne(contract)
    .then((result) => res.status(201).json({ msg: contract, result }))
    .catch((error) => {
      res.status(500).json({ msg: error });
    });
};

const getContractInfo = async (req, res) => {
  const { address } = req.query;
  const infojson = await contractStats(address);
  res.status(200).json({ msg: infojson });
};

// const deleteContractInfo = async () => {
//   const contract = db.collection("contracts");
//   const query = {
//     contractAddress: { $regex: "0xdAC17F958D2ee523a2206206994597C13D831ec7" },
//   };
//   const result = await contract.deleteMany(query);
//   console.log("success");
// };

module.exports = {
  getAllContracts,
  getContractInfo,
  insertContract,
  getAllContractsTesting,
};
