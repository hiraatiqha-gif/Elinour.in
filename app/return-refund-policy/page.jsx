import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";
import styles from "./return-refund-policy.module.css";

export const metadata = {
  title: "Return & Refund Policy | Elinour",
  description: "Return, exchange, and refund policy for Elinour handcrafted jewellery.",
};

const sections = [
  {
    title: "Exchanges",
    body: (
      <>
        <p>We only offer exchanges if a product is delivered damaged or different from what was ordered.</p>
        <p>To request an exchange, notify us within 2 days of delivery and share a clear unboxing video as proof. Requests made without an unboxing video may not be eligible.</p>
      </>
    ),
  },
  {
    title: "Refunds",
    body: (
      <>
        <p>Due to the handcrafted, customised nature of our jewellery, we do not offer returns or refunds for change of mind.</p>
        <p>Refunds are only considered when a product is proven damaged, incorrect, or materially different from the item ordered.</p>
      </>
    ),
  },
  {
    title: "Custom Orders",
    body: (
      <>
        <p>Custom orders are made to your specifications and usually take <strong>2–3 weeks</strong> to make and ship.</p>
        <p>Because custom orders are specially produced, they are not eligible for returns or refunds unless the item arrives damaged or incorrect.</p>
      </>
    ),
  },
  {
    title: "Care and Handling",
    body: (
      <>
        <p>Handle resin jewellery gently and avoid water, perfume, and chemicals. Store each piece in a cool, dry place.</p>
      </>
    ),
  },
];

export default function ReturnRefundPolicyPage() {
  return (
    <main>
      <Navbar />
      <div className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.heading}>Return & Refund Policy</h1>
          <p className={styles.updated}>Last updated June 2026</p>

          {sections.map((section) => (
            <section key={section.title} className={styles.section}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              {section.body}
            </section>
          ))}

          <p className={styles.contactBlock}>
            Questions about this policy? Email us at <a href="mailto:elinour.in@gmail.com">elinour.in@gmail.com</a>.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
