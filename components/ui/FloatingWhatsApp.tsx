"use client";

import { FaWhatsapp } from "react-icons/fa";

export type FloatingWhatsAppProps = {
  phoneNumber?: string;
  message?: string;
};

export default function FloatingWhatsApp({
  phoneNumber = "971509954626",
  message = "Hello 777 Drive, I would like to inquire about car rental.",
}: FloatingWhatsAppProps) {
  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <aside
      aria-label="WhatsApp Support"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-3 sm:bottom-6 sm:right-6"
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/50 rounded-full"
        aria-label="Chat with 777 Drive customer support on WhatsApp"
      >
        {/* Support Tooltip Pill (Desktop) */}
        <div className="hidden rounded-full border border-neutral-200/20 bg-neutral-900/95 px-4 py-2 text-sm font-medium text-white shadow-xl backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:bg-neutral-900 group-hover:border-neutral-200/40 sm:flex sm:items-center sm:gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <span className="text-xs font-semibold text-gray-200">
            Need Help? <span className="text-[#25D366]">Chat with us</span>
          </span>
        </div>

        {/* Floating WhatsApp Action Button */}
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-emerald-950/40 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#20ba59] group-active:scale-95 sm:h-16 sm:w-16">
          {/* Subtle pulse ring behind button */}
          <span
            aria-hidden="true"
            className="absolute -inset-1 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30 pointer-events-none"
          />

          {/* WhatsApp Icon */}
          <FaWhatsapp className="h-8 w-8 transition-transform duration-300 group-hover:rotate-6 sm:h-9 sm:w-9" />

          {/* Live Online Status Dot on Top-Right */}
          <span
            aria-hidden="true"
            className="absolute right-0.5 top-0.5 flex h-3.5 w-3.5 sm:h-4 sm:w-4"
          >
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500 sm:h-4 sm:w-4" />
          </span>
        </div>
      </a>
    </aside>
  );
}
