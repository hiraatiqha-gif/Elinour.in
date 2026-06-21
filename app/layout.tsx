import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { CartProvider } from "@/components/Cart/CartProvider";
import { WishlistProvider } from "@/components/Wishlist/WishlistProvider";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";
import FloatingCart from "@/components/Cart/flowingCart";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elinour",
  description: "Handcrafted lightweight jewellery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <WishlistProvider>
            {children}
            <FloatingCart />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}