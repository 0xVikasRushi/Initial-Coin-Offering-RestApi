const express = require("express");
const router = express.Router();
const {
    getAllContracts,
    getAllContractsTesting,
} = require("../controller/contract.js");
router.route("/").get(getAllContracts);
router.route("/testing").get(getAllContractsTesting);

module.exports = router;
