import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  lesson: String,
  author: String,
  title: String,
  body: String,
});

const PostBody = mongoose.model("PostBody", postSchema);

export default PostBody;