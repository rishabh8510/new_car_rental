
import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const font = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-main",
});

export const metadata: Metadata = {
  title: "777 Car Rental | Premium Car Rental Services",
  description:
    "Book your perfect ride with 777 Car Rental. Reliable, comfortable and affordable car rental services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${font.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
