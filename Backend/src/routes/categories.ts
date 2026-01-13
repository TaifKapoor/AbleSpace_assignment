import express from 'express';
import Category from '../models/Category';

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const categories = await Category.find().populate('navigationId');
    res.json({ success: true, data: categories });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get('/:slug', async (req, res) => {
  try {
    const category = await Category.findOne({ slug: req.params.slug });
    res.json({ success: true, data: category });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;