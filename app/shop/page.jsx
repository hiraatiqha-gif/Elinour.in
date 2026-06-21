"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import SearchBar from "@/components/Shop/SearchBar";
import FilterBar from "@/components/Shop/FilterBar";
import ProductGrid from "@/components/Shop/ProductGrid";
import { filterProducts } from "@/lib/productHelpers";
import styles from "@/components/Shop/shop.module.css";

export default function ShopPage() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    setSearchQuery(searchParams.get("search") || "");
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    return filterProducts({
      category: selectedCategory,
      tag: selectedTag,
      search: searchQuery,
      inStock: true,
    });
  }, [searchQuery, selectedCategory, selectedTag]);

  return (
    <div className={styles.shopContainer}>
      <div className={styles.shopHeader}>
        <h1 className={styles.shopTitle}>Our Collection</h1>
        <p className={styles.shopSubtitle}>
          Explore our curated selection of luxury jewelry pieces
        </p>
      </div>

      <SearchBar value={searchQuery} onSearch={setSearchQuery} />

      <FilterBar
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedTag={selectedTag}
        onTagChange={setSelectedTag}
      />

      <ProductGrid products={filteredProducts} />
    </div>
  );
}
