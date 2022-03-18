import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    email: { type: String, required: true },
    //password: { type: String, required: true },
    name: {type: String, required: true },
    progress: [{type: Number, default: 0}],
    words: [{
        level: Number,
        word: Number,
        due: Number,
        delay: Number,
        reviews: Number
      }]
});

export default mongoose.model("User", userSchema);