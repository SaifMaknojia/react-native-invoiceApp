const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.userRegistration = async (req, res) => {
  const user = req.body;
  console.log(req.body);
  const takenEmail = await User.findOne({ email: user.email });

  if (takenEmail) {
    res.json({ message: "email is taken" });
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
    res.json({ message: "Success" });
  }
};

exports.userLogin = (req, res) => {
  const userLoginIn = req.body;
  User.findOne({ email: userLoginIn.email.toLowerCase() }).then((dbUser) => {
    //checking if user is in database or not
    console.log(userLoginIn.email, userLoginIn.password);
    if (!dbUser) {
      return res.json({
        message: "Invalid Email or Password",
      });
    }
    bcrypt.compare(userLoginIn.password, dbUser.password).then((isCorrect) => {
      if (isCorrect) {
        const payload = {
          id: dbUser._id,
          email: dbUser.email,
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
  });
};
