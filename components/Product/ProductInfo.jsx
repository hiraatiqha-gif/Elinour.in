"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/Cart/CartProvider";
import { useWishlist } from "@/components/Wishlist/WishlistProvider";
import { formatPrice, getDiscountPercentage } from "@/lib/productHelpers";
import AccordionItem from "./AccordionItem";
import styles from "./product.module.css";

// WhatsApp ordering removed from product page; cart checkout still supports WhatsApp

const COLOUR_OPTIONS = [
  "Blush Pink",
  "Ivory White",
  "Sage Green",
  "Dusty Rose",
  "Lavender",
  "Mint",
];

export default function ProductInfo({ product }) {
  const { addToCart } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();

  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [selectedColour, setSelectedColour] = useState("");

  const discountPercentage = getDiscountPercentage(
    product.price,
    product.comparePrice
  );

  const wishlisted = isWishlisted(product.id);
  const isResinProduct = product.materials?.some((material) =>
    material.toLowerCase().includes("resin")
  );
  const whatsappNumber = "919013289252";
  const whatsappCustomizeUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hi, I would like to customise the resin piece: ${product.name}`
  )}`;
  const showColourCustomisation = product.customizable && !isResinProduct;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
    window.location.href = "/cart";
  };

  return (
    <div className={styles.info}>
      <div className={styles.header}>
        <h1 className={styles.title}>{product.name}</h1>
        <p className={styles.category}>Category: {product.category}</p>
      </div>

      {discountPercentage > 0 && (
        <div className={styles.discountBanner}>
          Save {discountPercentage}% - Limited time offer
        </div>
      )}

      <div className={styles.priceSection}>
        <span className={styles.price}>{formatPrice(product.price)}</span>
        {product.comparePrice && (
          <span className={styles.comparePrice}>
            {formatPrice(product.comparePrice)}
          </span>
        )}
      </div>
      <p className={styles.taxNote}>MRP inclusive of all taxes</p>
      <Link href="/shipping-policy" className={styles.shippingLink}>
        Shipping calculated at checkout
      </Link>

      <p className={styles.description}>{product.description}</p>

      <div className={styles.specs}>
        {product.materials && product.materials.length > 0 && (
          <div className={styles.spec}>
            <label>Materials:</label>
            <span>{product.materials.join(", ")}</span>
          </div>
        )}
        {product.size && (
          <div className={styles.spec}>
            <label>Size:</label>
            <span>{product.size}</span>
          </div>
        )}
        {product.weight && (
          <div className={styles.spec}>
            <label>Weight:</label>
            <span>{product.weight}</span>
          </div>
        )}
        <div className={styles.spec}>
          <label>Availability:</label>
          <span className={product.inStock ? styles.inStock : styles.outOfStock}>
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      </div>

      {showColourCustomisation && (
        <div className={styles.colourSection}>
          <label htmlFor="colour" className={styles.colourLabel}>
            Colour customisation (optional):
          </label>
          <select
            id="colour"
            className={styles.colourSelect}
            value={selectedColour}
            onChange={(e) => setSelectedColour(e.target.value)}
          >
            <option value="">As shown / no preference</option>
            {COLOUR_OPTIONS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <p className={styles.colourNote}>
            Regular customised orders can take up to 2–3 weeks to ship.
          </p>
        </div>
      )}

      {/* Urgent order option removed from product page */}

      <div className={styles.quantitySection}>
        <label htmlFor="quantity">Quantity:</label>
        <div className={styles.quantityControl}>
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className={styles.qtyBtn}
            disabled={quantity === 1}
          >
            −
          </button>
          <input
            id="quantity"
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            className={styles.qtyInput}
          />
          <button onClick={() => setQuantity(quantity + 1)} className={styles.qtyBtn}>
            +
          </button>
        </div>
      </div>

      <div className={styles.actions}>
        <button
          onClick={handleAddToCart}
          className={`${styles.addToCartBtn} ${addedToCart ? styles.added : ""}`}
          disabled={!product.inStock}
        >
          {addedToCart ? "✓ Added to Cart" : "Add to Cart"}
        </button>
        <button onClick={handleBuyNow} className={styles.buyNowBtn} disabled={!product.inStock}>
          Buy it now
        </button>
      </div>

      {isResinProduct && (
        <a
          href={whatsappCustomizeUrl}
          target="_blank"
          rel="noreferrer"
          className={styles.customizeButton}
        >
          Connect via WhatsApp for custom orders
        </a>
      )}

      <button
        type="button"
        className={`${styles.wishlistLink} ${wishlisted ? styles.wishlistLinkActive : ""}`}
        onClick={() => toggleWishlist(product.id)}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill={wishlisted ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
        {wishlisted ? "Added to wishlist" : "Add to wishlist"}
      </button>

      {/* Order via WhatsApp removed from product page */}

      <div className={styles.accordionWrap}>
        {/* 'About this piece' removed - description already shown above */}

        <AccordionItem title="Shipping within India">
          <ul>
            <li>Shipping charge of ₹150 on all domestic orders.</li>
            <li>Free shipping on orders worth ₹2,500 and above.</li>
            <li>Domestic orders take 3–10 days to deliver once dispatched.</li>
            <li>Custom orders take 2–3 weeks in the making and delivery.</li>
          </ul>
        </AccordionItem>

        <AccordionItem title="International Shipping">
          <ul>
            <li>Complimentary shipping on international orders over ₹50,000.</li>
            <li>For orders under ₹50,000, a flat fee of ₹4,500 applies.</li>
            <li>International orders are mostly delivered within 4–10 business days post dispatch.</li>
          </ul>
        </AccordionItem>

        <AccordionItem title="Care Instructions">
          <ul>
            <li>All our pieces are handcrafted with resin and are fragile.</li>
            <li>Our collection is crafted with adjustable elements which can be manually adjusted as per your liking.</li>
            <li>Please avoid contact with direct water and perfume.</li>
            <li>Store in a cool, dry place.</li>
          </ul>
        </AccordionItem>

        <AccordionItem title="More Details">
          <div className={styles.specs}>
            {product.materials && product.materials.length > 0 && (
              <div className={styles.spec}>
                <label>Material:</label>
                <span>{product.materials.join(", ")}</span>
              </div>
            )}
            {product.size && (
              <div className={styles.spec}>
                <label>Size:</label>
                <span>{product.size}</span>
              </div>
            )}
            {product.weight && (
              <div className={styles.spec}>
                <label>Weight:</label>
                <span>{product.weight}</span>
              </div>
            )}
            <div className={styles.spec}>
              <label>Pack Size:</label>
              <span>1</span>
            </div>
          </div>
        </AccordionItem>
      </div>

      <div className={styles.tags}>
        {product.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            #{tag.replace("-", " ")}
          </span>
        ))}
      </div>
    </div>
  );
}