const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "post",
    required: true,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },

  username: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("commentModel", commentSchema);
