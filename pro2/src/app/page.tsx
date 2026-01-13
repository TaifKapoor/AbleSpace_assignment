'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getNavigation, scrapeNavigation } from '@/lib/api';
import { Navigation } from '@/types';

export default function HomePage() {
  const [navigation, setNavigation] = useState<Navigation[]>([]);
  const [loading, setLoading] = useState(true);
  const [scraping, setScraping] = useState(false);

  useEffect(() => {
    fetchNavigation();
  }, []);

  const fetchNavigation = async () => {
    try {
      const data = await getNavigation();
      setNavigation(data.data || []);
    } catch (error) {
      console.error('Error fetching navigation:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleScrape = async () => {
    if (scraping) return;
    setScraping(true);
    try {
      await scrapeNavigation();
      alert('Navigation scraped successfully!');
      fetchNavigation();
    } catch (error) {
      console.error('Error scraping:', error);
      alert('Error scraping navigation');
    } finally {
      setScraping(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to Product Explorer
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Browse books from World of Books
          </p>
          
          {navigation.length === 0 && (
            <button
              onClick={handleScrape}
              disabled={scraping}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
            >
              {scraping ? 'Scraping...' : '🔄 Scrape Navigation'}
            </button>
          )}
        </div>

        {/* Navigation Grid */}
        {navigation.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {navigation.map((nav) => (
              <Link
                key={nav._id}
                href={`/categories/${nav.slug}`}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-200"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {nav.title}
                </h2>
                <p className="text-blue-600 font-medium">
                  Browse →
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500">
            <p className="text-lg">No navigation items found.</p>
            <p className="mt-2">Click the button above to scrape data from World of Books.</p>
          </div>
        )}
      </div>
    </div>
  );
}