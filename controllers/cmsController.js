const Cms = require('../models/Cms');

// CREATE
exports.createCms = async (req, res) => {
  try {
    const {
      logo = "https://res.cloudinary.com/dyi3c7pd6/image/upload/v1744809313/qkwucacnm3wkyoizterj.jpg",
      title = "Welcome to Our App",
      subtitle = "Experience the future of simplicity and efficiency.",
      businessName = "",
      carouselImages = []
    } = req.body;

    const cms = new Cms({
      logo,
      title,
      subtitle,
      businessName,
      carouselImages
    });

    await cms.save();

    res.status(201).json({ message: 'CMS created successfully', data: cms });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ ALL
exports.getAllCms = async (req, res) => {
  try {
    const cms = await Cms.find().sort({ createdAt: -1 });
    res.status(200).json(cms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



// READ ALL CMS - Return Only ID and Title
exports.getCmsBusiness = async (req, res) => {
  try {
    const cms = await Cms.aggregate([
      {
        $project: {
          _id: 1,
          businessName: 1
        }
      },
      {
        $sort: { createdAt: -1 }
      }
    ]);

    res.status(200).json(cms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



// READ BY ID
exports.getCmsById = async (req, res) => {
  try {
    const cms = await Cms.findById(req.params.id);
    if (!cms) return res.status(404).json({ error: 'CMS not found' });
    res.status(200).json(cms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// UPDATE
exports.updateCms = async (req, res) => {
  try {
    const {
      logo = "https://res.cloudinary.com/dyi3c7pd6/image/upload/v1744809313/qkwucacnm3wkyoizterj.jpg",
      title = "Welcome to Our App",
      subtitle = "Experience the future of simplicity and efficiency.",
      businessName = "",
      carouselImages = []
    } = req.body;

    const cms = await Cms.findByIdAndUpdate(
      req.params.id,
      {
        logo,
        title,
        subtitle,
        businessName,
        carouselImages
      },
      { new: true }
    );

    if (!cms) {
      return res.status(404).json({ error: 'CMS not found' });
    }

    res.status(200).json({ message: 'CMS updated', data: cms });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// DELETE
exports.deleteCms = async (req, res) => {
  try {
    const cms = await Cms.findByIdAndDelete(req.params.id);
    if (!cms) return res.status(404).json({ error: 'CMS not found' });
    res.status(200).json({ message: 'CMS deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
