"use client";

import { Fragment, useEffect, useRef, useState } from "react";
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

const BOOK_HREF = "/fleet"; // apna booking page link yaha daalo

/* ---------- Top bar data ---------- */
const regions = [
  {
    key: "india",
    flag: "in",
    title: "India Customer Support",
    subtitle: "(For Dubai Bookings from India)",
    whatsapp: { label: "+91 98765 43210", href: "https://wa.me/919876543210" },
    phone: { label: "+91 98765 43210", href: "tel:+919876543210" },
    email: { label: "india@777drive.com", href: "mailto:india@777drive.com" },
  },
  {
    key: "dubai",
    flag: "ae",
    title: "Dubai Office",
    subtitle: "(Local Support in UAE)",
    whatsapp: { label: "+971 509954626", href: "https://wa.me/971509954626" },
    phone: { label: "+971 50 995 4626", href: "tel:+971509954626" },
    email: { label: "info@777drive.ae", href: "mailto:info@777drive.ae" },
  },
] as const;

/* ---------- Small flag icons (inline SVG) ---------- */
function Flag({ code }: { code: "in" | "ae" }) {
  const cls = "h-5 w-7 shrink-0 rounded-[4px] shadow-sm sm:h-7 sm:w-10 sm:rounded-md";

  if (code === "in") {
    return (
      <svg viewBox="0 0 40 28" className={cls} aria-hidden="true">
        <rect width="40" height="9.34" y="0" fill="#FF9933" />
        <rect width="40" height="9.34" y="9.33" fill="#FFFFFF" />
        <rect width="40" height="9.34" y="18.66" fill="#138808" />
        <circle cx="20" cy="14" r="3.2" fill="none" stroke="#000080" strokeWidth="1" />
        <circle cx="20" cy="14" r="0.7" fill="#000080" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 40 28" className={cls} aria-hidden="true">
      <rect width="40" height="9.34" y="0" fill="#00732F" />
      <rect width="40" height="9.34" y="9.33" fill="#FFFFFF" />
      <rect width="40" height="9.34" y="18.66" fill="#000000" />
      <rect width="11" height="28" x="0" fill="#EF3340" />
    </svg>
  );
}

/* ---------- Single contact item ---------- */
function ContactItem({
  href,
  label,
  icon,
  external,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex items-center gap-1.5 whitespace-nowrap text-[11px] font-medium text-neutral-800 transition-colors hover:text-[#D41331] sm:gap-2 sm:text-xs lg:text-[13px] 2xl:text-sm"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

/* ---------- Top bar (no scroll, fully wraps) ---------- */
function TopBar() {
  const iconCls = "h-4 w-4 shrink-0 sm:h-[18px] sm:w-[18px]";

  return (
    <div className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-2 px-3 py-2 sm:px-6 lg:flex-row lg:items-center lg:justify-center lg:gap-6 lg:py-2.5">
        {regions.map((r, i) => (
          <Fragment key={r.key}>
            {/* divider: horizontal on mobile, vertical on desktop */}
            {i > 0 && (
              <span
                className="h-px w-full bg-neutral-200 lg:h-9 lg:w-px lg:shrink-0 lg:bg-neutral-300"
                aria-hidden="true"
              />
            )}

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 lg:flex-1">
              {/* Title block */}
              <div className="flex items-center gap-2 sm:gap-3">
                <Flag code={r.flag} />
                <div className="leading-tight">
                  <p className="text-[13px] font-bold text-neutral-900 sm:text-sm 2xl:text-base">
                    {r.title}
                  </p>
                  <p className="text-[10px] text-neutral-600 sm:text-[11px] 2xl:text-xs">
                    {r.subtitle}
                  </p>
                </div>
              </div>

              {/* Contacts */}
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:gap-x-5">
                <ContactItem
                  href={r.whatsapp.href}
                  label={r.whatsapp.label}
                  external
                  icon={<FaWhatsapp className={`${iconCls} text-[#25D366]`} />}
                />
                <ContactItem
                  href={r.phone.href}
                  label={r.phone.label}
                  icon={<LuPhoneCall className={iconCls} />}
                />
                <ContactItem
                  href={r.email.href}
                  label={r.email.label}
                  icon={<LuMailOpen className={iconCls} />}
                />
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

/* ---------- Header ---------- */
export default function Header() {
  const pathname = usePathname();
  const [isWaOpen, setIsWaOpen] = useState(false);
  const [showTop, setShowTop] = useState(true);
  const lastY = useRef(0);

  // Scroll down => hide top bar, scroll up => show top bar
  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;

      if (y < 10) {
        setShowTop(true); // page ke top par hamesha dikhao
      } else if (delta > 6 && y > 80) {
        setShowTop(false); // niche scroll -> hide
      } else if (delta < -6) {
        setShowTop(true); // upar scroll -> show
      }

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const roundBtn =
    "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-white text-white transition-colors hover:border-[#D41331] hover:text-[#D41331]";

  return (
    <>
      <div className="sticky top-0 z-50 w-full">
        {/* ===== TOP HEADER (auto hide/show) ===== */}
        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
            showTop ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <TopBar />
          </div>
        </div>

        {/* ===== BOTTOM HEADER (main) ===== */}
        <header className="w-full border-b border-white/5 bg-neutral-900">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:gap-6 sm:px-5 lg:px-8">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="/logo.svg"
                alt="777 Drive Rent a Car"
                width={160}
                height={80}
                priority
                className="h-auto w-24 sm:w-32 lg:w-40"
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
              <button
                type="button"
                aria-label="WhatsApp"
                onClick={() => setIsWaOpen(true)}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#4CAF50] text-white transition hover:brightness-110"
              >
                <FaWhatsapp className="h-6 w-6" />
              </button>

              <a href="tel:+971509954626" aria-label="Call" className={roundBtn}>
                <LuPhoneCall className="h-5 w-5" />
              </a>

              <a href="mailto:info@777drive.ae" aria-label="Email" className={roundBtn}>
                <LuMailOpen className="h-5 w-5" />
              </a>

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
              <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-white/20 text-xl text-white [&::-webkit-details-marker]:hidden">
                <span className="group-open:hidden">☰</span>
                <span className="hidden group-open:inline">✕</span>
              </summary>

              <nav className="absolute right-0 top-14 flex w-[min(18rem,calc(100vw-2rem))] flex-col gap-1 rounded-xl border border-white/10 bg-neutral-900 p-4 shadow-xl">
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
                    <a href="tel:+971509954626" aria-label="Call" className={roundBtn}>
                      <LuPhoneCall className="h-5 w-5" />
                    </a>
                    <a href="mailto:info@777drive.ae" aria-label="Email" className={roundBtn}>
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
      </div>

      {/* WhatsApp Modal */}
      <WhatsAppModal isOpen={isWaOpen} onClose={() => setIsWaOpen(false)} />
    </>
  );
}