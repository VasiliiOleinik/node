require('dotenv').config();
const express = require('express');
const connectToDB = require('./db/db')


const app = express();
const PORT = process.env.PORT || 3000;

// connect to database
connectToDB()
app.use(express.json());

app.use('/products', require('./routes/product-routes'));
app.use('/books', require('./routes/book-routes'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})