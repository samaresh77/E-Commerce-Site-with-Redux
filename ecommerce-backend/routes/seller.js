const express = require('express');
const Product = require('../models/Product');
const { verifyToken, isSeller } = require('../middlewares/authMiddleware');
const router = express.Router();

// Get seller's products
router.get('/products', verifyToken, isSeller, async (req, res) => {
    const products = await Product.find({ seller: req.userId });
    res.json(products);
});

// Post a product
router.post('/post-product', verifyToken, isSeller, async (req, res) => {
    const { name, price, quantity } = req.body;
    try {
        const newProduct = new Product({ name, price, quantity, seller: req.userId });
        await newProduct.save();
        res.status(201).json({ message: 'Product posted' });
    } catch (error) {
        res.status(500).json({ message: 'Error posting product' });
    }
});

module.exports = router;
