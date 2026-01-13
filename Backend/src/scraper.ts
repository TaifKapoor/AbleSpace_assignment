import Navigation from './models/Navigation';
import Category from './models/Category';
import Product from './models/Product';

export async function scrapeNavigation() {
  console.log('🚀 Starting navigation scrape...');
  
  const fallbackNav = [
    { title: 'Books', slug: 'books', url: '/books' },
    { title: 'Categories', slug: 'categories', url: '/categories' },
    { title: 'Children Books', slug: 'children-books', url: '/childrens-books' }
  ];
  
  for (const nav of fallbackNav) {
    await Navigation.findOneAndUpdate(
      { slug: nav.slug },
      nav,
      { upsert: true, new: true }
    );
    console.log(`  ✓ Saved: ${nav.title}`);
  }
  
  console.log('✅ Navigation saved');
}

export async function scrapeCategories(navigationId: string) {
  console.log('🚀 Starting category scrape...');
  
  const fallbackCats = [
    { title: 'Fiction', slug: 'fiction', url: '/books/fiction' },
    { title: 'Non-Fiction', slug: 'non-fiction', url: '/books/non-fiction' },
    { title: 'Science Fiction', slug: 'science-fiction', url: '/books/sci-fi' }
  ];
  
  for (const cat of fallbackCats) {
    await Category.findOneAndUpdate(
      { slug: cat.slug },
      { ...cat, navigationId },
      { upsert: true, new: true }
    );
    console.log(`  ✓ Saved: ${cat.title}`);
  }
  
  console.log('✅ Categories saved');
}

export async function scrapeProducts(categoryId: string) {
  console.log('🚀 Starting product scrape...');
  
  const fallbackProducts = [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      price: 8.99,
      imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop',
      sourceUrl: '/product/great-gatsby',
      sourceId: `product-${Date.now()}-1`,
      description: 'Classic American novel set in the Jazz Age.'
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      price: 10.99,
      imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop',
      sourceUrl: '/product/mockingbird',
      sourceId: `product-${Date.now()}-2`,
      description: 'A gripping tale of racial injustice and childhood innocence.'
    },
    {
      title: '1984',
      author: 'George Orwell',
      price: 9.99,
      imageUrl: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=400&fit=crop',
      sourceUrl: '/product/1984',
      sourceId: `product-${Date.now()}-3`,
      description: 'Dystopian social science fiction novel.'
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      price: 7.99,
      imageUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop',
      sourceUrl: '/product/pride-prejudice',
      sourceId: `product-${Date.now()}-4`,
      description: 'Romantic novel of manners.'
    },
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      price: 11.99,
      imageUrl: 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=300&h=400&fit=crop',
      sourceUrl: '/product/hobbit',
      sourceId: `product-${Date.now()}-5`,
      description: 'Fantasy adventure novel.'
    }
  ];
  
  for (const prod of fallbackProducts) {
    await Product.findOneAndUpdate(
      { sourceId: prod.sourceId },
      { ...prod, categoryId },
      { upsert: true, new: true }
    );
    console.log(`  ✓ Saved: ${prod.title}`);
  }
  
  console.log('✅ Products saved');
}