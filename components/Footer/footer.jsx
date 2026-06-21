import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        {/* More Links */}
        <div className={styles.linksColumn}>
          <h4 className={styles.columnHeading}>MORE</h4>
          <nav className={styles.navLinks}>
            <a href="/shop">Shop</a>
            <a href="/shipping">Shipping</a>
            <a href="/terms-of-service">Terms of Use</a>
            <a href="/return-refund-policy">Return & Refund Policy</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>

        {/* Contact */}
        <div className={styles.contactColumn}>
          <h4 className={styles.columnHeading}>CONTACT</h4>
          <div className={styles.contactInfo}>
            <p>Our team is here to help.</p>
            <p>Monday - Friday 10am-5pm IST</p>
          </div>
          <div className={styles.contactDetails}>
            <a href="mailto:elinour.in@gmail.com">elinour.in@gmail.com</a>
            <a href="tel:+919013289252">+91 90132 89252</a>
          </div>
          <div className={styles.storeLocation}>
            <p>
              <strong>Offline store location:</strong> Elixir pop up store, Shahpur Jat, Delhi
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className={styles.newsletterSection}>
        {/* Social Icons */}
        <div className={styles.socialIcons}>
          <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          <a href="https://instagram.com/elinour.in" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        
        <div className={styles.legalLinks}>
          <span>© 2026, Elinour</span>
          <span className={styles.dot}>·</span>
          <a href="/return-refund-policy">Refund policy</a>
          <span className={styles.dot}>·</span>
          <a href="/terms-of-service">Terms of service</a>
          <span className={styles.dot}>·</span>
          <a href="/shipping">Shipping policy</a>
          <span className={styles.dot}>·</span>
          <a href="/contact">Contact information</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;