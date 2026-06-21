"use client";

import Link from "next/link";
import { useWishlist } from "@/components/Wishlist/WishlistProvider";
import ProductGrid from "@/components/Shop/ProductGrid";
import { getAllProducts } from "@/lib/productHelpers";
import styles from "@/components/Shop/shop.module.css";

export default function WishlistPage() {
  const { wishlist } = useWishlist();
  const allProducts = getAllProducts();
  const wishlistedProducts = allProducts.filter((p) => wishlist.includes(p.id));

  return (
    <div className={styles.shopContainer}>
      <div className={styles.shopHeader}>
        <h1 className={styles.shopTitle}>Your Wishlist</h1>
        <p className={styles.shopSubtitle}>
          {wishlistedProducts.length > 0
            ? "Pieces you've saved for later"
            : "You haven't saved anything yet"}
        </p>
      </div>

      {wishlistedProducts.length > 0 ? (
        <ProductGrid products={wishlistedProducts} />
      ) : (
        <div className={styles.noProducts}>
          <p>
            Browse the{" "}
            <Link href="/shop" style={{ color: "#7c5cbf", fontWeight: 600 }}>
              shop
            </Link>{" "}
            and tap the heart on anything you love to save it here.
          </p>
        </div>
      )}
    </div>
  );
}