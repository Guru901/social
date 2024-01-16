const express = require("express");
const router = express.Router();
const uploadPost = require("../controllers/postControllers/post");
const allPosts = require("../controllers/postControllers/allposts");

router.post("/post", uploadPost);
router.get("/allpost", allPosts);

module.exports = router;
