const pool = require('./connection');

const getAllRecords = (sortField, sortOrder, limit, offset, filterTerm) => {
  return new Promise((resolve, reject) => {
    let sql = 'SELECT * FROM records';
    let params = [];

    if (filterTerm) {
      const searchTerm = `%${filterTerm}%`;
      sql += ' WHERE name LIKE ? OR description LIKE ?';
      params.push(searchTerm, searchTerm);
    }

    if (sortField && sortOrder) {
      sql += ` ORDER BY ${sortField} ${sortOrder}`;
    }

    if (limit !== undefined && offset !== undefined) {
      sql += ' LIMIT ? OFFSET ?';
      params.push(limit, offset);
    }

    pool.query(sql, params, (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};



const createRecord = (recordData) => {
  return new Promise((resolve, reject) => {
    pool.query('INSERT INTO records SET ?', recordData, (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result.insertId);
    });
  });
};


const getRecordById = (recordId) => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM records WHERE id = ?', [recordId], (err, result) => {
      if (err) {
        return reject(err);
      }
      if (result.length === 0) {
        return reject(new Error('Record not found'));
      }
      resolve(result[0]);
    });
  });
};


const getFilteredRecords = (filterTerm, sortField, sortOrder, limit, offset) => {
  return new Promise((resolve, reject) => {
    const searchTerm = `%${filterTerm}%`;
    const sql = `SELECT * FROM records WHERE name LIKE ? OR description LIKE ? ORDER BY ${sortField} ${sortOrder} LIMIT ? OFFSET ?`;
    pool.query(sql, [searchTerm, searchTerm, limit, offset], (err, results) => {
      if (err) {
        return reject(err);
      }
      resolve(results);
    });
  });
};


// Function to update a record by ID
async function updateRecordById(recordId, updatedRecord) {
  
  const sql = 'UPDATE records SET name = ?, description = ? WHERE id = ?';
  await pool.query(sql, [updatedRecord.name, updatedRecord.description, recordId]);
}


// Function to delete a record by ID
async function deleteRecordById(recordId) {
  
  const sql = 'DELETE FROM records WHERE id = ?';
  await pool.query(sql, [recordId]);
}



// Export the functions to be used in other files
module.exports = {
  getAllRecords,
  createRecord,
  getRecordById,
  updateRecordById, 
  deleteRecordById
};
