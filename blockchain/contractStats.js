const ethers = require("ethers");
const getAbi = require("./getAbi");

async function contractStats(contractAddress) {
  const ContractObj = {};
  ContractObj.contractAddress = contractAddress;
  const { abi, contractCreator } = await getAbi(contractAddress);
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.ALCHEMY_RPC_URL_1
  );

  // ContractObj.abi = abi;
  const Contract = new ethers.Contract(contractAddress, abi, provider);

  const name = await Contract.name();
  if (name) ContractObj.tokenName = name;

  const symbol = await Contract.symbol();
  if (symbol) ContractObj.Symbol = symbol;

  
  if (abi) ContractObj.abi = abi;
  if (contractCreator) ContractObj.contractCreator = contractCreator;

  // console.log(ContractObj);
  return ContractObj;
}
module.exports = contractStats;
