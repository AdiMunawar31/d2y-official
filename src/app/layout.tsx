import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["cyrillic-ext"], weight: "400" });

export const metadata = {
  title: "D2Y OFFICIAL",
  description: "PROFESSIONAL WEBSITE",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="px-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
