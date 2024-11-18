const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Home page')
})

app.get('/products', (req, res) => {
    const products = [
        {
            id: 1,
            name: 'Laptop'
        },
        {
            id: 2,
            name: 'Mobile phone'
        }
    ]

    res.json(products)
})

app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    const product = {
        id: id,
        name: 'Laptop'
    }

    res.json(product)
})

const port = 3000;

app.listen(port, () => {
    console.log('Server is now running on port 3000');
})