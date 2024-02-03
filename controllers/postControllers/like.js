const postModel = require("../../models/postModel");
const userModel = require("../../models/userModel");

const like = async (req, res) => {
  try {
    const user = await userModel.findById(req.body.user);

    if (user._id) {
      await postModel.findOne({ userLiked: user._id });

      const postWithUserLiked = await postModel.findOne({
        _id: req.params.id,
        userLiked: { $elemMatch: { $eq: user._id } },
      });

      if (postWithUserLiked) {
        const updateOperation = {
          $inc: { likes: -1 },
          $pull: { userLiked: user._id },
        };
        await postModel.updateOne({ _id: req.params.id }, updateOperation);
        return res.json({ state: false, msg: "Unliked" });
      }
      if (!postWithUserLiked) {
        const likeUpdate = {
          $inc: { likes: 1 },
          $push: { userLiked: user._id },
        };

        await postModel.updateOne({ _id: req.params.id }, likeUpdate);
      }

      res.json({ state: true, msg: "Liked" });
    }
  } catch (error) {
    console.error("Error updating document:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = like;
