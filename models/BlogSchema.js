const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  postedBy: {
    type: String,
    trim: true,
    required: true
  },
  title: {
    type: String,
    trim: true,
    required: true
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model("Blogs", BlogSchema);
