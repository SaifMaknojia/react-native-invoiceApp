const express = require("express");
const router = express.Router();
const invoiceController = require("../controllers/userController");

router.route("/register").post(invoiceController.userRegistration);
router.route("/login").post(invoiceController.userLogin);

module.exports = router;
