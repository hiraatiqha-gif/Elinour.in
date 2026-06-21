"use client";

import { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within WishlistProvider");
  }
  return context;
};

function loadWishlist() {
  if (typeof window === "undefined") return [];
  try {
    const saved = localStorage.getItem("elinour_wishlist");
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("Failed to load wishlist:", error);
    return [];
  }
}

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(loadWishlist);

  useEffect(() => {
    localStorage.setItem("elinour_wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const isWishlisted = (productId) => wishlist.includes(productId);

  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((id) => id !== productId));
  };

  const getTotalWishlisted = () => wishlist.length;

  return (
    <WishlistContext.Provider
      value={{ wishlist, isWishlisted, toggleWishlist, removeFromWishlist, getTotalWishlisted }}
    >
      {children}
    </WishlistContext.Provider>
  );
};