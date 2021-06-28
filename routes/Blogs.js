const router = require("express").Router();
const BlogCtrl = require("../controllers/BlogCtrl");

router.route("/")
  .get(BlogCtrl.getAll)
  .post(BlogCtrl.create);

router.route("/:id").get(BlogCtrl.getSingle)
  .patch(BlogCtrl.updateSingle)
  .delete(BlogCtrl.deleteSingle);

module.exports = router;
