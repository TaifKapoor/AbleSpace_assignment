import express from 'express';
import Product from '../models/Product';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 20 } = req.query;
    const products = await Product.find()
      .limit(Number(limit))
      .skip((Number(page) - 1) * Number(limit));
    
    const total = await Product.countDocuments();
    
    res.json({
      success: true,
      data: products,
      page: Number(page),
      totalPages: Math.ceil(total / Number(limit))
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get('/category/:categoryId', async (req, res) => {
  try {
    const products = await Product.find({ categoryId: req.params.categoryId });
    res.json({ success: true, data: products });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json({ success: true, data: product });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;