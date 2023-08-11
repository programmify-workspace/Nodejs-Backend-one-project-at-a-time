const express = require('express')
const router = express.Router();
const carsController = require('../controllers/cars-controller');

router.get('/', carsController.getHome);
  
  
router.get('/filter', carsController.filterCars);

module.exports = router;