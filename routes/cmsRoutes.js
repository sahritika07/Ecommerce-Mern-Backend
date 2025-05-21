const express = require('express');
const router = express.Router();
const {createCms,getAllCms,getCmsById,updateCms,deleteCms,getCmsBusiness} = require('../controllers/cmsController');

router.post('/cmscreate', createCms);
router.get('/cmsgetall', getAllCms);
router.get('/cmsget/:id', getCmsById);
router.put('/cmsupdate//:id', updateCms);
router.delete('/cmsdelete/:id', deleteCms);


router.get('/cmsbusinessname', getCmsBusiness);

module.exports = router;
