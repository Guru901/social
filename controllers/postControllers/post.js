const postModel = require("../../models/postModel");

const uploadPost = async (req, res) => {
  try {
    const post = new postModel({
      title: req.body.title,
      body: req.body.body,
      img: req.body.img,
    });
    await post.save();
    res.status(201).json({ msg: "Posted", state: true });
  } catch (error) {
    console.log(error);
  }
};

module.exports = uploadPost;
