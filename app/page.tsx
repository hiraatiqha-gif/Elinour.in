"use client";
import Navbar from "@/components/Navbar/navbar"
import Hero from "@/components/Hero/hero";
import ProductShowcase from "@/components/Showcase/ProductShowcase";
import Reviews from "@/components/Reviews/reviews";
import FAQ from "@/components/FAQ/faq";
import Footer from "@/components/Footer/footer";
import { getProductsByTag } from "@/lib/productHelpers";

export default function Home() {
  const newArrivals = getProductsByTag("new-arrival").slice(0, 4);
  const bestsellers = getProductsByTag("bestseller").slice(0, 4);

  return (
    <main>
      <Navbar />
      <Hero />
      <ProductShowcase
        title="New Arrivals"
        products={newArrivals}
        badgeLabel="New"
      />
      <ProductShowcase
        title="Best Sellers"
        products={bestsellers}
        badgeLabel="Bestseller"
        alt
      />
      <Reviews />
      <FAQ />
      <Footer />
    </main>
  );
}