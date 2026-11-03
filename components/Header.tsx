"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { LuPhoneCall, LuMailOpen } from "react-icons/lu";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Why 777 Car Rent", href: "/why-777-car-rent" },
  { name: "About Us", href: "/about" },
  { name: "Fleet", href: "/fleet" },
  { name: "Industries", href: "/industries" },
  { name: "Contact", href: "/contact" },
];

// Agar aapki pehle se button class bani hui hai (jaise "btn-primary"),
// to is variable ki value usi class se replace kar do.
const btnClass =
  "inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#D41331] to-[#890018] px-5 py-2.5 text-base font-medium text-white shadow-md transition hover:brightness-110";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-neutral-900">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
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
                className={`whitespace-nowrap text-base font-medium transition-colors ${
                  isActive ? "text-[#D41331]" : "text-white hover:text-[#D41331]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden items-center gap-3 xl:flex">
          <a href="tel:+971000000000" className={btnClass}>
            <LuPhoneCall className="h-5 w-5" />
            Call Now
          </a>
          <a
            href="https://wa.me/971000000000"
            target="_blank"
            rel="noopener noreferrer"
            className={btnClass}
          >
            <FaWhatsapp className="h-5 w-5" />
            WhatsApp
          </a>
          <a href="mailto:info@777drive.com" className={btnClass}>
            <LuMailOpen className="h-5 w-5" />
            Email
          </a>
        </div>

        {/* Mobile Navigation */}
        <details className="group relative xl:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-lg border border-white/20 text-2xl text-white">
            <span className="group-open:hidden">☰</span>
            <span className="hidden group-open:inline">✕</span>
          </summary>

          <nav className="absolute right-0 top-14 flex w-72 flex-col gap-1 rounded-xl border border-white/10 bg-neutral-900 p-4 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`rounded-lg px-4 py-3 text-base font-medium hover:bg-white/5 ${
                  pathname === link.href ? "text-[#D41331]" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="mt-3 flex flex-col gap-2">
              <a href="tel:+971000000000" className={btnClass}>
                <LuPhoneCall className="h-5 w-5" /> Call Now
              </a>
              <a href="https://wa.me/971000000000" className={btnClass}>
                <FaWhatsapp className="h-5 w-5" /> WhatsApp
              </a>
              <a href="mailto:info@777drive.com" className={btnClass}>
                <LuMailOpen className="h-5 w-5" /> Email
              </a>
            </div>
          </nav>
        </details>
      </div>
    </header>
  );
}