const qrcode = require('qrcode');

function generateQRCode(req, res) {
    const inputText = req.body.text;

    qrcode.toDataURL(inputText, (err, src) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error generating QR code.');
        }
        res.render('scan', {
            qr_code: src
        });
    });
}

module.exports = {
    generateQRCode,
};
