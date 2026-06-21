"use client";

import { useState, useEffect } from "react";
import styles from "./reviews.module.css";

const sampleReviews = [
  { name: "Verified Buyer", text: "Everyone loved my haldi jewellery. It was exactly what I imagined for my outfit.", rating: 5 },
  { name: "Verified Buyer", text: "I got so many compliments. Thank you for designing it exactly how I wanted it to be.", rating: 5 },
  { name: "Verified Buyer", text: "The jewellery enhanced my look and received countless compliments. Truly beautiful work.", rating: 5 },
  { name: "Verified Buyer", text: "The color was perfect and every detail matched my specifications. Absolutely thrilled.", rating: 5 },
  { name: "Verified Buyer", text: "I felt like a princess. My friends and relatives loved it and I've been recommending your page.", rating: 5 },
  { name: "Verified Buyer", text: "The accessories were mesmerizing. Everyone at the event kept asking where I got them from.", rating: 5 },
  { name: "Verified Buyer", text: "Worth the wait. The jewellery was even more beautiful in person than I expected.", rating: 5 },
  { name: "Verified Buyer", text: "First time trying the hair accessories and they were too good. Loved every piece.", rating: 5 },
  { name: "Verified Buyer", text: "Got many compliments on the masterpiece. The craftsmanship is absolutely wonderful.", rating: 5 },
  { name: "Verified Buyer", text: "I received the package today and it was literally everything I had imagined. Thank you so much.", rating: 5 },
];

function Stars({ count = 5 }) {
  return (
    <div className={styles.stars} aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className={styles.star}>
          <path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.557L18.834 24 12 19.897 5.166 24l1.134-8.693L.6 9.75l7.732-1.732z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 640px)");

    const applyItemsPerPage = () => {
      setItemsPerPage(mql.matches ? 1 : 3);
      setCurrentIndex(0);
    };

    applyItemsPerPage();
    mql.addEventListener("change", applyItemsPerPage);
    return () => mql.removeEventListener("change", applyItemsPerPage);
  }, []);

  const totalPages = Math.ceil(sampleReviews.length / itemsPerPage);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const startIndex = currentIndex * itemsPerPage;
  const visibleReviews = sampleReviews.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className={styles.reviewsSection} aria-labelledby="reviews-heading">
      <div className={styles.container}>
        <h2 id="reviews-heading" className={styles.heading}>What our customers say</h2>

        <div className={styles.sliderWrapper}>
          <button onClick={handlePrevious} className={styles.navButton} aria-label="Previous reviews">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className={styles.sliderTrack}>
            {visibleReviews.map((r, i) => (
              <div className={styles.card} key={startIndex + i}>
                <Stars count={r.rating} />
                <p className={styles.text}>&ldquo;{r.text}&rdquo;</p>
                <p className={styles.name}>— {r.name}</p>
              </div>
            ))}
          </div>

          <button onClick={handleNext} className={styles.navButton} aria-label="Next reviews">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <div className={styles.dots}>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === currentIndex ? styles.active : ""}`}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}