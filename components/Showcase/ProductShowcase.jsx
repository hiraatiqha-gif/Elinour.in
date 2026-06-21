import Link from "next/link";
import ImageWithFallback from "@/components/Shared/ImageWithFallback";
import { formatPrice } from "@/lib/productHelpers";
import styles from "./showcase.module.css";

export default function ProductShowcase({ title, products, badgeLabel, alt = false }) {
  if (!products || products.length === 0) return null;

  return (
    <section className={`${styles.section} ${alt ? styles.sectionAlt : ""}`}>
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <h2 className={styles.heading}>{title}</h2>
          <Link href="/shop" className={styles.viewAll}>
            View All →
          </Link>
        </div>

        <div className={styles.grid}>
          {products.map((product) => {
            const image =
              product.images && product.images.length > 0
                ? product.images[0]
                : "/placeholder-product.svg";

            return (
              <Link
                href={`/shop/${product.slug}`}
                className={styles.card}
                key={product.id}
              >
                <div className={styles.imageWrapper}>
                  {badgeLabel && <span className={styles.badge}>{badgeLabel}</span>}
                  <ImageWithFallback
                    src={image}
                    alt={product.name}
                    fill
                    className={styles.image}
                  />
                </div>
                <h3 className={styles.cardName}>{product.name}</h3>
                <span className={styles.cardPrice}>{formatPrice(product.price)}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
