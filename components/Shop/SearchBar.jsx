"use client";

import styles from "./shop.module.css";

export default function SearchBar({ value, onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  const handleClear = () => {
    onSearch("");
  };

  return (
    <div className={styles.searchBar}>
      <svg
        className={styles.searchIcon}
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
      <input
        type="text"
        placeholder="Search products by name..."
        value={value}
        onChange={handleChange}
        className={styles.searchInput}
      />
      {value && (
        <button onClick={handleClear} className={styles.clearBtn}>
          ✕
        </button>
      )}
    </div>
  );
}
