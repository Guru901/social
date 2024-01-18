const postModel = require("../../models/postModel");
const userModel = require("../../models/userModel");

const uploadPost = async (req, res) => {
  try {
    const userId = req.body.userId;

    const post = new postModel({
      title: req.body.title,
      body: req.body.body,
      img: req.body.file,
      user: userId,
    });

    const savedPost = await post.save();

    // Update the userModel to include the post reference
    await userModel.findByIdAndUpdate(
      userId,
      { $push: { posts: savedPost._id } },
      { new: true }
    );

    res.status(201).json({ msg: "Posted", state: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Internal Server Error", state: false });
  }
};

module.exports = uploadPost;
