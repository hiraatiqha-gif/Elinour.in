"use client";

import ProductCard from "@/components/Shop/ProductCard";
import { getRelatedProducts } from "@/lib/productHelpers";
import styles from "./product.module.css";

export default function RelatedProducts({ productId }) {
  const relatedProducts = getRelatedProducts(productId, 4);

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className={styles.relatedSection}>
      <h2 className={styles.relatedTitle}>Related Products</h2>
      <div className={styles.relatedGrid}>
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
