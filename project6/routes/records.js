// routes/records.js
const express = require('express');
const router = express.Router();
const { createRecord, getAllRecords, getRecordById, updateRecordById, deleteRecordById } = require('../db/queries');

// Route to list all records with sorting and pagination

router.get('/', async (req, res) => {
  const sortField = req.query.sortField || 'id';
  const sortOrder = req.query.sortOrder || 'ASC';
  const page = parseInt(req.query.page) || 1;
  const recordsPerPage = 5;
  const offset = (page - 1) * recordsPerPage;
  const filterTerm = req.query.filter || '';

  try {
    const totalRecords = await getAllRecords(); // Get the total number of records for pagination
    const totalPages = Math.ceil(totalRecords.length / recordsPerPage);

    // Pass the filterTerm to the getAllRecords function
    const records = await getAllRecords(sortField, sortOrder, recordsPerPage, offset, filterTerm);

    res.render('index', {
      records,
      totalPages,
      currentPage: page,
      filterTerm, // Pass the filter term to the template
    });
  } catch (error) {
    console.error('Error fetching records:', error); // Log the error
    res.status(500).send('Error fetching records');
  }
});

// Route to create a new record
router.post('/', async (req, res) => {
  try {
    const newRecordData = req.body;
    const newRecordId = await createRecord(newRecordData);
    res.redirect(`/records/${newRecordId}`);
  } 
  catch (error) {
    console.error('Error creating record:', error);
    res.status(500).send('Error creating record');
  }
});

// Route to get details of a single record
router.get('/:id', async (req, res) => {
  const recordId = req.params.id;
  try {
    const record = await getRecordById(recordId);
    res.render('recordDetails', { record });
  } 
  catch (error) {
    console.error('Error fetching record details:', error);
    res.status(404).send('Record not found');
  }
});

// Route to handle the update (GET request to show the update form)
router.get('/:id/update', async (req, res) => {
  const recordId = req.params.id;
  try {
    const record = await getRecordById(recordId);
    res.render('updateRecord', { record });
  } catch (error) {
    console.error('Error fetching record details for update:', error);
    res.status(404).send('Record not found');
  }
});

// Route to handle the update (POST request to process the update)
router.post('/:id/update', async (req, res) => {
  const recordId = req.params.id;
  const { name, description } = req.body;
  const updatedRecord = { name, description };
  try {
    await updateRecordById(recordId, updatedRecord); // Call the updateRecordById function

    // Display a confirmation message using JavaScript's alert function
    res.locals.message = 'Record updated';

    // After updating, redirect to the records list page
    res.redirect('/records');
  } catch (error) {
    console.error('Error updating record:', error);
    res.status(500).send('Error updating record');
  }
});

// Route to handle the delete (POST request to process the delete)
router.post('/:id', async (req, res) => {
  const recordId = req.params.id;
  try {
    // Call the deleteRecord function from your db/queries.js file
    await deleteRecordById(recordId);

    // After deleting, redirect to the records list page
    res.redirect('/records');
  } catch (error) {
    console.error('Error deleting record:', error);
    res.status(500).send('Error deleting record');
  }
});


module.exports = router;

