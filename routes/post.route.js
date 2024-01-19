const express = require("express");
const router = express.Router();
const uploadPost = require("../controllers/postControllers/post");
const allPosts = require("../controllers/postControllers/allposts");
const findPost = require("../controllers/postControllers/findPost");
const usersPost = require("../controllers/postControllers/usersPost.js");
const postModel = require("../models/postModel");
const upload = require("../middlewares/multer");
const findUserPost = require("../controllers/postControllers/findUserPost");

router.post("/post", upload.single("file"), uploadPost);
router.get("/allpost", allPosts);
router.get("/userpost", usersPost);
router.get("/:id", findPost);
router.post("/userPost", findUserPost);

module.exports = router;
