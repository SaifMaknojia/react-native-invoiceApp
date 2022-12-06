//packages
const express = require("express");
const morgan = require("morgan");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

//coming from codebase
const testRouter = require("./routes/testRoutes");
const userRouter = require("./routes/userRoutes");
const invoiceRouter = require("./routes/invoiceRoutes");
const verifyJwt = require("./middleware/verifyJWT");

app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Cors error
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(cors());

app.use("/", testRouter);

app.use("/api/v1/users", userRouter);
app.use("/api/v1/invoice", invoiceRouter);

//just for understanding
app.get("/getusername", verifyJwt, (req, res) => {
  res.json({ isLoggedIn: true, username: req.user.username });
});

module.exports = app;
