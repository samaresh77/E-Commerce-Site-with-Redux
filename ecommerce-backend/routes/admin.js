const express = require('express');
const User = require('../models/User');
const { verifyToken, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

// Get all users
router.get('/users', verifyToken, isAdmin, async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// Add new user
router.post('/add-user', verifyToken, isAdmin, async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword, role });
        await newUser.save();
        res.status(201).json({ message: 'User added' });
    } catch (error) {
        res.status(500).json({ message: 'Error adding user' });
    }
});

// Delete a user
router.delete('/delete-user/:id', verifyToken, isAdmin, async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'User deleted' });
});

module.exports = router;
