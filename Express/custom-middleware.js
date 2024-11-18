const express = require('express');
const app = express();


const requestTimeStamp = (req, res, next) => {
    const timeStamp = new Date().toISOString();

    console.log(`${timeStamp} - ${req.method} - ${req.url}`);
    next();
}

app.use(requestTimeStamp);

app.get('/', (req, res) => {
    res.send('Home page')
})

app.get('/about', (req, res) => {
    res.send('About page')
})

app.listen(3000, () => {
    console.log('Server is now running on port 3000');
})