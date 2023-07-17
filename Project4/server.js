const express = require('express');
const session = require('express-session');
const productRoutes = require('./routes/productRoutes');
const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// middleware for serving static files
app.use(express.static('public'));

// Set up EJS as the template engine
app.set('view engine', 'ejs');

// Set up Session Middleware
app.use(session({
  secret: '1234567890abcdefghijklmnopqrstuvwxyz',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

// Use the productRoutes middleware for the specified path
app.use("/", productRoutes);

// Route to render the checkout form
app.get('/checkout', (req, res) => {
	res.render('checkout', { title: 'Checkout', cart: req.session.cart });
});

// Route to handle the checkout form data and process the order
app.post('/place_order', (req, res) => {
	const { billing_name, billing_address, shipping_name, shipping_address } = req.body;
	  
	// Clear the cart after the order is placed
	req.session.cart = [];
  
	res.redirect('/thankYou'); // Redirect the user to a thank you page after placing the order.
});
  

app.listen(PORT, () => {
  console.log(`Server starting on https://localhost:${PORT}`);
});
