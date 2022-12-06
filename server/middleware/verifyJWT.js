const jwt = require("jsonwebtoken");

function verifyJwt(req, res, next) {
  const token = req.headers["x-access-token"];

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err)
        return res.json({
          isLoggedIn: false,
          message: "Failed to Authenticate",
        });
      req.user = {};
      req.user.id = decoded.id;
      req.user.email = decoded.email;
      req.user.firstName = decoded.firstName;
      next();
    });
  } else {
    res.json({ message: "Incorrect", isLoggedIn: false });
  }
}

module.exports = verifyJwt;
