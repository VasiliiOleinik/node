const express = require('express');

const app = express();
const port = 3000;

// Application level settings
app.set('view engine', 'ejs');

// Routing

app.get('/', (req, res) => {
    res.send('Home page')
})

app.post('/api/data', (req, res) => {
    res.json({ message: 'Data received', data: req.body })
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
})