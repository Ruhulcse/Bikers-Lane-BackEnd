const express = require("express");
const router = express.Router();
const {
  getPost,
  getPosts,
  getPostsByCreator,
  getPostsBySearch,
  createPost,
  updatePost,
  deletePost,
  likePost,
} = require("../controllers/postController");

router.route("/").post(createPost);
router.route("/").get(getPosts);
module.exports = router;
