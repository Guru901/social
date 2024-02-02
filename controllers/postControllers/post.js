const postModel = require("../../models/postModel");
const userModel = require("../../models/userModel");
const fileUpload = require("../../utils/cloudinary");

const uploadPost = async (req, res) => {
  try {
    const userId = req.body.userId;

    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({ msg: "User not found", state: false });
    }

    const { title, body } = req.body;

    if (req.file) {
      var file = req.file.filename;
    }

    if (file) {
      var onlinePath = await fileUpload(`public/images/${file}`);
    }

    const post = new postModel({
      title,
      body,
      image: onlinePath ? onlinePath.url : "",
      user: userId,
      username: user.username,
    });

    const savedPost = await post.save();

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
