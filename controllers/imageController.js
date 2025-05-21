const cloudinary = require("../utils/cloudinary");
const multer = require("multer");
const path = require("path");

// Set up multer
const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

const uploadImage = async (req, res) => {
  console.log("req.filereq.file",req.file)
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    return res.status(200).json({ message: "Image uploaded", data: result?.secure_url });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const updateImage = async (req, res) => {
  const { public_id } = req.body;

  if (!public_id) {
    return res.status(400).json({ error: "public_id is required to update image" });
  }

  try {
    // Delete old image
    await cloudinary.uploader.destroy(public_id);

    // Upload new image
    const result = await cloudinary.uploader.upload(req.file.path);
    return res.status(200).json({ message: "Image updated", data: result });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = { upload, uploadImage, updateImage };
