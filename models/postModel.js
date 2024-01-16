const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model("postModel", postSchema);
