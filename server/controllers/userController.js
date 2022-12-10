const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.userRegistration = async (req, res) => {
  const user = req.body;

  const takenEmail = await User.findOne({ email: user.email });

  if (takenEmail) {
    res.status(401).json({ message: "email is taken" });
  } else {
    user.password = await bcrypt.hash(user.password, 10);
    const dbUser = new User({
      email: user.email.toLowerCase(),
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      agreedTerms: user.agreedTerms,
    });
    dbUser.save();
    res.status(200).json({ message: "Success" });
  }
};

exports.userLogin = (req, res) => {
  const userLoginIn = req.body;

  User.findOne({
    email: userLoginIn.email.toLowerCase(),
  }).then((dbUser) => {
    //checking if user is in database or not
    if (!dbUser) {
      return res.status(400).json({
        message: "Invalid Email or Password",
      });
    }
    bcrypt.compare(userLoginIn.password, dbUser.password).then((isCorrect) => {
      if (isCorrect) {
        const payload = {
          id: dbUser._id,
          email: dbUser.email,
          firstName: dbUser.firstName,
        };
        jwt.sign(
          payload,
          process.env.JWT_SECRET,
          { expiresIn: 86400 },
          (err, token) => {
            if (err) return res.json({ message: err });
            return res.status(200).json({
              message: "Success",
              token: token,
              firstName: dbUser.firstName,
              lastName: dbUser.lastName,
              email: dbUser.email,
              _id: dbUser._id,
            });
          }
        );
      } else {
        return res.status(404).json({
          message: "Invalid UserName or Password",
        });
      }
    });
  });
};
