const express = require('express');
const qrcodeController = require('../controllers/qrcodeController');

const router = express.Router();

// Route to render the index page
router.get('/', (req, res) => {
    res.render('index');
});

// Route to handle QR code generation
router.post('/scan', qrcodeController.generateQRCode);

module.exports = router;
