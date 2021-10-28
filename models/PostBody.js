import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  userId: String,
  restaurant: String,
  summary: String,
  orders: [{
    review: String,
    rating: Number,
    order: String,
    date: String
  }]
},{ timestamps: true }
);

const gobble = mongoose.model("gobble", postSchema);

export default gobble;
