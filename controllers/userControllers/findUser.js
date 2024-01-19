const postModel = require("../../models/postModel");
const userModel = require("../../models/userModel");

const findUser = async (req, res) => {
  try {
    const user = await postModel.find({ user: req.params.id });

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = findUser;
