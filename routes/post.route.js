const express = require("express");
const router = express.Router();

const upload = require("../middlewares/multer.js");
const uploadPost = require("../controllers/postControllers/post");
const allPosts = require("../controllers/postControllers/allposts");
const findPost = require("../controllers/postControllers/findPost");
const usersPost = require("../controllers/postControllers/usersPost.js");
const findUserPost = require("../controllers/postControllers/findUserPost");
const like = require("../controllers/postControllers/like.js");
const disLike = require("../controllers/postControllers/disLike.js");

router.post("/post", upload.single("file"), uploadPost);
router.get("/allpost", allPosts);
router.get("/userpost", usersPost);
router.get("/:id", findPost);
router.post("/userPost", findUserPost);
router.post("/like/:id", like);
router.post("/disLike/:id", disLike);

module.exports = router;
