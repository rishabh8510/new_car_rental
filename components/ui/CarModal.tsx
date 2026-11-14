"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import {
  LuX,
  LuChevronLeft,
  LuChevronRight,
  LuPlay,
  LuPause,
  LuHeart,
  LuPhone,
  LuFlame,
  LuShieldCheck,
  LuSparkles,
  LuGauge,
} from "react-icons/lu";
import {
  FaWhatsapp,
  FaRoad,
  FaUsers,
  FaGasPump,
  FaCogs,
  FaSuitcase,
} from "react-icons/fa";
import Button from "@/components/ui/Button";
import type { Car } from "./CarCard";
import WhatsAppModal from "./WhatsAppModal";

export type CarModalProps = {
  car: Car | null;
  isOpen: boolean;
  onClose: () => void;
  phone?: string;
  whatsapp?: string;
};

export default function CarModal({
  car,
  isOpen,
  onClose,
  phone = "+971501234567",
  whatsapp = "971501234567",
}: CarModalProps) {
  // Lock body scroll when modal is open
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

  if (!isOpen || !car) return null;

  return (
    <CarModalDialog
      key={`${car.id}`}
      car={car}
      onClose={onClose}
      phone={phone}
      whatsapp={whatsapp}
    />
  );
}

function CarModalDialog({
  car,
  onClose,
  phone,
  whatsapp,
}: {
  car: Car;
  onClose: () => void;
  phone: string;
  whatsapp: string;
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [liked, setLiked] = useState(false);
  const [isWaModalOpen, setIsWaModalOpen] = useState(false);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  // Normalize images list
  const images: string[] =
    car.images && car.images.length > 0 ? car.images : [car.image];

  const nextImage = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Handle keyboard events (Escape, Left, Right)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, prevImage, nextImage]);

  // Auto-scroll images
  useEffect(() => {
    if (images.length <= 1 || !isAutoPlaying || isHovered) return;

    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % images.length);
    }, 2800);

    return () => clearInterval(timer);
  }, [images.length, isAutoPlaying, isHovered]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (thumbnailsRef.current) {
      const activeThumb = thumbnailsRef.current.children[activeIdx] as HTMLElement;
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeIdx]);

  const currentImage = images[activeIdx] || car.image;

  return (
    <>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${car.name} Details`}
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6"
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />

        {/* Modal Dialog */}
        <div className="relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200">
          {/* Top Header Bar */}
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3.5 sm:px-6">
            <div className="flex items-center gap-2">
              {car.badge && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#D41331] to-[#890018] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
                  <LuFlame className="h-3.5 w-3.5" />
                  {car.badge}
                </span>
              )}
              <span className="hidden text-xs font-semibold uppercase tracking-wider text-green-700 sm:inline-flex sm:items-center sm:gap-1 rounded-full bg-green-50 px-2.5 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                Available for Rent
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-red-50 hover:text-[#D41331]"
            >
              <LuX className="h-5 w-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="grid flex-1 overflow-y-auto lg:grid-cols-12 [scrollbar-width:thin]">
            {/* Left Column: Gallery & Auto-scrolling Images (7 cols on lg) */}
            <div className="bg-neutral-900 p-4 sm:p-6 lg:col-span-7 flex flex-col justify-between">
              {/* Main Image Viewer */}
              <div
                className="group relative flex h-64 sm:h-80 md:h-96 w-full items-center justify-center overflow-hidden rounded-xl bg-black/40"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Image
                  src={currentImage}
                  alt={`${car.name} - Photo ${activeIdx + 1}`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-contain transition-all duration-500"
                />

                {/* Prev / Next controls */}
                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label="Previous image"
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition hover:bg-[#D41331] hover:scale-105"
                    >
                      <LuChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      type="button"
                      aria-label="Next image"
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition hover:bg-[#D41331] hover:scale-105"
                    >
                      <LuChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}

                {/* Top controls over image */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="pointer-events-auto rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur-sm">
                    {activeIdx + 1} / {images.length}
                  </span>

                  <div className="pointer-events-auto flex items-center gap-2">
                    {images.length > 1 && (
                      <button
                        type="button"
                        aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
                        onClick={() => setIsAutoPlaying((v) => !v)}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white/90 backdrop-blur-sm transition hover:bg-[#D41331]"
                        title={isAutoPlaying ? "Pause auto-scroll" : "Play auto-scroll"}
                      >
                        {isAutoPlaying ? (
                          <LuPause className="h-3.5 w-3.5" />
                        ) : (
                          <LuPlay className="h-3.5 w-3.5 ml-0.5" />
                        )}
                      </button>
                    )}

                    <button
                      type="button"
                      aria-label="Like car"
                      onClick={() => setLiked((v) => !v)}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white/90 backdrop-blur-sm transition hover:bg-white hover:text-red-600"
                    >
                      <LuHeart
                        className={`h-4 w-4 ${liked ? "fill-red-600 text-red-600" : ""}`}
                      />
                    </button>
                  </div>
                </div>

                {/* Auto scroll indicator pulse */}
                {isAutoPlaying && images.length > 1 && (
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 text-[11px] font-medium text-white/90 backdrop-blur-sm">
                    <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                    Auto-scrolling
                  </div>
                )}
              </div>

              {/* Thumbnail Navigation Strip */}
              {images.length > 1 && (
                <div className="mt-4">
                  <div
                    ref={thumbnailsRef}
                    className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:thin]"
                  >
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setActiveIdx(idx);
                          setIsAutoPlaying(false);
                        }}
                        className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                          activeIdx === idx
                            ? "border-[#D41331] shadow-md ring-2 ring-red-400/50 scale-105"
                            : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Car Details & Actions (5 cols on lg) */}
            <div className="flex flex-col justify-between p-5 sm:p-6 lg:col-span-5 bg-white">
              <div>
                {/* Title & subtitle */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
                    {car.name.trim()}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-gray-500 flex items-center gap-1.5">
                    <LuSparkles className="h-4 w-4 text-[#D41331]" />
                    Best Price Guarantee &middot; Instant Confirmation in Dubai
                  </p>
                </div>

                {/* Pricing Cards */}
                <div className="mt-4 rounded-xl border border-red-100 bg-gradient-to-br from-red-50/50 to-white p-4">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Daily Rental
                      </span>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-sm font-bold text-[#D41331]">AED</span>
                        <span className="text-3xl font-black text-[#D41331]">
                          {car.price}
                        </span>
                        <span className="text-xs text-gray-500">/ day</span>
                      </div>
                    </div>

                    {car.oldPrice && (
                      <div className="text-right">
                        <span className="text-xs text-gray-400">Regular</span>
                        <p className="text-sm font-semibold text-gray-400 line-through">
                          AED {car.oldPrice}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2 border-t border-red-100/70 pt-3">
                    <div className="rounded-lg bg-white p-2.5 shadow-xs border border-gray-100">
                      <p className="text-[11px] font-semibold uppercase text-gray-500">
                        Weekly <span className="text-green-600">(-5%)</span>
                      </p>
                      <p className="mt-0.5 text-sm font-bold text-neutral-900">
                        AED {car.weekly}{" "}
                        <span className="text-xs font-normal text-gray-500">/wk</span>
                      </p>
                    </div>
                    <div className="rounded-lg bg-white p-2.5 shadow-xs border border-gray-100">
                      <p className="text-[11px] font-semibold uppercase text-gray-500">
                        Monthly <span className="text-green-600">(-10%)</span>
                      </p>
                      <p className="mt-0.5 text-sm font-bold text-neutral-900">
                        AED {car.monthly}{" "}
                        <span className="text-xs font-normal text-gray-500">/mo</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Specs Grid */}
                <div className="mt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Vehicle Specifications
                  </h4>
                  <div className="mt-2.5 grid grid-cols-2 sm:grid-cols-3 gap-2">
                    <div className="flex items-center gap-2 rounded-lg bg-gray-50 p-2.5">
                      <FaRoad className="h-4 w-4 shrink-0 text-[#D41331]" />
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase text-gray-400 font-medium">Mileage</p>
                        <p className="truncate text-xs font-bold text-neutral-800">
                          {car.kmLimit.replace(" limit per day", "/day")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 rounded-lg bg-gray-50 p-2.5">
                      <FaCogs className="h-4 w-4 shrink-0 text-[#D41331]" />
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase text-gray-400 font-medium">Transmission</p>
                        <p className="truncate text-xs font-bold text-neutral-800">
                          {car.transmission || "Automatic"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 rounded-lg bg-gray-50 p-2.5">
                      <FaUsers className="h-4 w-4 shrink-0 text-[#D41331]" />
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase text-gray-400 font-medium">Capacity</p>
                        <p className="truncate text-xs font-bold text-neutral-800">
                          {car.seats || "5 Seats"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 rounded-lg bg-gray-50 p-2.5">
                      <FaGasPump className="h-4 w-4 shrink-0 text-[#D41331]" />
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase text-gray-400 font-medium">Fuel Type</p>
                        <p className="truncate text-xs font-bold text-neutral-800">
                          {car.fuel || "Petrol"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 rounded-lg bg-gray-50 p-2.5">
                      <FaSuitcase className="h-4 w-4 shrink-0 text-[#D41331]" />
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase text-gray-400 font-medium">Luggage</p>
                        <p className="truncate text-xs font-bold text-neutral-800">
                          {car.luggage || "2 Bags"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 rounded-lg bg-gray-50 p-2.5">
                      <LuGauge className="h-4 w-4 shrink-0 text-[#D41331]" />
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase text-gray-400 font-medium">Engine</p>
                        <p className="truncate text-xs font-bold text-neutral-800">
                          {car.engine || "1.6L Petrol"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                {car.description && (
                  <div className="mt-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      About this Car
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {car.description}
                    </p>
                  </div>
                )}

                {/* Included Perks */}
                <div className="mt-4 rounded-xl bg-gray-50 p-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-neutral-800">
                    <LuShieldCheck className="h-4 w-4 text-green-600" />
                    <span>Free Cancellation &middot; Comprehensive Insurance &middot; 24/7 Roadside Assistance</span>
                  </div>
                </div>
              </div>

              {/* Sticky Action Footer */}
              <div className="mt-6 flex flex-col sm:flex-row items-center gap-2.5 border-t border-gray-100 pt-4">
                <a
                  href={`tel:${phone}`}
                  className="flex h-12 w-full sm:w-12 shrink-0 items-center justify-center rounded-xl border border-gray-200 text-neutral-700 transition hover:border-[#D41331] hover:bg-red-50 hover:text-[#D41331]"
                  aria-label="Call to Book"
                  title="Call to Book"
                >
                  <LuPhone className="h-5 w-5" />
                  <span className="sm:hidden ml-2 font-semibold text-sm">Call Now</span>
                </a>

                <Button
                  variant="green"
                  onClick={() => setIsWaModalOpen(true)}
                  className="h-12 w-full flex-1 rounded-xl font-bold"
                >
                  <FaWhatsapp className="h-5 w-5" />
                  WhatsApp
                </Button>

                <Button
                  variant="primary"
                  onClick={() => setIsWaModalOpen(true)}
                  className="h-12 w-full flex-1 rounded-xl font-bold"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Modal */}
      <WhatsAppModal
        isOpen={isWaModalOpen}
        onClose={() => setIsWaModalOpen(false)}
        phone={phone}
        whatsappNumber={whatsapp}
        carName={car.name}
        carPrice={car.price}
        carImage={currentImage}
      />
    </>
  );
}