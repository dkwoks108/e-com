import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gabaya Legacy – Conscious Luxury Handbags",
  description:
    "Gabaya Legacy offers premium bio-vegan leather handbags handcrafted in India. Sustainable luxury bags for the modern woman. Shop tote bags, sling bags, crossbody bags & more.",
  keywords:
    "vegan handbags, sustainable bags, bio-vegan leather, luxury handbags India, Gabaya Legacy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#FAFAF8] text-[#2C2C2C]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
