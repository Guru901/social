const commentModel = require("../../models/commentModel");

const postComment = async (req, res) => {
  const comment = await commentModel.create({
    text: req.body.comment,
    post: req.body.id,
  });

  await comment.save();

  res.status(201).json({ msg: "comment added" });
};

module.exports = postComment;
