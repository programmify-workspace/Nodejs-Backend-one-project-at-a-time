const path = require('path');
const PDFDocument = require('pdfkit');
const connection = require('../database/db');

module.exports = {
    getHome: (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
    },

    postToPdf: (req, res) => {
        const { firstName, lastName, email, age, nationality, address } = req.body;

        // Save the form data to the database
        connection.query(
            'INSERT INTO document (first_name, last_name, email, age, nationality, address) VALUES (?, ?, ?, ?, ?, ?)',
            [firstName, lastName, email, age, nationality, address],
            (err, result) => {
                if (err) {
                    console.error('Error saving data to the database:', err);
                    return res.status(500).json({ error: 'Failed to save data to the database' });
                }

                // Generate PDF using the saved data
                connection.query(
                    'SELECT * FROM document WHERE id = ?',
                    [result.insertId], // Get the last inserted ID to fetch the saved data
                    (err, data) => {
                        if (err || data.length === 0) {
                            console.error('Error fetching data from the database:', err);
                            return res.status(500).json({ error: 'Failed to fetch data from the database' });
                        }

                        // Create a new PDF document
                        const doc = new PDFDocument();

                        // Set response headers
                        res.setHeader('Content-Type', 'application/pdf');
                        res.setHeader('Content-Disposition', 'attachment; filename="generated.pdf"');

                        // Pipe the PDF document to the response
                        doc.pipe(res);

                        // Add content to the PDF using the fetched data
                        doc.fontSize(24).text(`${data[0].first_name}'s Personal Information`, { align: 'center', underline: true }).moveDown(1);
                        doc.fontSize(12).text(`First Name: ${data[0].first_name}`).moveDown(0.5);
                        doc.fontSize(12).text(`Last Name: ${data[0].last_name || "N/A"}`).moveDown(0.5);
                        doc.fontSize(12).text(`Email: ${data[0].email}`).moveDown(0.5);
                        doc.fontSize(12).text(`Age: ${data[0].age || "N/A"}`).moveDown(0.5);
                        doc.fontSize(12).text(`Nationality: ${data[0].nationality}`).moveDown(0.5);
                        doc.fontSize(12).text(`Address: ${data[0].address || "N/A"}`).moveDown(0.5);

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
                );
            }
        );
    }
};

