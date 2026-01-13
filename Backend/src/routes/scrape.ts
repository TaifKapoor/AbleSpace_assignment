import express from 'express';
import { scrapeNavigation, scrapeCategories, scrapeProducts } from '../scraper';

const router = express.Router();

router.post('/navigation', async (_req, res) => {
  try {
    console.log('📡 Scrape navigation request received');
    await scrapeNavigation();
    res.json({ success: true, message: 'Navigation scraped successfully' });
  } catch (error: any) {
    console.error('❌ Scrape error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/categories', async (req, res) => {
  try {
    const { navigationId } = req.body;
    await scrapeCategories(navigationId);
    res.json({ success: true, message: 'Categories scraped successfully' });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/products', async (req, res) => {
  try {
    const { categoryId } = req.body;
    await scrapeProducts(categoryId);
    res.json({ success: true, message: 'Products scraped successfully' });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;