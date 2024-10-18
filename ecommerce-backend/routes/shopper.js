const express = require('express');
const Product = require('../models/Product');
const { verifyToken, isShopper } = require('../middlewares/authMiddleware');
const router = express.Router();

// Get all products
router.get('/products', verifyToken, isShopper, async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// Purchase a product
router.post('/purchase', verifyToken, isShopper, async (req, res) => {
    const { productId } = req.body;
    const product = await Product.findById(productId);
    if (product.quantity === 0) {
        return res.status(400).json({ message: 'Product out of stock' });
    }
    product.quantity -= 1;
    await product.save();
    res.status(200).json({ message: 'Product purchased' });
});

module.exports = router;
