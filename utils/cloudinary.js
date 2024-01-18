const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUNDINARY_CLOUD_NAME,
  api_key: process.env.CLOUNDINARY_AIP_KEY,
  api_secret: process.env.CLOUNDINARY_AIP_SECRET,
});

const fileUpload = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const file = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    fs.unlinkSync(localFilePath);
    return file;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    return null;
  }
};

module.exports = fileUpload;
