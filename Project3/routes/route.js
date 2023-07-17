const express = require('express');
const controller = require('../controller/controller')
const router = express.Router();


router.get('/', controller.getHome);

router.post('/generate-pdf', controller.postToPdf);


module.exports = router;