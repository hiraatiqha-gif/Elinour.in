import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";
import styles from "./shipping.module.css";

export const metadata = {
  title: "Shipping | Elinour",
  description: "Shipping policy, delivery timelines, and international shipping details for Elinour.",
};

const sections = [
  {
    title: "Domestic Shipping",
    body: (
      <>
        <p>We charge a flat shipping fee of <strong>INR 150</strong> for all domestic orders under INR 2,500.</p>
        <p>Domestic orders worth <strong>INR 2,500 and above qualify for free shipping</strong>.</p>
        <p>Delivery timelines are approximately <strong>3–10 days</strong> once the order is dispatched.</p>
      </>
    ),
  },
  {
    title: "Custom Orders",
    body: (
      <>
        <p>Regular customised orders take up to <strong>2–3 weeks</strong> to make and ship.</p>
        <p>Urgent order requests are available — please contact us on WhatsApp before placing the order to confirm timing and availability.</p>
      </>
    ),
  },
  {
    title: "International Shipping",
    body: (
      <>
        <p>International orders over <strong>INR 50,000</strong> receive complimentary shipping.</p>
        <p>Orders under INR 50,000 are charged a flat shipping fee of <strong>INR 4,500</strong>.</p>
        <p>International orders are typically delivered within <strong>4–10 business days</strong> after dispatch.</p>
        <p>Elinour is not responsible for delivery delays caused by natural occurrences, air or ground transportation strikes, customs delays, extra carrier fees, or other charges once the package has exited India.</p>
      </>
    ),
  },
  {
    title: "Care Instructions",
    body: (
      <>
        <ul>
          <li>All our pieces are handcrafted with resin and are fragile.</li>
          <li>Our collection includes adjustable elements that can be manually adjusted to suit you.</li>
          <li>Please avoid contact with direct water and perfume.</li>
          <li>Store jewellery in a cool, dry place.</li>
        </ul>
      </>
    ),
  },
];

export default function ShippingPage() {
  return (
    <main>
      <Navbar />
      <div className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.heading}>Shipping Policy</h1>
          <p className={styles.updated}>Last updated June 2026</p>

          {sections.map((section) => (
            <section key={section.title} className={styles.section}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              {section.body}
            </section>
          ))}

          <p className={styles.note}>
            For urgent orders and custom colour requests, please message us directly on WhatsApp when you place your order.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
