const commentModel = require("../../models/commentModel");
const userModel = require("../../models/userModel");

const postComment = async (req, res) => {
  const userId = req.body.user.user._id;

  const username = await userModel.findById(userId);

  const comment = await commentModel.create({
    text: req.body.comment,
    post: req.body.id,
    user: userId,
    username: username.username,
  });

  await comment.save();

  res.status(201).json({ msg: "comment added" });
};

module.exports = postComment;
