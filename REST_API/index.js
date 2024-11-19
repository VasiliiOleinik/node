const express = require('express');

const app = express();
const port = 3000;


// middleware
app.use(express.json());

let books = [
    {
        id: 1,
        title: "Book 1",
    },
    {
        id: 2,
        title: "Book 2",
    }
]

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to our book store' });
})

app.get('/get', (req, res) => {
    res.json(books);
})

app.get('/get:id', (req, res) => {
    const book = books.find(book => book.id === parseInt(req.params.id));
    if(!book) {
        return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
})

app.post('/post', (req, res) => {
    const book = {
        id: books.length + 1,
        title: req.body.title
    }
    books.push(book);
    res.status(201).json(book);
})

app.listen(port, () => {
    console.log('Server is now running on port 3000');
})