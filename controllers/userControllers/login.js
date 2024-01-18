const userModel = require("../../models/userModel");

const Login = async (req, res) => {
  try {
    const user = await userModel.findOne({
      username: req.body.username,
      password: req.body.password,
    });

    if (user) {
      res.json({
        user,
        state: true,
      });
    } else {
      res.json({ msg: "Incorrect Credentials" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = Login;
