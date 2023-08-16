const express = require('express');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');


// Routes
const recordsRouter = require('./routes/records');
app.use('/records', recordsRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/records`);
});
