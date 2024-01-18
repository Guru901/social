const express = require("express");
const router = express.Router();
const uploadPost = require("../controllers/postControllers/post");
const allPosts = require("../controllers/postControllers/allposts");
const findPost = require("../controllers/postControllers/findPost.js");
const postModel = require("../models/postModel.js");
const upload = require("../middlewares/multer.js");
const findUserPost = require("../controllers/postControllers/findUserPost.js");

router.post("/post", upload.single("file"), uploadPost);
router.get("/allpost", allPosts);
router.get("/:id", findPost);
router.post("/userPost", findUserPost);

module.exports = router;
