import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";
import styles from "./terms.module.css";

export const metadata = {
  title: "Terms & Conditions | Elinour",
  description: "Terms and conditions for shopping with Elinour — handcrafted lightweight jewellery.",
};

const sections = [
  {
    title: "1. About These Terms",
    body: (
      <>
        <p>
          These Terms &amp; Conditions govern your use of the Elinour website and any
          purchase you make from us. By browsing this site or placing an order, you
          agree to the terms set out below. Please read them carefully before shopping
          with us.
        </p>
      </>
    ),
  },
  {
    title: "2. Products & Customisation",
    body: (
      <>
        <p>
          Every Elinour piece is handcrafted, which means small variations in colour,
          shape, or finish are part of the charm and not considered defects. Where
          customisation is offered, final colours and details are made to order based
          on your preference shared via WhatsApp and may differ slightly from the
          listing photo.
        </p>
      </>
    ),
  },
  {
    title: "3. Orders & Checkout via WhatsApp",
    body: (
      <>
        <p>
          Orders placed through our shop are confirmed via WhatsApp. Once you proceed
          to checkout, your cart summary is sent to our team for confirmation of stock,
          pricing, and delivery timelines before payment is finalised. An order is only
          considered placed once confirmed by our team over WhatsApp.
        </p>
      </>
    ),
  },
  {
    title: "4. Pricing & Payment",
    body: (
      <>
        <p>
          All prices are listed in Indian Rupees (₹) and are subject to change without
          prior notice. Payment details and accepted modes will be shared with you
          directly during WhatsApp order confirmation.
        </p>
      </>
    ),
  },
  {
    title: "5. Shipping",
    body: (
      <>
        <p>
          Standard delivery within India takes approximately 7–10 business days from
          order confirmation. Domestic orders worth ₹2,500 and above qualify for free
          shipping; orders below this amount incur a flat shipping charge of ₹150.
        </p>
        <p>
          International orders above INR 50,000 receive complimentary shipping; orders
          below that are charged a flat fee of INR 4,500. Customs duties, taxes, and
          import charges, where applicable, are the customer&apos;s responsibility.
        </p>
      </>
    ),
  },
  {
    title: "6. Exchanges & Returns",
    body: (
      <>
        <p>
          We only offer exchanges if a product is delivered damaged or different from
          what was ordered. Requests must be raised within 2 days of delivery and
          accompanied by a clear unboxing video as proof — requests made without one
          may not be eligible. Due to the handcrafted and made-to-order nature of our
          pieces, we do not offer returns or refunds for change of mind.
        </p>
      </>
    ),
  },
  {
    title: "7. Care of Your Jewellery",
    body: (
      <>
        <p>
          Our pieces are designed to be lightweight and durable for everyday wear, but
          resin and hand-finished components benefit from gentle care. Store pieces in
          a dry place away from direct sunlight, avoid contact with perfume, hairspray,
          and other chemicals, and keep them in their pouch or box when not in use.
        </p>
      </>
    ),
  },
  {
    title: "8. Intellectual Property",
    body: (
      <>
        <p>
          All designs, photography, and content on this site belong to Elinour and may
          not be reproduced, copied, or used commercially without our written
          permission.
        </p>
      </>
    ),
  },
  {
    title: "9. Changes to These Terms",
    body: (
      <>
        <p>
          We may update these Terms &amp; Conditions from time to time to reflect
          changes in our policies or operations. Continued use of the site after any
          changes constitutes acceptance of the revised terms.
        </p>
      </>
    ),
  },
];

export default function TermsOfServicePage() {
  return (
    <main>
      <Navbar />
      <div className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.heading}>Terms &amp; Conditions</h1>
          <p className={styles.updated}>Last updated June 2026</p>

          {sections.map((s) => (
            <section className={styles.section} key={s.title}>
              <h2 className={styles.sectionTitle}>{s.title}</h2>
              {s.body}
            </section>
          ))}

          <p className={styles.contactBlock}>
            Questions about these terms? Reach us at {" "}
            <a href="mailto:elinour.in@gmail.com">elinour.in@gmail.com</a>
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
