"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/Cart/CartProvider";
import { formatPrice } from "@/lib/productHelpers";
import styles from "./cart.module.css";

const WHATSAPP_NUMBER = "+919013289252";
const FREE_SHIPPING_THRESHOLD = 2500;

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getSubtotal, clearCart } =
    useCart();
  const [urgentOrder, setUrgentOrder] = useState(false);

  const subtotal = getSubtotal();
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progressPercent = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  const handleCheckout = () => {
    if (cart.length === 0) return;

    const itemsList = cart
      .map((item) => `• ${item.name} x${item.quantity} - ${formatPrice(item.price * item.quantity)}`)
      .join("\n");

    const urgentLine = urgentOrder
      ? "\n\n⚡ URGENT ORDER — please advise if expedited dispatch is possible."
      : "";

    const message = `Hello, I'd like to place an order.\n\nItems:\n${itemsList}${urgentLine}\n\nTotal: ${formatPrice(subtotal)}\n\nCustomer Name:\nPhone Number:`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  if (cart.length === 0) {
    return (
      <div className={styles.cartContainer}>
        <div className={styles.emptyCart}>
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          <h1>Your Cart is Empty</h1>
          <p>Add some beautiful jewelry pieces to get started!</p>
          <Link href="/shop" className={styles.continueShoppingBtn}>
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.title}>Shopping Cart</h1>

      <div className={styles.shippingProgress}>
        {remainingForFreeShipping > 0 ? (
          <p className={styles.shippingProgressText}>
            Add <strong>{formatPrice(remainingForFreeShipping)}</strong> more to unlock{" "}
            <strong>free shipping</strong>
          </p>
        ) : (
          <p className={styles.shippingProgressText}>
            🎉 You&apos;ve unlocked <strong>free shipping</strong> on this order!
          </p>
        )}
        <div className={styles.shippingProgressTrack}>
          <div
            className={styles.shippingProgressFill}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      <div className={styles.cartContent}>
        <div className={styles.cartItems}>
          {cart.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <div className={styles.itemDetails}>
                <Link
                  href={`/shop/${item.slug}`}
                  className={styles.itemName}
                >
                  {item.name}
                </Link>
                <p className={styles.itemPrice}>{formatPrice(item.price)}</p>
              </div>

              <div className={styles.quantityControl}>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className={styles.qtyBtn}
                  disabled={item.quantity === 1}
                >
                  −
                </button>
                <span className={styles.quantity}>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className={styles.qtyBtn}
                >
                  +
                </button>
              </div>

              <div className={styles.itemTotal}>
                {formatPrice(item.price * item.quantity)}
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className={styles.removeBtn}
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className={styles.cartSummary}>
          <h2>Order Summary</h2>

          <div className={styles.summaryRow}>
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>

          <div className={styles.summaryRow}>
            <span>Total Items</span>
            <span>{cart.reduce((total, item) => total + item.quantity, 0)}</span>
          </div>

          <div className={styles.summaryRow}>
            <span>Shipping</span>
            <span>{remainingForFreeShipping > 0 ? "₹150 (domestic)" : "Free"}</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.totalRow}>
            <span>Total</span>
            <span>{formatPrice(subtotal)}</span>
          </div>

          <label className={styles.urgentNote}>
            <input
              type="checkbox"
              checked={urgentOrder}
              onChange={(e) => setUrgentOrder(e.target.checked)}
            />
            <span>This is an urgent order — please prioritise dispatch</span>
          </label>

          <button
            onClick={handleCheckout}
            className={styles.checkoutBtn}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.588-2.35 1.541-3.107 2.694-1.594 2.429-1.594 5.75.212 8.179 1.806 2.429 5.064 3.622 8.041 2.929 2.977-.693 5.139-3.205 5.745-6.218.303-1.561.097-3.185-.668-4.59-.765-1.405-2.028-2.486-3.525-3.012a9.87 9.87 0 00-2.44-.323M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z" />
            </svg>
            Checkout via WhatsApp
          </button>

          <button
            onClick={() => clearCart()}
            className={styles.clearBtn}
          >
            Clear Cart
          </button>

          <Link href="/shop" className={styles.continueShoppingBtn}>
            Continue Shopping
          </Link>

          <div className={styles.policyLinks}>
            <Link href="/shipping-policy">Shipping Policy</Link>
            <Link href="/return-refund-policy">Returns &amp; Refunds</Link>
            <Link href="/terms-of-service">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </div>
  );
}