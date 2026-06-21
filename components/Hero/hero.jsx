import Link from "next/link";
import Image from "next/image";
import styles from "./hero.module.css";
import img1 from '../../public/hero.png';

export default function Hero() {
  return (
    /*
      The <section> itself is position:relative with an explicit height.
      Next.js <Image fill> looks for the nearest positioned ancestor —
      that's the section. No wrapper div needed.
    */
    <section className={styles.hero}>

      <Image
        src={img1}
        alt="Elinour — Handcrafted lightweight Jewellery"
        fill
        className={styles.heroImage}
        priority
        sizes="100vw"
      />

      <div className={styles.overlay} />

      <div className={styles.content}>
        <span className={styles.eyebrow}>New Collection</span>
        <h1 className={styles.heading}>
          Wear the <em>Luxury.</em>
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