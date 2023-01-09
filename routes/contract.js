const express = require("express");
const router = express.Router();
const {
  getAllContracts,
  getAllContractsTesting,
  insertContract,
  getContractInfo,
} = require("../controller/contract.js");
router.route("/").get(getAllContracts);
router.route("/").post(insertContract);

router.route("/getContractInfo").get(getContractInfo);
router.route("/testing").get(getAllContractsTesting);

module.exports = router;
