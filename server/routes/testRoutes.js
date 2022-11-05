const express = require("express");
const testRouter = express.Router();
const verifyJwt = require("../middleware/verifyJWT");

testRouter.get("/test", verifyJwt, async (req, res) => {
  const user = req.body;
  console.log(req.user);
  res.json(req.user);
});

module.exports = testRouter;
