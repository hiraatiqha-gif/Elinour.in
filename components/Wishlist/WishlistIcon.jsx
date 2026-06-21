    "use client";

import Link from "next/link";
import { useWishlist } from "./WishlistProvider";
import styles from "../Cart/cart.module.css";

export default function WishlistIcon() {
  const { getTotalWishlisted } = useWishlist();
  const quantity = getTotalWishlisted();

  return (
    <Link href="/wishlist" className={styles.cartIcon} aria-label="Wishlist">
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
      {quantity > 0 && <span className={styles.badge}>{quantity}</span>}
    </Link>
  );
}