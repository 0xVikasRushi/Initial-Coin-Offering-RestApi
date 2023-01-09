const ethers = require("ethers");
const getAbi = require("./getAbi");

async function contractStats(contractAddress) {
  const ContractObj = {};
  ContractObj.contractAddress = contractAddress;
  const abi = await getAbi(contractAddress);
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.ALCHEMY_RPC_URL_1
  );
  // ContractObj.abi = abi;
  const Contract = new ethers.Contract(contractAddress, abi, provider);

  const name = await Contract.name();
  if (name) ContractObj.name = name;

  const symbol = await Contract.symbol();
  if (symbol) ContractObj.symbol = symbol;

  // console.log(ContractObj);
  return ContractObj;
}
module.exports = contractStats;
