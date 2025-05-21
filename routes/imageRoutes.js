const express = require("express");
const router = express.Router();
const { upload, uploadImage, updateImage } = require("../controllers/imageController");

router.post("/upload", upload.single("image"), uploadImage);
router.put("/update", upload.single("image"), updateImage);

module.exports = router;
