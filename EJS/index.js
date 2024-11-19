const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'))

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


app.get('/', (req, res) => {
    res.render('home', { title: 'Home page', products })
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About page' })
})

app.listen(3000, () => {
    console.log('Server is now running on port 3000');
})