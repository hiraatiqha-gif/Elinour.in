"use client";

import { useState } from "react";
import styles from "./product.module.css";

export default function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={styles.accordionItem}>
      <button
        type="button"
        className={styles.accordionHeader}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <span className={`${styles.accordionChevron} ${open ? styles.accordionChevronOpen : ""}`}>
          <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
      {open && <div className={styles.accordionBody}>{children}</div>}
    </div>
  );
}