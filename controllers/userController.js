const Users = require("../model/user");
const jwt = require("jsonwebtoken");

exports.index = async (req, res, next) => {
  const users = await Users.find();

  res.status(200).json({
    data: users,
  });
};

exports.register = async (req, res, next) => {
  const { first_name, last_name, username, password, role } = req.body;

  const user = new Users({
    name: name,
    username: username,
    password: password,
  });

  await user.save();

  res.status(200).json({
    data: user,
    message: "add user successfully",
  });
};

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await Users.findOne({ username: username });

    if (!user) {
      throw new Error("ไม่พบ username ");
    }

    if (user.password !== password) {
      throw new Error("password ไม่ถูกต้อง");
    }

    // const token = await jwt.sign(
    //   {
    //     id: user._id,
    //     name: user.name,
    //   },
    //   "monkey",
    //   { expiresIn: "5 days" }
    // );

    // //decode วันหมดอายุ
    // const expires_in = jwt.decode(token);

    return res.status(200).json({
      // access_token: token,
      // expires_in: expires_in.exp,
      // token_type: "Bearer",
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
