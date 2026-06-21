"use client";

import ProductCard from "./ProductCard";
import styles from "./shop.module.css";

export default function ProductGrid({ products }) {
  if (products.length === 0) {
    return (
      <div className={styles.noProducts}>
        <p>No products found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className={styles.productGrid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
