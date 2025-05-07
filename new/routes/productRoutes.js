const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

router.post('/add', async (req, res) => {
  await Product.create(req.body);
  res.json({ status: 'Product added' });
});

router.post('/edit/:id', async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, req.body);
  res.json({ status: 'Product updated' });
});

router.post('/delete/:id', async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ status: 'Product deleted' });
});

router.get('/', async (req, res) => {
  const products = await Product.find().populate('category');
  res.json(products);
});

module.exports = router;
