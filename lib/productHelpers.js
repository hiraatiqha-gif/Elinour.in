import { products } from "@/data/shopdata";

/**
 * Get all products
 */
export const getAllProducts = () => products;

/**
 * Get product by slug
 */
export const getProductBySlug = (slug) => {
  return products.find((product) => product.slug === slug);
};

/**
 * Get product by ID
 */
export const getProductById = (id) => {
  return products.find((product) => product.id === id);
};

/**
 * Get all categories
 */
export const getCategories = () => {
  const categories = new Set(products.map((p) => p.category));
  return Array.from(categories).sort();
};

/**
 * Get subcategories for a category
 */
export const getSubcategories = (category) => {
  const subcats = new Set(
    products
      .filter((p) => p.category === category)
      .map((p) => p.subcategory)
  );
  return Array.from(subcats).sort();
};

/**
 * Filter products by category
 */
export const getProductsByCategory = (category) => {
  return products.filter((product) => product.category === category);
};

/**
 * Filter products by tag
 */
export const getProductsByTag = (tag) => {
  return products.filter((product) => product.tags.includes(tag));
};

/**
 * Get bestseller products
 */
export const getBestsellers = () => {
  return products.filter((product) => product.tags.includes("bestseller"));
};

/**
 * Get ready-to-ship products
 */
export const getReadyToShip = () => {
  return products.filter((product) => product.tags.includes("ready-to-ship"));
};

/**
 * Get featured products
 */
export const getFeatured = () => {
  return products.filter((product) => product.featured);
};

/**
 * Search products by name or description
 */
export const searchProducts = (query) => {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.shortDescription.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery)
  );
};

/**
 * Filter products with multiple criteria
 */
export const filterProducts = ({ category, tag, search, inStock = true }) => {
  let filtered = products;

  if (category) {
    filtered = filtered.filter((p) => p.category === category);
  }

  if (tag) {
    filtered = filtered.filter((p) => p.tags.includes(tag));
  }

  if (search) {
    const lowerSearch = search.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(lowerSearch) ||
        p.shortDescription.toLowerCase().includes(lowerSearch)
    );
  }

  if (inStock) {
    filtered = filtered.filter((p) => p.inStock);
  }

  return filtered;
};

/**
 * Get related products (same category)
 */
export const getRelatedProducts = (productId, limit = 4) => {
  const product = getProductById(productId);
  if (!product) return [];

  return products
    .filter((p) => p.category === product.category && p.id !== productId)
    .slice(0, limit);
};

/**
 * Generate SEO metadata for a product
 */
export const generateProductMeta = (product) => {
  return {
    title: `${product.name} | Luxury Jewelry`,
    description: product.shortDescription || product.description.substring(0, 160),
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [
        {
          url: product.images[0],
          width: 800,
          height: 800,
          alt: product.name,
        },
      ],
    },
  };
};

/**
 * Format price as Indian Rupee
 */
export const formatPrice = (price) => {
  return `₹${price.toLocaleString("en-IN")}`;
};

/**
 * Calculate discount percentage
 */
export const getDiscountPercentage = (price, comparePrice) => {
  if (!comparePrice) return 0;
  return Math.round(((comparePrice - price) / comparePrice) * 100);
};
