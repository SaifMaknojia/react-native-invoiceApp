const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.userRegistration = async (req, res) => {
  const user = req.body;
  const takenUserName = await User.findOne({ username: user.username });
  const takenEmail = await User.findOne({ email: user.email });

  if (takenEmail || takenUserName) {
    res.json({ message: "Username or email is taken" });
  } else {
    user.password = await bcrypt.hash(user.password, 10);
    const dbUser = new User({
      username: user.username.toLowerCase(),
      email: user.email.toLowerCase(),
      password: user.password,
    });
    dbUser.save();
    res.json({ message: "Success" });
  }
};

exports.userLogin = (req, res) => {
  const userLoginIn = req.body;
  User.findOne({ username: userLoginIn.username.toLowerCase() }).then(
    (dbUser) => {
      //checking if user is in database or not
      console.log(userLoginIn.username, userLoginIn.password);
      if (!dbUser) {
        return res.json({
          message: "Invalid Username or Password",
        });
      }
      bcrypt
        .compare(userLoginIn.password, dbUser.password)
        .then((isCorrect) => {
          if (isCorrect) {
            const payload = {
              id: dbUser._id,
              username: dbUser.username,
            };
            jwt.sign(
              payload,
              process.env.JWT_SECRET,
              { expiresIn: 86400 },
              (err, token) => {
                if (err) return res.json({ message: err });
                return res.json({
                  message: "Success",
                  token: token,
                });
              }
            );
          } else {
            return res.json({
              message: "Invalid UserName or Password",
            });
          }
        });
    }
  );
};
