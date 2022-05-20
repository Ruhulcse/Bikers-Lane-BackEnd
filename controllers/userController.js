const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

//Login for Restaurant owner
const Login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      message: "login success",
      _id: user._id,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Login failed");
  }
});

////Registration for Restaurant owner
const Registration = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ error: "user already exists" });
  }

  const user = new User({
    email: req.body.email,
    password: req.body.password,
    name: `${req.body.firstName} ${req.body.lastName}`,
  });

  try {
    const createOwner = await user.save();
    res.json({
      message: "successfully registration",
      data: createOwner,
    });
  } catch (error) {
    console.log(error);
  }
});
module.exports = {
  Login,
  Registration,
};