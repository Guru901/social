const commentModel = require("../../models/commentModel");
const userModel = require("../../models/userModel");

const findComment = async (req, res) => {
  try {
    const comment = await commentModel.find({ post: req.params.id });

    const username = await userModel.find({
      username: comment.user,
    });

    console.log(username);

    res.status(200).json(comment);
  } catch (error) {
    console.error("Error fetching post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = findComment;
