const express = require("express");
const register = require("../controllers/userControllers/register");
const Login = require("../controllers/userControllers/login");

const router = express.Router();

router.post("/register", register);
router.post("/login", Login);

module.exports = router;
