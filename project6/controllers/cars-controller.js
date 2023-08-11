const connection = require("../database/config");

module.exports = {
    getHome: async(req, res) => {
      try{
        const { search } = req.query;
        const currentPage = req.query.page ? parseInt(req.query.page) : 1;
        const itemsPerPage = 6; // Number of items to display per page
      
        let query = 'SELECT COUNT(*) AS totalItems FROM cars_data';
        let queryParams = [];
      
        if (search) {
          query += ' WHERE make LIKE ? OR model LIKE ? OR year LIKE ?';
          queryParams = ['%' + search + '%', '%' + search + '%', '%' + search + '%'];
        }
      
        // Execute the count query
        connection.query(query, queryParams, (error, countResult) => {
          if (error) {
            console.log(error);
          } else {
            const totalItems = countResult[0].totalItems;
            console.log(totalItems)
      
            // Calculate the total number of pages
            const totalPages = Math.ceil(totalItems / itemsPerPage);
      
            // Calculate the offset to get the correct items for the current page
            const offset = (currentPage - 1) * itemsPerPage;
      
            query = 'SELECT * FROM cars_data';
            queryParams = [];
            if (search) {
              query += ' WHERE make LIKE ? OR model LIKE ? OR year LIKE ?';
              queryParams = ['%' + search + '%', '%' + search + '%', '%' + search + '%'];
            }
      
            // Add pagination to the SQL query
            query += ' LIMIT ? OFFSET ?';
            queryParams.push(itemsPerPage, offset);
      
            // Execute the SQL query with pagination
            connection.query(query, queryParams, (error, result) => {
              if (error) {
                console.log(error);
              } else {
                const cars = result;
                res.status(200).render('products', { cars, currentPage, totalPages, search, make: '', year: '' });
              }
            });
          }
        });
      } catch(err){
        console.log(err);
        res.status(500).send("<h4>Something went wrong! Go back to <a href='/'>home</a></h4>");
      }
    },

    filterCars: async (req, res) => {
      try{
        const { make, year, search  } = req.query;  
        const currentPage = req.query.page ? parseInt(req.query.page) : 1;
        const itemsPerPage = 6; // Number of items to display per page
        
        let query = 'SELECT * FROM cars_data';
        let queryParams = [];
        
        if (make) {
          query += ' WHERE make LIKE ?';
          queryParams.push('%' + make + '%');
        }
        
        connection.query(query, queryParams, (error, result) => {
          if (error) {
          console.log(error);
          } else {
          let cars = result;
      
          if (year) {
              if (year === 'below2010') {
              cars = cars.filter((c) => c.year <= 2010);
              } else if (year === 'between2010to2020') {
              cars = cars.filter((c) => c.year > 2010 && c.year <= 2020);
              } else if (year === 'above2020') {
              cars = cars.filter((c) => c.year > 2020);
              }
          }
      
          // Calculate the total number of pages
          const totalPages = Math.ceil(cars.length / itemsPerPage);
      
          // Calculate the offset to get the correct items for the current page
          const offset = (currentPage - 1) * itemsPerPage;
      
          // Get the cars to be displayed on the current page
          const carsToDisplay = cars.slice(offset, offset + itemsPerPage);
          // Passing the correct data to the view, including the 'search' variable
          res.status(200).render('products', { cars: carsToDisplay, currentPage, totalPages, make, year, search });
          }
        });
      } catch(err){
        console.log(err);
        res.status(500).send("<h4>Something went wrong! Go back to <a href='/'>home</a></h4>");
      }
    }
}