"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { LuPhoneCall, LuMailOpen } from "react-icons/lu";
import Button from "@/components/ui/Button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Fleet", href: "/fleet" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-neutral-900 border-b border-white/5">
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
                  isActive ? "text-[#D41331]" : "text-white/90 hover:text-[#D41331]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden items-center gap-2.5 xl:flex">
          <Button
            href="tel:+971509954626"
            variant="primary"
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider"
          >
            <LuPhoneCall className="h-4 w-4" />
            Call Now
          </Button>

          <Button
            href="https://wa.me/971509954626"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider"
          >
            <FaWhatsapp className="h-4 w-4" />
            WhatsApp
          </Button>

          <Button
            href="mailto:info@777drive.ae"
            variant="outline"
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider hover:border-[#D41331] hover:bg-[#D41331]"
          >
            <LuMailOpen className="h-4 w-4" />
            Email
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

            <div className="mt-3 flex flex-col gap-2 pt-2 border-t border-white/10">
              <Button
                href="tel:+971509954626"
                variant="primary"
                className="w-full text-xs font-bold uppercase tracking-wider py-2.5"
              >
                <LuPhoneCall className="h-4 w-4" /> Call Now
              </Button>
              <Button
                href="https://wa.me/971509954626"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="w-full text-xs font-bold uppercase tracking-wider py-2.5"
              >
                <FaWhatsapp className="h-4 w-4" /> WhatsApp
              </Button>
              <Button
                href="mailto:info@777drive.ae"
                variant="outline"
                className="w-full text-xs font-bold uppercase tracking-wider py-2.5 hover:border-[#D41331] hover:bg-[#D41331]"
              >
                <LuMailOpen className="h-4 w-4" /> Email
              </Button>
            </div>
          </nav>
        </details>
      </div>
    </header>
  );
}
