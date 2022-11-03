const express = require("express");
const morgan = require("morgan");
const app = express();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./models/userModel");
const testRouter = require("./routes/testRoutes");
const userRouter = require("./routes/userRoutes");

app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", testRouter);

app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
  res.send({
    msg: "Hello World",
  });
});

app.get("/getusername", (req, res) => {
  res.json({ isLoggedIn: this.true, username: req.user.username });
});

module.exports = app;
