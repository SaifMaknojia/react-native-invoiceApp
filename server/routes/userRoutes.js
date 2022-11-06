const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.route("/register").post(userController.userRegistration);
router.route("/login").post(userController.userLogin);

module.exports = router;
