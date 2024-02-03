const postModel = require("../../models/postModel");
const userModel = require("../../models/userModel");

const disLike = async (req, res) => {
  try {
    const user = await userModel.findById(req.body.user);

    if (user._id) {
      await postModel.findOne({ userDisLiked: user._id });

      const postWithUserDisLiked = await postModel.findOne({
        _id: req.params.id,
        userDisLiked: { $elemMatch: { $eq: user._id } },
      });

      if (postWithUserDisLiked) {
        const disLikeUpdate = {
          $inc: { disLikes: -1 },
          $pull: { userDisLiked: user._id },
        };
        await postModel.updateOne({ _id: req.params.id }, disLikeUpdate);
        console.log("Document unliked successfully");
        return res.json({ state: false, msg: "Unliked" });
      }
      if (!postWithUserDisLiked) {
        const update = {
          $inc: { disLikes: 1 },
          $push: { userDisLiked: user._id },
        };

        await postModel.updateOne({ _id: req.params.id }, update);
      }

      res.json({ state: true, msg: "disLiked" });
    }
  } catch (error) {
    console.error("Error updating document:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = disLike;
