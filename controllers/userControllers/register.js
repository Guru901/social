const userModel = require("../../models/userModel");
const fileUpload = require("../../utils/cloudinary");

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

    const file = req.file.filename;
    if (file) {
      var onlinePath = await fileUpload(`public/images/${file}`);
    }

    const user = new userModel({
      username: req.body.username,
      password: req.body.password,
      avatar: onlinePath.url,
    });

    await user.save();

    res.status(201).json({
      user,
      msg: "Successfully registered",
      state: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = Register;
