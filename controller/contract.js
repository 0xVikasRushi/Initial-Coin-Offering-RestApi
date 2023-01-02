const getAllContracts = async (req, res) => {
  res.status(200).json({ msg: "Working getAllContract" });
};

const getAllContractsTesting = async (req, res) => {
  res.status(200).json({ msg: "Working getAllContractsTesting" });
};

module.exports = { getAllContracts, getAllContractsTesting };
