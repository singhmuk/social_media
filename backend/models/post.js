const mongoose = require('mongoose');
const Schems = mongoose.Schema;

const PostSchema = new Schems({
    userId: { type: String, required: true },
    desc: { type: String, max: 500 },
    img: { type: String },
    likes: { type: Array, default: [] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
