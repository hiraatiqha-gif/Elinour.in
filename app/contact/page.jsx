import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact | Elinour",
  description: "Get in touch with Elinour — contact, WhatsApp and business hours.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.heading}>Contact</h1>
          <p className={styles.lead}>
            We’re happy to help — reach out for order queries, styling help, or custom requests.
          </p>

          <div className={styles.cardGroup}>
            <div className={styles.card}>
              <h2>Email</h2>
              <p>
                For general enquiries and order support, email us at <a href="mailto:elinour.in@gmail.com">elinour.in@gmail.com</a>
              </p>
            </div>

            <div className={styles.card}>
              <h2>WhatsApp</h2>
              <p>
                Message us on WhatsApp: <a href="https://wa.me/919013289252">+91 90132 89252</a>
              </p>
            </div>

            <div className={styles.card}>
              <h2>Business Hours</h2>
              <p>Monday — Friday, 10:00 AM — 5:00 PM IST</p>
            </div>
          </div>

          <p className={styles.note}>
            For faster support regarding an existing order, please include your order number and a short description of the issue.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
