const Blogs = require("../models/BlogSchema");

const BlogCtrl = {
  getAll: async (req, res) => {
    try {
      const blogs = await Blogs.find();

      res.json(blogs);
    } catch (err) {
      res.status(500).json({ messsage: err.message });
    }
  },
  getSingle: async (req, res) => {
    try {
      const { id } = req.params;
      if (!id || id.length !== 24)
        return res
          .status(400)
          .json({ message: "Please provide correct id in the URL" });
      const post = await Blogs.findById(id);

      res.json(post);
    } catch (err) {
      res.status(500).json({ messsage: err.message });
    }
  },
  create: async (req, res) => {
    try {
      const { content, postedBy, title } = req.body;

      const newBlogs = new Blogs({
        content,
        postedBy,
        title
      });
      newBlogs.save();

      res.json(newBlogs._id);
    } catch (err) {
      res.status(500).json({ messsage: err.message });
    }
  },
};

module.exports = BlogCtrl;
