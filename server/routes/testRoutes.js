const express = require("express");
const testRouter = express.Router();
const verifyJwt = require("../middleware/verifyJWT");

testRouter.get("/test", verifyJwt, async (req, res) => {
  console.log(req);
  const user = req.body;
  res.json(req.user);
});

module.exports = testRouter;
