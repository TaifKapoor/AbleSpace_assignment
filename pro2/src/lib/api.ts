import axios from 'axios';

const api = axios.create({
  baseURL: "https://ablespace-assignment-x2z2.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

// Navigation API
export const getNavigation = async () => {
  const response = await api.get('/navigation');
  return response.data;
};

// Categories API
export const getCategories = async () => {
  const response = await api.get('/categories');
  return response.data;
};

export const getCategoryBySlug = async (slug: string) => {
  const response = await api.get(`/categories/${slug}`);
  return response.data;
};

// Products API
export const getProducts = async (page = 1, limit = 20) => {
  const response = await api.get(`/products?page=${page}&limit=${limit}`);
  return response.data;
};

export const getProductsByCategory = async (categoryId: string) => {
  const response = await api.get(`/products/category/${categoryId}`);
  return response.data;
};

export const getProductById = async (id: string) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

// Scrape API
export const scrapeNavigation = async () => {
  const response = await api.post('/scrape/navigation');
  return response.data;
};

export const scrapeCategories = async (navigationId: string) => {
  const response = await api.post('/scrape/categories', { navigationId });
  return response.data;
};

export const scrapeProducts = async (categoryId: string) => {
  const response = await api.post('/scrape/products', { categoryId });
  return response.data;
};