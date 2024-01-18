const userModel = require("../../models/userModel");

const Register = async (req, res) => {
  try {
    const exist = await userModel.findOne({
      username: req.body.username,
    });

    if (exist) {
      return res.json({
        msg: "Username taken, please use something else",
        state: false,
      });
    }

    const file = req.file;

    const user = new userModel({
      username: req.body.username,
      password: req.body.password,
    });

    await user.save();

    res.status(201).json({
      username: user.username,
      msg: "Successfully registered",
      state: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = Register;
