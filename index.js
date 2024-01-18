require("dotenv").config();

const express = require("express");
const cors = require("cors");
const db = require("./models/db.js");
const userRouter = require("./routes/user.route.js");
const postRouter = require("./routes/post.route.js");

const port = 3000;
const app = express();

app.use(express.json());

app.use(cors());

app.use("/api", userRouter);
app.use("/api", postRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
