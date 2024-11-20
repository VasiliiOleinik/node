const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        console.log(req.body);
        const { username, email,  password, role } = req.body;

        // Check if email already exists
        const isUserEists = await User.findOne({ $or: [{ email }, { username }] });
        if (isUserEists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const user = new User({ username, email, password: hashedPassword, role: role || 'user' });
        await user.save();

        // Generate token

        res.status(201).json({
            message: 'User created successfully',
            success: true,
            user
        });

        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const login = async (req, res) => {
    try {
        const { email, username,  password } = req.body;

        // Check if email exists
        const user = await User.findOne({ $or: [{ email }, { username }] });

        if(!user) {
            return res.status(400).json({ message: 'User is not found' });
        }

        // Check if password is correct
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if(!isPasswordCorrect) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate token
        const token = jwt.sign({ id: user._id, username: user.username, role: user.role }, 'secret', { expiresIn: '1d' });

        res.status(201).json({
            message: 'User logged in successfully',
            success: true,
            user,
            token
        })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    register,
    login
}