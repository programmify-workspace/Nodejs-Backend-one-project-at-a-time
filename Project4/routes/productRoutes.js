const express = require('express');
const router = express.Router();
const database = require('../database/db');

// Create Route for Load Product Data
router.get("/", (req, res) => {
  const query = `SELECT * FROM product LIMIT 10`;

  //Execute Query
  database.query(query, (error, result) => {
    if (!req.session.cart) {
      req.session.cart = [];
    }

    res.render('product', { products: result, cart: req.session.cart });
  });
});

// Create Route for Add Item into Cart
router.post('/add_cart', (req, res) => {
  const product_id = req.body.product_id;
  const product_name = req.body.product_name;
  const product_brand = req.body.product_brand;
  const product_price = req.body.product_price;

  let count = 0;

  for (let i = 0; i < req.session.cart.length; i++) {
    if (req.session.cart[i].product_id === product_id) {
      req.session.cart[i].quantity += 1;
      count++;
    }
  }

  if (count === 0) {
    const cart_data = {
      product_id: product_id,
      product_name: product_name,
      product_brand: product_brand,
      product_price: parseFloat(product_price),
      quantity: 1,
    };

    req.session.cart.push(cart_data);
  }

  res.redirect("/");
});


// Create Route for Remove Item from Shopping Cart
router.get('/remove_item', (req, res) => {
  const product_id = req.query.id;

  for (let i = 0; i < req.session.cart.length; i++) {
    if (req.session.cart[i].product_id === product_id) {
      req.session.cart.splice(i, 1);
    }
  }

  res.redirect("/");
});

// Create Route for Thank You Page

router.get('/thankYou', (req, res) => {
    
    res.render('thankYou'); 
});

module.exports = router;
