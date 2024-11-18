const express = require('express');
const app = express();

// define middleware
const myMiddleware = (req, res, next) => {
    console.log('Middleware executed');
    next();
}

app.use(myMiddleware);

app.get('/', (req, res) => {
    res.send('Home page')
})

app.get('/about', (req, res) => {
    res.send('About page')
})

app.listen(3000, () => {
    console.log('Server is now running on port 3000');
})