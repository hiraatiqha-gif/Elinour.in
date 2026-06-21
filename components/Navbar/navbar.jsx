"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CartIcon from "../Cart/CartIcon";
import WishlistIcon from "../Wishlist/WishlistIcon";
import styles from "./navbar.module.css";
import img from '../../public/elinour.jpeg';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const router = useRouter();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = searchValue.trim();
    if (query) {
      router.push(`/shop?search=${encodeURIComponent(query)}`);
      setSearchOpen(false);
      setSearchValue("");
    }
  };

  const handleSearchIconClick = () => {
    const query = searchValue.trim();
    if (searchOpen && query) {
      router.push(`/shop?search=${encodeURIComponent(query)}`);
      setSearchOpen(false);
      setSearchValue("");
      return;
    }
    setSearchOpen((open) => !open);
  };

  return (
    <header className={styles.header}>
      <div className={styles.announcementBar}>
        <p>
          Build your look ✨ <strong> 10% off on orders worth ₹5000 and above</strong> | Limited time
          | Auto-applied at Delivery ♡ <span className={styles.arrow}>→</span>
        </p>
      </div>

      <nav className={styles.navbar}>
        <div className={styles.navLeft}>
          <form className={styles.searchForm} onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search products..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className={`${styles.searchExpandInput} ${searchOpen ? styles.inputOpen : ""}`}
            />
            <button
              type="button"
              className={styles.iconBtn}
              aria-label="Search"
              onClick={handleSearchIconClick}
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </form>
        </div>

        <div className={styles.navCenter}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src={img}
              alt="Elinour"
              width={120}
              height={60}
              className={styles.logo}
              priority
            />
          </Link>
        </div>

        <div className={styles.navRight}>
          <button className={styles.iconBtn} aria-label="Account">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>

          <WishlistIcon />

          <CartIcon />

          <button
            className={styles.hamburger}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>
      </nav>

      <div className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ""}`}>
        <Link href="/" className={`${styles.navLink} ${styles.active}`}>
          Home
        </Link>

        <div className={styles.dropdown}>
          <button
            type="button"
            className={styles.navLink}
            onClick={() => setShopDropdownOpen((open) => !open)}
          >
            Shop
            <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div className={`${styles.dropdownMenu} ${shopDropdownOpen ? styles.dropdownMenuOpen : ""}`}>
            <Link href="/shop" className={styles.dropdownItem}>All Products</Link>
            <Link href="/shop?tag=new-arrival" className={styles.dropdownItem}>New Arrivals</Link>
            <Link href="/shop?category=earrings" className={styles.dropdownItem}>Earrings</Link>
            <Link href="/shop?category=necklaces" className={styles.dropdownItem}>Necklaces</Link>
            <Link href="/shop?category=bracelets" className={styles.dropdownItem}>Bracelets</Link>
            <Link href="/shop?tag=bestseller" className={styles.dropdownItem}>Best Sellers</Link>
            <Link href="/shop?tag=ready-to-ship" className={styles.dropdownItem}>Ready to Ship</Link>
          </div>
        </div>

        <Link href="/cart" className={styles.navLink}>Cart</Link>

        <Link href="/contact" className={styles.navLink}>Contact</Link>
      </div>

      <div className={styles.tagline}>
        Elinour &nbsp;·&nbsp; Handcrafted Lightweight Jewellery
      </div>
    </header>
  );
}