const express = require('express');
const router = express();
const {getAllProducts, addItemToCart, removeItems} = require("../controller/productController");

// Create route for load product data
router.get("/", getAllProducts)

// Create route for adding item into cart 
router.post('/add_cart', addItemToCart)

// Create route to remove item from shopping cart
router.get("/remove_item", removeItems)


module.exports = router