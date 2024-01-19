const postModel = require("../../models/postModel");
const userModel = require("../../models/userModel");

const allPosts = async (req, res) => {
  try {
    const posts = await postModel.find({});

    const users = posts.map((elem, index) => elem.user);

    const userObjectIdsArray = users.map((item) => item.toHexString());

    console.log(userObjectIdsArray);

    const usersData = await userModel.find({
      _id: { $in: userObjectIdsArray },
    });

    res.status(200).json(usersData);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = allPosts;
