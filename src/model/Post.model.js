const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user: String,
});

const Post = mongoose.model("Posts", postSchema);

module.exports = { Post };
