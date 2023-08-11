const express = require('express');
const controller = require('../controller/pdf-controller')
const router = express.Router();

// Serve the HTML form
router.get('/', controller.getHome);

// Generate and download PDF
router.post('/generate-pdf', controller.postToPdf);


module.exports = router;