const express = require("express");
const router = express.Router();
const invoiceController = require("../controllers/invoiceController");
const verifyJwt = require("../middleware/verifyJWT");

router
  .route("/")
  .get(verifyJwt, invoiceController.getAllUserInvoice)
  .post(invoiceController.createInvoice);
//router.route("/:id").get(invoiceController.userRegistration);

module.exports = router;
