"use client";

import Link from "next/link";
import styles from "./shop.module.css";
import { formatPrice, getDiscountPercentage } from "@/lib/productHelpers";
import { useCart } from "@/components/Cart/CartProvider";
import { useWishlist } from "@/components/Wishlist/WishlistProvider";
import ImageWithFallback from "@/components/Shared/ImageWithFallback";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();

  const discountPercentage = getDiscountPercentage(
    product.price,
    product.comparePrice
  );

  const primaryImage = product.images && product.images.length > 0 ? product.images[0] : "/placeholder-product.svg";
  const wishlisted = isWishlisted(product.id);

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div className={styles.productCard}>
      <Link href={`/shop/${product.slug}`} className={styles.cardImageLink}>
        <div className={styles.imageWrapper}>
          <div className={styles.imagePlaceholder}>
            <ImageWithFallback
              src={primaryImage}
              alt={product.name}
              fill
              className={styles.image}
            />
          </div>

          <button
            type="button"
            className={`${styles.wishlistBtn} ${wishlisted ? styles.wishlistBtnActive : ""}`}
            onClick={handleWishlistClick}
            aria-label="Add to wishlist"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill={wishlisted ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>

          {discountPercentage > 0 && (
            <div className={styles.discount}>{discountPercentage}% OFF</div>
          )}

          {product.tags.includes("bestseller") && (
            <div className={styles.bestseller}>BESTSELLER</div>
          )}

          {product.tags.includes("new-arrival") && (
            <div className={styles.newArrival}>NEW</div>
          )}

          {product.tags.includes("ready-to-ship") && (
            <div className={styles.readyToShip}>READY TO SHIP</div>
          )}
        </div>

        <div className={styles.info}>
          <h3 className={styles.name}>{product.name}</h3>

          <div className={styles.priceSection}>
            <span className={styles.price}>{formatPrice(product.price)}</span>
            {product.comparePrice && (
              <span className={styles.comparePrice}>
                {formatPrice(product.comparePrice)}
              </span>
            )}
          </div>
          <p className={styles.taxNote}>MRP inclusive of all taxes</p>
          <p className={styles.shippingNote}>Shipping calculated at checkout</p>

          <div className={styles.metadata}>
            <span className={styles.category}>{product.category}</span>
            {product.customizable && (
              <span className={styles.customizable}>✓ Customizable</span>
            )}
          </div>
        </div>
      </Link>

      <button type="button" className={styles.addToCartBtn} onClick={handleAddToCart}>
        ADD TO CART
      </button>
    </div>
  );
}