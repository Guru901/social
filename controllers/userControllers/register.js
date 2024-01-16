const userModel = require("../../models/userModel");

const register = async (req, res) => {
  try {
    const exist = await userModel.findOne({
      username: req.body.username,
    });

    if (!exist) {
      const user = await new userModel({
        username: req.body.username,
        password: req.body.password,
      });
      await user.save();
      res.status(201).json({ msg: "Succesfully registered", state: true });
    }

    if (exist) {
      res.json({ msg: "Username taken please use something else" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = register;
