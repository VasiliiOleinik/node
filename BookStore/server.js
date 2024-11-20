require('dotenv').config();
const express = require('express')
const connectToDB = require('./db/db');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// connect to database
connectToDB()


// Middleware
app.use(express.json());
app.use('/api/book', bookRoutes); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})