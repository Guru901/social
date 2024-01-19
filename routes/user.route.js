const express = require("express");
const router = express.Router();

const Register = require("../controllers/userControllers/register");
const Login = require("../controllers/userControllers/login");
const findComment = require("../controllers/userControllers/comment");
const postComment = require("../controllers/userControllers/postComment.js");
const findUser = require("../controllers/userControllers/findUser.js");

router.post("/register", Register);
router.post("/login", Login);
router.get("/comment/:id", findComment);
router.post("/postcomment", postComment);
router.get("/finduser/:id", findUser);

module.exports = router;
