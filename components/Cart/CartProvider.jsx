"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};

function loadCart() {
  if (typeof window === "undefined") return [];
  try {
    const saved = localStorage.getItem("jewelry_cart");
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("Failed to load cart:", error);
    return [];
  }
}

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(loadCart);

  useEffect(() => {
    localStorage.setItem("jewelry_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prevCart,
        {
          id: product.id,
          name: product.name,
          slug: product.slug,
          image: product.images[0],
          price: product.price,
          quantity,
        },
      ];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const getTotalQuantity = () =>
    cart.reduce((total, item) => total + item.quantity, 0);

  const getSubtotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalQuantity,
    getSubtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};