"use client";

import { getCategories } from "@/lib/productHelpers";
import styles from "./shop.module.css";

export default function FilterBar({
  selectedCategory,
  onCategoryChange,
  selectedTag,
  onTagChange,
}) {
  const categories = getCategories();

  return (
    <div className={styles.filterBar}>
      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Category</label>
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className={styles.filterSelect}
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.filterLabel}>Filter By</label>
        <select
          value={selectedTag}
          onChange={(e) => onTagChange(e.target.value)}
          className={styles.filterSelect}
        >
          <option value="">All Products</option>
          <option value="bestseller">Bestsellers</option>
          <option value="new-arrival">New Arrivals</option>
          <option value="ready-to-ship">Ready to Ship</option>
        </select>
      </div>
    </div>
  );
}
