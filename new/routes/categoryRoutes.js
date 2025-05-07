const express = require('express');
const router = express.Router();
const Category = require('../models/categoryModel');

router.post('/add', async (req, res) => {
  const { name, parent } = req.body;
  await Category.create({ name, parent: parent || null });
  res.json({ status: 'Category added' });
});

router.post('/edit/:id', async (req, res) => {
  const { name, parent } = req.body;
  await Category.findByIdAndUpdate(req.params.id, { name, parent: parent || null });
  res.json({ status: 'Category updated' });
});

router.post('/delete/:id', async (req, res) => {
  await Category.findByIdAndDelete(req.params.id);
  res.json({ status: 'Category deleted' });
});

router.get('/', async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

module.exports = router;
