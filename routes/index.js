// routes/index.js
const express = require('express');
const router = express.Router();

const userRoute = require('./userRoutes');
const adminRoute = require('./adminRoute');
const productRoute = require('./productRoute');
const categoryRoutes = require('./categoryRoutes');
const imageRoutes = require('./imageRoutes');
const cmsRoutes = require('./cmsRoutes');

// Connect all routes here
router.use('/user', userRoute);
router.use('/admin', adminRoute);
router.use('/products',productRoute); 
router.use('/categories', categoryRoutes);
router.use('/cms', cmsRoutes);
router.use("/images", imageRoutes);

module.exports = router;
