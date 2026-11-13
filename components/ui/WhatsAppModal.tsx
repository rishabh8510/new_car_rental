"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import {
  LuX,
  LuCopy,
  LuCheck,
  LuPhone,
  LuClock,
  LuMapPin,
  LuExternalLink,
} from "react-icons/lu";

export type WhatsAppModalProps = {
  isOpen: boolean;
  onClose: () => void;
  phone?: string;
  whatsappNumber?: string;
  carName?: string;
  carPrice?: string;
  carImage?: string;
  customMessage?: string;
};

export default function WhatsAppModal({
  isOpen,
  onClose,
  phone = "+971 509954626",
  whatsappNumber = "971509954626",
  carName,
  carPrice,
  carImage,
  customMessage,
}: WhatsAppModalProps) {
  const [copied, setCopied] = useState(false);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const defaultMsg = carName
    ? `Hi 777 Drive, I would like to book the ${carName.trim()}${
        carPrice ? ` (AED ${carPrice}/day)` : ""
      }. Please share availability and rental requirements.`
    : "Hi 777 Drive, I would like to inquire about renting a car in Dubai.";

  const message = customMessage || defaultMsg;
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  const handleCopy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(phone);
      } else {
        const input = document.createElement("input");
        input.value = phone;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="WhatsApp Contact Details"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 bg-gradient-to-r from-emerald-600 to-green-700 px-5 py-4 text-white sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-white shadow-xs backdrop-blur-xs">
              <FaWhatsapp className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-base font-bold leading-snug sm:text-lg">
                Chat on WhatsApp
              </h3>
              <p className="flex items-center gap-1.5 text-xs text-green-100">
                <span className="h-2 w-2 rounded-full bg-green-300 animate-pulse" />
                Online Now &middot; Instant Reply
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-black/20 text-white transition hover:bg-black/40"
          >
            <LuX className="h-4.5 w-4.5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6">
          {/* Car Card Preview if inquiring about specific car */}
          {carName && (
            <div className="mb-5 flex items-center gap-3.5 rounded-xl border border-gray-200 bg-slate-50 p-3">
              {carImage && (
                <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg bg-white shadow-xs">
                  <Image
                    src={carImage}
                    alt={carName}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
              )}
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#D41331]">
                  Inquiring About
                </p>
                <h4 className="truncate text-sm font-bold text-neutral-900">
                  {carName.trim()}
                </h4>
                {carPrice && (
                  <p className="mt-0.5 text-xs font-semibold text-neutral-600">
                    <span className="font-bold text-[#D41331]">
                      AED {carPrice}
                    </span>{" "}
                    / day
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Phone Details Box */}
          <div className="rounded-xl border border-gray-200 bg-gray-50/70 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              Customer Support Phone
            </p>

            <div className="mt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-100 text-green-700">
                  <LuPhone className="h-4.5 w-4.5" />
                </div>
                <span className="text-base sm:text-lg font-mono font-bold text-neutral-900">
                  {phone}
                </span>
              </div>

              {/* Copy Phone Button */}
              <button
                type="button"
                onClick={handleCopy}
                className={`inline-flex items-center justify-center gap-1.5 rounded-lg border px-3.5 py-2 text-xs font-bold transition cursor-pointer ${
                  copied
                    ? "border-green-600 bg-green-50 text-green-700 shadow-xs"
                    : "border-gray-200 bg-white text-neutral-800 shadow-xs hover:border-[#D41331] hover:bg-red-50 hover:text-[#D41331]"
                }`}
              >
                {copied ? (
                  <>
                    <LuCheck className="h-4 w-4 text-green-600" />
                    Copied!
                  </>
                ) : (
                  <>
                    <LuCopy className="h-4 w-4" />
                    Copy Number
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Quick Info Points */}
          <div className="mt-4 space-y-2 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <LuClock className="h-3.5 w-3.5 text-green-600 shrink-0" />
              <span>Available 24/7 for bookings & inquiries across Dubai</span>
            </div>
            <div className="flex items-center gap-2">
              <LuMapPin className="h-3.5 w-3.5 text-[#D41331] shrink-0" />
              <span className="truncate">133 46th Street, Hor Al Anz, Deira, Dubai, UAE</span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col sm:flex-row gap-2.5">
            {/* Go with WhatsApp Button */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-green-700 px-5 text-sm font-bold text-white shadow-md transition hover:from-emerald-500 hover:to-green-600 cursor-pointer"
            >
              <FaWhatsapp className="h-5 w-5" />
              <span>Go with WhatsApp</span>
              <LuExternalLink className="h-4 w-4 opacity-80" />
            </a>

            {/* Direct Call Button */}
            <a
              href={`tel:${phone.replace(/\s+/g, "")}`}
              onClick={onClose}
              className="flex h-12 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 text-sm font-bold text-neutral-800 shadow-xs transition hover:border-[#D41331] hover:bg-red-50 hover:text-[#D41331] cursor-pointer"
            >
              <LuPhone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
