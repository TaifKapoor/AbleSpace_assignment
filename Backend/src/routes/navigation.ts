import express from 'express';
import Navigation from '../models/Navigation';

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const navigation = await Navigation.find();
    res.json({ success: true, data: navigation });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;