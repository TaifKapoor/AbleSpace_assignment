import dotenv from 'dotenv';
import { connectDB } from './db';
import Navigation from './models/Navigation';
import Category from './models/Category';
import Product from './models/Product';

dotenv.config();
0
async function seedDatabase() {
  try {
    await connectDB();
    console.log('🌱 Starting database seeding...\n');

    // Clear existing data
    await Navigation.deleteMany({});
    await Category.deleteMany({});
    await Product.deleteMany({});
    console.log('✅ Cleared existing data\n');

    // Seed Navigation
    console.log('📡 Seeding Navigation...');
    const navItems = await Navigation.insertMany([
      { title: 'Books', slug: 'books', url: '/books' },
      { title: 'Categories', slug: 'categories', url: '/categories' },
      { title: "Children's Books", slug: 'childrens-books', url: '/childrens-books' }
    ]);

    if (!navItems.length) {
      throw new Error('Navigation seeding failed');
    }
    console.log(`✅ Created ${navItems.length} navigation items\n`);

    // Seed Categories
    console.log('📡 Seeding Categories...');
    const categories = await Category.insertMany([
      {
        title: 'Fiction',
        slug: 'fiction',
        url: '/books/fiction',
        navigationId: navItems[0]!._id
      },
      {
        title: 'Non-Fiction',
        slug: 'non-fiction',
        url: '/books/non-fiction',
        navigationId: navItems[0]!._id
      },
      {
        title: 'Science Fiction',
        slug: 'science-fiction',
        url: '/books/science-fiction',
        navigationId: navItems[0]!._id
      },
      {
        title: 'Mystery',
        slug: 'mystery',
        url: '/books/mystery',
        navigationId: navItems[0]!._id
      },
      {
        title: 'Biography',
        slug: 'biography',
        url: '/books/biography',
        navigationId: navItems[1]!._id
      }
    ]);

    if (!categories.length) {
      throw new Error('Category seeding failed');
    }
    console.log(`✅ Created ${categories.length} categories\n`);

    // Seed Products
    console.log('📡 Seeding Products...');
    const products = await Product.insertMany([
      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        price: 8.99,
        imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop',
        sourceUrl: 'https://www.worldofbooks.com/great-gatsby',
        sourceId: 'great-gatsby-001',
        categoryId: categories[0]!._id,
        description: 'A classic American novel set in the Jazz Age on Long Island.',
        reviews: [
          { author: 'John Doe', rating: 5, text: 'Absolutely brilliant! A timeless classic.' },
          { author: 'Jane Smith', rating: 4, text: 'Great read, highly recommend.' }
        ]
      },
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        price: 10.99,
        imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop',
        sourceUrl: 'https://www.worldofbooks.com/mockingbird',
        sourceId: 'mockingbird-001',
        categoryId: categories[0]!._id,
        description: 'A gripping tale of racial injustice and childhood innocence.',
        reviews: [
          { author: 'Alice Brown', rating: 5, text: 'One of the best books ever written!' }
        ]
      },
      {
        title: '1984',
        author: 'George Orwell',
        price: 9.99,
        imageUrl: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=400&fit=crop',
        sourceUrl: 'https://www.worldofbooks.com/1984',
        sourceId: '1984-001',
        categoryId: categories[0]!._id,
        description: 'Dystopian social science fiction novel and cautionary tale.',
        reviews: []
      },
      {
        title: 'Sapiens',
        author: 'Yuval Noah Harari',
        price: 12.99,
        imageUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=400&fit=crop',
        sourceUrl: 'https://www.worldofbooks.com/sapiens',
        sourceId: 'sapiens-001',
        categoryId: categories[1]!._id,
        description: 'A brief history of humankind exploring human evolution.',
        reviews: [
          { author: 'Bob Wilson', rating: 5, text: 'Mind-blowing perspective on human history!' }
        ]
      },
      {
        title: 'Educated',
        author: 'Tara Westover',
        price: 11.99,
        imageUrl: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=300&h=400&fit=crop',
        sourceUrl: 'https://www.worldofbooks.com/educated',
        sourceId: 'educated-001',
        categoryId: categories[1]!._id,
        description: 'A memoir about a young woman who grows up in a strict household.',
        reviews: [
          { author: 'Carol Davis', rating: 5, text: 'Incredibly inspiring story!' }
        ]
      },
      {
        title: 'Dune',
        author: 'Frank Herbert',
        price: 13.99,
        imageUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=300&h=400&fit=crop',
        sourceUrl: 'https://www.worldofbooks.com/dune',
        sourceId: 'dune-001',
        categoryId: categories[2]!._id,
        description: 'Epic science fiction novel set on the desert planet Arrakis.',
        reviews: [
          { author: 'Mike Johnson', rating: 5, text: 'Best sci-fi novel ever!' }
        ]
      },
      {
        title: 'The Martian',
        author: 'Andy Weir',
        price: 10.99,
        imageUrl: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=300&h=400&fit=crop',
        sourceUrl: 'https://www.worldofbooks.com/martian',
        sourceId: 'martian-001',
        categoryId: categories[2]!._id,
        description: 'An astronaut becomes stranded on Mars and must survive.',
        reviews: []
      },
      {
        title: 'Foundation',
        author: 'Isaac Asimov',
        price: 11.99,
        imageUrl: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300&h=400&fit=crop',
        sourceUrl: 'https://www.worldofbooks.com/foundation',
        sourceId: 'foundation-001',
        categoryId: categories[2]!._id,
        description: 'Classic science fiction about the fall and rise of civilizations.',
        reviews: [
          { author: 'Emma White', rating: 5, text: 'Brilliant masterpiece!' }
        ]
      },
      {
        title: 'Sherlock Holmes',
        author: 'Arthur Conan Doyle',
        price: 8.99,
        imageUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop',
        sourceUrl: 'https://www.worldofbooks.com/sherlock',
        sourceId: 'sherlock-001',
        categoryId: categories[3]!._id,
        description: 'The complete adventures of the famous detective.',
        reviews: []
      },
      {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        price: 14.99,
        imageUrl: 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=300&h=400&fit=crop',
        sourceUrl: 'https://www.worldofbooks.com/steve-jobs',
        sourceId: 'steve-jobs-001',
        categoryId: categories[4]!._id,
        description: 'The exclusive biography of Apple founder Steve Jobs.',
        reviews: [
          { author: 'Tom Anderson', rating: 5, text: 'Fascinating life story!' }
        ]
      }
    ]);
    console.log(`✅ Created ${products.length} products\n`);

    // Summary
    console.log('🎉 Database seeding completed!\n');
    console.log('📊 Summary:');
    console.log(`   Navigation: ${navItems.length}`);
    console.log(`   Categories: ${categories.length}`);
    console.log(`   Products: ${products.length}\n`);
    console.log('✅ You can now start the servers!');
    console.log('👉 Backend: npm run dev');
    console.log('👉 Frontend: npm run dev\n');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();