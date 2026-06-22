"use client";
import Image from "next/image";
import styles from "./wornByCustomer.module.css";
import { HERO_SRCS } from "@/components/Hero/hero";

// All WhatsApp images — only use those NOT in the hero
const ALL_WHATSAPP = [
  "/products/customer_photo1.jpeg",
  "/products/customer_photo2.jpeg",
  "/products/WhatsApp Image 2026-05-31 at 15.47.52.jpeg",
  "/products/WhatsApp Image 2026-05-31 at 15.50.43 (1).jpeg",
  "/products/WhatsApp Image 2026-05-31 at 15.50.43.jpeg",
  "/products/WhatsApp Image 2026-05-31 at 15.50.50.jpeg",
  "/products/WhatsApp Image 2026-05-31 at 15.51.07.jpeg",
  "/products/WhatsApp Image 2026-05-31 at 15.51.08 (1).jpeg",
  "/products/WhatsApp Image 2026-05-31 at 16.06.39.jpeg",
  "/products/WhatsApp Image 2026-06-02 at 11.48.12.jpeg",
  // Fallback — portrait hero images if we still need more
  "/products/WhatsApp Image 2026-05-31 at 15.47.51 (1).jpeg",
  "/products/WhatsApp Image 2026-05-31 at 15.50.42.jpeg",
  "/products/WhatsApp Image 2026-05-31 at 15.50.53.jpeg",
];

// Prefer images not in the hero set; fall back if needed
const primaryPool = ALL_WHATSAPP.filter(s => !HERO_SRCS.has(s));
const fallback     = ALL_WHATSAPP.filter(s => HERO_SRCS.has(s));
const CUSTOMER_IMAGES = primaryPool.length >= 6
  ? primaryPool.slice(0, 9)
  : [...primaryPool, ...fallback].slice(0, 9);

export default function WornByCustomers() {
  if (CUSTOMER_IMAGES.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Real People, Real Style</span>
          <h2 className={styles.heading}>Worn By Our Customers</h2>
          <p className={styles.subheading}>
            Our jewellery, your story — tagged and shared with love.
          </p>
        </div>

        <div className={styles.grid}>
          {CUSTOMER_IMAGES.map((src, i) => (
            <div key={i} className={`${styles.tile} ${i === 0 ? styles.tileFeatured : ""}`}>
              <div className={styles.imageWrapper}>
                <Image
                  src={src}
                  alt={`Customer wearing Elinour jewellery ${i + 1}`}
                  fill
                  className={styles.image}
                  sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                />
                <div className={styles.hoverOverlay}>
                  <span className={styles.hoverTag}>#WearElinour</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaText}>Tag us on Instagram to be featured</p>
          <a
            href="https://instagram.com/elinour.in"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaLink}
          >
            @elinour.in →
          </a>
        </div>
      </div>
    </section>
  );
}