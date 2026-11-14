"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaWhatsapp, FaCar } from "react-icons/fa";
import { LuPhoneCall, LuMailOpen } from "react-icons/lu";
import Button from "@/components/ui/Button";
import WhatsAppModal from "@/components/ui/WhatsAppModal";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Fleet", href: "/fleet" },
  { name: "Contact", href: "/contact" },
];

const BOOK_HREF = "/fleet"; // yaha apna booking page ka link daal sakte ho

export default function Header() {
  const pathname = usePathname();
  const [isWaOpen, setIsWaOpen] = useState(false);

  const roundBtn =
    "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-white text-white transition-colors hover:border-[#D41331] hover:text-[#D41331]";

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-neutral-900">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.svg"
              alt="777 Drive Rent a Car"
              width={160}
              height={80}
              priority
              className="h-auto w-32 lg:w-40"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 xl:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`whitespace-nowrap text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-[#D41331]"
                      : "text-white/90 hover:text-[#D41331]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons (Desktop) */}
          <div className="hidden items-center gap-3 xl:flex">
            {/* WhatsApp */}
            <button
              type="button"
              aria-label="WhatsApp"
              onClick={() => setIsWaOpen(true)}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#4CAF50] text-white transition hover:brightness-110"
            >
              <FaWhatsapp className="h-6 w-6" />
            </button>

            {/* Call */}
            <a href="tel:+971509954626" aria-label="Call" className={roundBtn}>
              <LuPhoneCall className="h-5 w-5" />
            </a>

            {/* Email */}
            <a
              href="mailto:info@777drive.ae"
              aria-label="Email"
              className={roundBtn}
            >
              <LuMailOpen className="h-5 w-5" />
            </a>

            {/* Book a Car */}
            <Button
              href={BOOK_HREF}
              variant="primary"
              className="ml-1 px-5 py-2.5 text-sm font-bold"
            >
              <FaCar className="h-5 w-5" />
              Book a Car
            </Button>
          </div>

          {/* Mobile Navigation */}
          <details className="group relative xl:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-white/20 text-xl text-white">
              <span className="group-open:hidden">☰</span>
              <span className="hidden group-open:inline">✕</span>
            </summary>

            <nav className="absolute right-0 top-14 flex w-72 flex-col gap-1 rounded-xl border border-white/10 bg-neutral-900 p-4 shadow-xl">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`rounded-lg px-4 py-2.5 text-sm font-semibold hover:bg-white/5 ${
                    pathname === link.href ? "text-[#D41331]" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="mt-3 flex flex-col gap-3 border-t border-white/10 pt-3">
                <div className="flex items-center justify-center gap-3">
                  <button
                    type="button"
                    aria-label="WhatsApp"
                    onClick={() => setIsWaOpen(true)}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4CAF50] text-white"
                  >
                    <FaWhatsapp className="h-6 w-6" />
                  </button>
                  <a
                    href="tel:+971509954626"
                    aria-label="Call"
                    className={roundBtn}
                  >
                    <LuPhoneCall className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:info@777drive.ae"
                    aria-label="Email"
                    className={roundBtn}
                  >
                    <LuMailOpen className="h-5 w-5" />
                  </a>
                </div>

                <Button
                  href={BOOK_HREF}
                  variant="primary"
                  className="w-full py-2.5 text-sm font-bold"
                >
                  <FaCar className="h-5 w-5" />
                  Book a Car
                </Button>
              </div>
            </nav>
          </details>
        </div>
      </header>

      {/* WhatsApp Modal */}
      <WhatsAppModal isOpen={isWaOpen} onClose={() => setIsWaOpen(false)} />
    </>
  );
}