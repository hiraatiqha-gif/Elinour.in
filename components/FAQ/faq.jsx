"use client";

import { useState } from "react";
import styles from "./faq.module.css";

const faqs = [
  {
    q: "What is your exchange or return policy?",
    a: (
      <>
        We only offer exchanges if the product delivered is damaged or different from what
        was ordered. To request an exchange, please notify us within 2 days of receiving
        your package and share a clear unboxing video as proof. Requests made without an
        unboxing video may not be eligible for exchange.
      </>
    ),
  },
  {
    q: "Is the jewellery fragile?",
    a: (
      <>
        Our jewellery is designed to be lightweight, elegant, and durable for regular
        wear. Floral resin pieces are handmade and need a little extra care — store safely
        and avoid excessive pressure or impact.
      </>
    ),
  },
  {
    q: "Do you customise jewellery according to outfits?",
    a: (
      <>
        Yes. We offer colour customisation, especially for resin floral pieces. Contact us
        via WhatsApp to discuss preferred colours or outfit requirements. Custom orders
        typically take 2–3 weeks.
      </>
    ),
  },
  {
    q: "How long does delivery take?",
    a: (
      <>
        Standard delivery is approximately 7–10 days. Timelines may vary by location and
        during peak seasons.
      </>
    ),
  },
  {
    q: "Do you provide urgent delivery?",
    a: (
      <>
        Yes. Urgent orders handled via WhatsApp — usually delivered within 3–4 days subject
        to design and location. Contact us before placing an order to confirm availability.
      </>
    ),
  },
  {
    q: "Do you ship across India?",
    a: (
      <>
        Yes — domestic orders worth ₹2,500 and above qualify for free shipping. Orders
        below ₹2,500 incur a shipping charge of ₹150.
      </>
    ),
  },
  {
    q: "Do you offer international shipping?",
    a: (
      <>
        Yes. International orders above INR 50,000 get complimentary shipping. Orders
        below that are charged a flat fee of INR 4,500. Customs and import duties are the
        customer&apos;s responsibility.
      </>
    ),
  },
  {
    q: "How should I care for my jewellery?",
    a: (
      <>
        Store pieces in a dry place, avoid direct contact with perfumes, hairsprays and
        chemicals, and keep jewellery in its pouch or box when not in use. Handle resin
        floral pieces with extra care.
      </>
    ),
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className={styles.faqSection} aria-labelledby="faqs-heading">
      <div className={styles.container}>
        <h2 id="faqs-heading" className={styles.heading}>Frequently Asked Questions</h2>

        <div className={styles.grid}>
          {faqs.map((item, idx) => (
            <details
              className={styles.item}
              key={idx}
              open={openIndex === idx}
            >
              <summary
                className={styles.question}
                onClick={(e) => {
                  e.preventDefault();
                  setOpenIndex(openIndex === idx ? -1 : idx);
                }}
              >
                {item.q}
              </summary>
              <div className={styles.answer}>{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
