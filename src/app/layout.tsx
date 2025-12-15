import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickySidebar } from "@/components/layout/StickySidebar";
import { CartProvider } from "@/contexts/CartContext";
import { CartDrawer } from "@/components/cart/CartDrawer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Weblearnai Academy - Premium Online Learning",
  description: "Master in-demand skills with Weblearnai Academy. High-quality courses in Web Development, Data Science, Design & more. Join thousands of successful learners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-sans min-h-screen flex flex-col`}
      >
        <CartProvider>
          <Navbar />
          <StickySidebar />
          <CartDrawer />
          <main className="flex-grow m-0 p-0">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
