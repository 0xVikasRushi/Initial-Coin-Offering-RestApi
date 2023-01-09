const axios = require("axios");
async function getAbi(contractAddress) {
  const apiKey = process.env.ETHERSCAN_API_KEY;
  const url = `https://api.etherscan.io/api?module=contract&action=getabi&address=${contractAddress}&apikey=${apiKey}`;
  try {
    const response = await axios.get(url);
    const abi = response.data.result;
    console.log(abi);
    return abi;
  } catch (error) {
    throw new Error(
      `Error getting ABI for contract at address ${contractAddress}: ${error.message}`
    );
  }
}

// const address = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";
// getAbi(address);

module.exports = getAbi();
