const axios = require("axios");

// const address = "0x3A4811C0619aBe8A51737c71f34D148b8ceB3335";
// getAbi(address);
async function getAbi(contractAddress) {
  const apiKey = process.env.ETHERSCAN_API_KEY;
  const url = `https://api.etherscan.io/api?module=contract&action=getabi&address=${contractAddress}&apikey=${apiKey}`;
  try {
    const response = await axios.get(url);
    const abi = response.data.result;
    // console.log(abi);
    return abi;
  } catch (error) {
    throw new Error(
      `Error getting ABI for contract at address ${contractAddress}: ${error.message}`
    );
  }
}

module.exports = getAbi;
