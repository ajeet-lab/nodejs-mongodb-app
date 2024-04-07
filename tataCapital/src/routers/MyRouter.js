const express = require("express");
const MyController = require("../controllers/MyController");
const router = express.Router();

router.route("/loan").post(MyController().createLoans);
router.route("/loan/getall").get(MyController().getAllLoan);

router.route("/loan/getsingle").post(MyController().getSingleLoan);

module.exports = router;