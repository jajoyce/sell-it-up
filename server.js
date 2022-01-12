// Imports 
const express = require('express'); 
const app = express(); 

// Variables 
const PORT = 4000; 
const products = [
    {product: 'Shirt', price: 20},
    {product: 'Shoes', price: 60},
    {product: 'Pants', price: 100}
];
const dogs = [
    {name: 'Snoopy'}, 
    {name: 'Scooby'}
];

// Routes
app.get('/', function(req, res) {
    res.send('This is working.')
});

app.get('/products', function(req, res) {
    res.send(products);
});

app.get('/products/:index', function(req, res) {
    res.send(products[req.params.index])
});

app.get('/dogs', function(req, res) {
    res.send(dogs);
})



app.get('*', function(req, res) {
    res.send('Catch-all * route.');
});



app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`);
});


