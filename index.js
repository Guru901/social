require("dotenv").config();

const express = require("express");
const cors = require("cors");
const db = require("./models/db.js");
const userRouter = require("./routes/user.route.js");
const postRouter = require("./routes/post.route.js");

const port = 3000;
const app = express();

// Enable CORS for any origin
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use("/api", userRouter);
app.use("/api", postRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
