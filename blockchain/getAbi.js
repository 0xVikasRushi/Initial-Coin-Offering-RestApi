const axios = require("axios");
async function getAbi(contractAddress) {
  const apiKey = process.env.ETHERSCAN_API_KEY;
  const abiurl = `https://api.etherscan.io/api?module=contract&action=getabi&address=${contractAddress}&apikey=${apiKey}`;
  const tokenurl = `https://api.etherscan.io/api?module=contract&action=getcontractcreation&contractaddresses=${contractAddress}&apikey=${apiKey}`;
  try {
    const info = {};
    const resabi = await axios.get(abiurl);
    const abi = resabi.data.result;
    info.abi = abi;
    const restokenOwner = await axios.get(tokenurl);
    const tokenOwner = restokenOwner.data.result.contractCreator;
    info.contractCreator = tokenOwner;
    return info;
  } catch (error) {
    throw new Error(
      `Error getting ABI for contract at address ${contractAddress}: ${error.message}`
    );
  }
}
module.exports = getAbi;
