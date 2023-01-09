const ethers = require("ethers");
// const getAbi = require("./getAbi");
const axios = require("axios");

async function contractStats(contractAddress) {
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.ALCHEMY_RPC_URL
  );
  const apiKey = process.env.ETHERSCAN_API_KEY;
  const url = `https://api.etherscan.io/api?module=contract&action=getabi&address=${contractAddress}&apikey=${apiKey}`;
  const response = await axios.get(url);
  const abi = response.data.result;

  const Contract = new ethers.Contract(contractAddress, abi, provider);
  const accountAddress = "0x560ba0013be40573bb6c6537e8626aa1b5b7a0cc";
  const balance = await Contract.balanceOf(accountAddress);
  console.log(balance.toNumber());
}

contractStats("0x3A4811C0619aBe8A51737c71f34D148b8ceB3335");
