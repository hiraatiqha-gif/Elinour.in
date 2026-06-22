"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import styles from "./hero.module.css";

const ALL_WHATSAPP_IMAGES = [
  { src: "/products/WhatsApp Image 2026-05-31 at 15.51.01.jpeg",     orient: "landscape" },
  { src: "/products/WhatsApp Image 2026-05-31 at 15.47.51 (1).jpeg", orient: "portrait" },
  { src: "/products/WhatsApp Image 2026-05-31 at 15.47.51.jpeg",      orient: "portrait" },
  { src: "/products/WhatsApp Image 2026-05-31 at 15.50.42.jpeg",      orient: "portrait" },
  { src: "/products/WhatsApp Image 2026-05-31 at 15.50.51 (1).jpeg",  orient: "portrait" },
  { src: "/products/WhatsApp Image 2026-05-31 at 15.50.53.jpeg",      orient: "portrait" },
  { src: "/products/WhatsApp Image 2026-05-31 at 15.50.54.jpeg",      orient: "portrait" },
  { src: "/products/WhatsApp Image 2026-05-31 at 15.50.55.jpeg",      orient: "portrait" },
  { src: "/products/WhatsApp Image 2026-05-31 at 15.50.58 (1).jpeg",  orient: "portrait" },
  { src: "/products/WhatsApp Image 2026-05-31 at 15.51.00.jpeg",      orient: "portrait" },
  { src: "/products/WhatsApp Image 2026-05-31 at 15.51.01 (1).jpeg",  orient: "portrait" },
  { src: "/products/WhatsApp Image 2026-05-31 at 15.51.11 (1).jpeg",  orient: "portrait" },
  { src: "/products/WhatsApp Image 2026-05-31 at 15.51.11 (2).jpeg",  orient: "portrait" },
  { src: "/products/WhatsApp Image 2026-05-31 at 15.51.12 (2).jpeg",  orient: "portrait" },
  { src: "/products/WhatsApp Image 2026-05-31 at 15.51.15 (2).jpeg",  orient: "portrait" },
  { src: "/products/WhatsApp Image 2026-06-02 at 11.48.12 (1).jpeg",  orient: "portrait" },
  { src: "/products/WhatsApp Image 2026-06-02 at 11.49.40.jpeg",      orient: "portrait" },
  { src: "/products/WhatsApp Image 2026-05-31 at 16.06.38 (1).jpeg",  orient: "portrait" },
];

const HERO_IMAGES = [
  ...ALL_WHATSAPP_IMAGES.filter(i => i.orient === "landscape"),
  ...ALL_WHATSAPP_IMAGES.filter(i => i.orient === "portrait").slice(0, 5),
].slice(0, 7);

export const HERO_SRCS = new Set(HERO_IMAGES.map(i => i.src));

const INTERVAL = 4500;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((next) => {
    if (fading) return;
    setPrev(current);
    setCurrent(next);
    setFading(true);
    setTimeout(() => {
      setPrev(null);
      setFading(false);
    }, 900);
  }, [current, fading]);

  useEffect(() => {
    const id = setInterval(() => {
      goTo((current + 1) % HERO_IMAGES.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, [current, goTo]);

  return (
    <section className={styles.hero}>

      {/* ── DESKTOP: static hero image ── */}
      <div className={styles.desktopHero}>
        <Image
          src="/hero.png"
          alt="Elinour — Handcrafted lightweight Jewellery"
          fill
          quality={100}
          className={styles.heroImage}
          priority
          sizes="100vw"
        />
      </div>

      {/* ── MOBILE: carousel ── */}
      <div className={styles.mobileCarousel}>
        {prev !== null && (
          <div className={`${styles.slide} ${styles.slideOut}`} key={`prev-${prev}`}>
            <Image
              src={HERO_IMAGES[prev].src}
              alt="Elinour jewellery"
              fill
              quality={100}
              className={styles.heroImageMobile}
              sizes="100vw"
            />
          </div>
        )}
        <div className={`${styles.slide} ${styles.slideIn}`} key={`curr-${current}`}>
          <Image
            src={HERO_IMAGES[current].src}
            alt="Elinour — Handcrafted lightweight Jewellery"
            fill
            quality={100}
            className={styles.heroImageMobile}
            priority={current === 0}
            sizes="100vw"
          />
        </div>
        <div className={styles.dots}>
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className={styles.overlay} />

      <div className={styles.content}>
        <span className={styles.eyebrow}>New Collection</span>
        <h1 className={styles.heading}>
          Your Vision, Our <em>Craft.</em>
        </h1>
        <p className={styles.subtext}>
          We turn your Jewellery dreams into reality.
        </p>
        <div className={styles.actions}>
          <Link href="/shop" className={styles.btnPrimary}>Shop Now</Link>
          <Link href="/shop" className={styles.btnSecondary}>View Lookbook</Link>
        </div>
      </div>

    </section>
  );
}