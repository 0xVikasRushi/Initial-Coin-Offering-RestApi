const express = require("express");
const router = express.Router();
const {
    getAllContracts,
    getAllContractsTesting,
    insertContract
} = require("../controller/contract.js");
router.route("/").get(getAllContracts);
router.route("/").post(insertContract);

router.route("/testing").get(getAllContractsTesting);



module.exports = router;
