const path = require('path');
const PDFDocument = require('pdfkit');

module.exports = {
    getHome: (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
    },

    postToPdf: (req, res) => {
        const { firstName, lastName, email, age, nationality, address } = req.body;
        console.log(req.body);
    
        // Create a new PDF document
        const doc = new PDFDocument();
    
        // Set response headers
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="generated.pdf"');
    
        // Pipe the PDF document to the response
        doc.pipe(res);
    
        // Add content to the PDF
        doc.fontSize(24).text(`${firstName}'s Personal Information`, { align: 'center', underline: true }).moveDown(1);
        doc.fontSize(12).text(`First Name: ${firstName}`).moveDown(0.5);
        doc.fontSize(12).text(`Last Name: ${lastName || "N/A"}`).moveDown(0.5);
        doc.fontSize(12).text(`Email: ${email}`).moveDown(0.5);
        doc.fontSize(12).text(`Age: ${age || "N/A"}`).moveDown(0.5);
        doc.fontSize(12).text(`Nationality: ${nationality}`).moveDown(0.5);
        doc.fontSize(12).text(`Address: ${address || "N/A"}`).moveDown(0.5);
    
        // Add a separator line
        doc
        .moveDown(1)
        .moveTo(50, doc.y)
        .lineTo(550, doc.y)
        .stroke();
    
        // Add a footer
        doc
        .moveDown(0.3)
        .fontSize(10)
        .text(`Date: ${new Date().toLocaleDateString()}`, { align: 'center' });
    
        // Finalize the PDF and end the response
        doc.end();

    }
}
