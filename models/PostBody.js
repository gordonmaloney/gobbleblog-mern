import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  userId: String,
  restaurant: String,
  review: String,
  rating: Number,
  order: String
});

const gobble = mongoose.model("gobble", postSchema);

export default gobble;
