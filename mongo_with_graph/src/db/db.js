const mongoose = require('mongoose');

const connectToDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://oleinikdev:EAHWxFlD8VJhc1mr@cluster0.pcf25.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log('Connected to database');
    } catch (error) {
        console.error('Error connecting to database', error);
        process.exit(1);
    }
}

module.exports = connectToDB;