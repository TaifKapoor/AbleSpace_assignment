export interface Navigation {
  _id: string;
  title: string;
  slug: string;
  url: string;
}

export interface Category {
  _id: string;
  title: string;
  slug: string;
  url: string;
  navigationId: string;
}

export interface Product {
  _id: string;
  title: string;
  author?: string;
  price: number;
  imageUrl?: string;
  sourceUrl: string;
  sourceId: string;
  categoryId: string;
  description?: string;
  reviews?: Review[];
  relatedProducts?: string[];
}

export interface Review {
  author: string;
  rating: number;
  text: string;
}