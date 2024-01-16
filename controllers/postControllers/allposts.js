const postModel = require("../../models/postModel");

const allPosts = async (req, res) => {
  try {
    const posts = await postModel.find({});
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = allPosts;
