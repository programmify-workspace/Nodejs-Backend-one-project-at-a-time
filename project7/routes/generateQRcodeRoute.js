const express = require('express');
const router = express.Router();
const generateQRcodeController = require('../controller/generateQRcodeController')


router.get('/', generateQRcodeController.getHome);
router.post('/', generateQRcodeController.getQRcode);




module.exports = router;