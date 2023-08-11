const connection = require("../database/config")

getAllProducts = (req, res)=>{
    const query = `SELECT * FROM products`

    // execute query
    connection.query(query, (error, result)=>{
        if(!req.session.cart){
            req.session.cart=[];
        }

        // console.log(result);
        res.render('product',{products: result, cart: req.session.cart});
    })
},
addItemToCart = (req,res)=>{
    const product_id = req.body.product_id;
    const product_name = req.body.product_name;
    const product_price = req.body.product_price;

    let count = 0;

    for(let i = 0; i<req.session.cart.length; i++){
        if(req.session.cart[i].product_id === product_id){
            req.session.cart[i].quantity +=1;
            count++;
        }
    }
    if(count==0){
        const cart_data = {
            product_id: product_id,
            product_name: product_name,
            product_price: parseFloat(product_price),
            quantity: 1
        };

        req.session.cart.push(cart_data)
    }
    res.redirect('/');

}

removeItems = (req,res)=>{
    const product_id = req.query.id;
    
    for(let i=0; i<req.session.cart.length;i++){
        if(req.session.cart[i].product_id === product_id){
            req.session.cart.splice(i, 1);
        }
    }
    res.redirect('/')
}

module.exports = {getAllProducts, addItemToCart, removeItems}