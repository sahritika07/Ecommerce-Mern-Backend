const express = require('express');
const router = express.Router();
const { adminRegistration, adminLogin} = require('../controllers/admincontroller');
// const {checkUserAuth} = require("../middlewares/auth-middleware")

// route level middleware to PRotect route
// router.use('/changepassword',checkUserAuth)
// router.use('/changepassword',loggedUser)


// public routes

router.post('/admin-register',adminRegistration)
router.get('/admin-login',adminLogin)


module.exports = router;