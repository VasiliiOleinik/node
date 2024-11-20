require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/auth-routes')
const homeRotues = require('./routes/home-routes')
const adminRotues = require('./routes/admin-routes')
const connectToDB = require('./db/db')


const app = express();
const PORT = process.env.PORT || 3000;

// connect to database
connectToDB()
app.use(express.json());
app.use('/api/auth', authRoutes)
app.use('/api/home', homeRotues)
app.use('/api/admin', adminRotues)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})