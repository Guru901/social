const postModel = require("../../models/postModel");

const findUserPost = async (req, res) => {
  try {
    const posts = await postModel.find({ _id: { $in: req.body } });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = findUserPost;
