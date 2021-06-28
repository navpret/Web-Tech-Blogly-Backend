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

      res.json({_id: newBlogs._id});
    } catch (err) {
      res.status(500).json({ messsage: err.message });
    }
  },
  updateSingle: async (req, res) => {
    try {
      const { id } = req.params;

      if (!id || id.length !== 24)
        return res
          .status(400)
          .json({ message: "Please provide correct id in the URL" });
      await Blogs.findByIdAndUpdate(id, {$set: req.body});

      res.json({message: "Updated successfully."});
    } catch (err) {
      res.status(500).json({ messsage: err.message });
    }
  },
  deleteSingle: async (req, res) => {
    try {
      const { id } = req.params;
      if (!id || id.length !== 24)
        return res
          .status(400)
          .json({ message: "Please provide correct id in the URL" });
      await Blogs.findByIdAndDelete(id);

      res.json("Deleted the post Successfully");
    } catch (err) {
      res.status(500).json({ messsage: err.message });
    }
  },
};

module.exports = BlogCtrl;
