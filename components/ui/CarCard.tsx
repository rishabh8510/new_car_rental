"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaRoad, FaWhatsapp } from "react-icons/fa";
import {
  LuFlame,
  LuHeart,
  LuPhone,
  LuEye,
  LuChevronLeft,
  LuChevronRight,
} from "react-icons/lu";
import Button from "./Button";
import CarModal from "./CarModal";
import WhatsAppModal from "./WhatsAppModal";

export type Car = {
  id: number | string;
  name: string;
  slug: string;
  image: string;
  images?: string[];
  badge?: string;
  oldPrice?: string;
  price: string;
  weekly: string;
  monthly: string;
  kmLimit: string;
  transmission?: string;
  seats?: string;
  doors?: string;
  fuel?: string;
  engine?: string;
  luggage?: string;
  deposit?: string;
  insurance?: string;
  description?: string;
  features?: string[];
};

type CarCardProps = {
  car: Car;
  basePath?: string;
  phone?: string;
  whatsapp?: string;
  onView?: (car: Car) => void;
};

export default function CarCard({
  car,
  phone = "+971501234567",
  whatsapp = "971501234567",
  onView,
}: CarCardProps) {
  const [liked, setLiked] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWaOpen, setIsWaOpen] = useState(false);

  const images: string[] =
    car.images && car.images.length > 0 ? car.images : [car.image];

  // Auto-scroll images in card when not hovered
  useEffect(() => {
    if (images.length <= 1 || isHovered) return;

    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length, isHovered]);

  const handleOpenModal = () => {
    if (onView) {
      onView(car);
    } else {
      setIsModalOpen(true);
    }
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev + 1) % images.length);
  };

  const currentImage = images[activeIdx] || car.image;

  return (
    <>
      <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition hover:-translate-y-1 hover:border-red-200 hover:shadow-xl">
        {/* Image Container with Auto-scroll */}
        <div
          className="relative h-56 w-full cursor-pointer overflow-hidden bg-neutral-900"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleOpenModal}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleOpenModal();
            }
          }}
          aria-label={`View details and photos of ${car.name}`}
        >
          <Image
            src={currentImage}
            alt={car.name}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Badge */}
          {car.badge && (
            <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#D41331] to-[#890018] px-3 py-1.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-md">
              <LuFlame className="h-3.5 w-3.5 text-white" />
              {car.badge}
            </span>
          )}

          {/* Wishlist Button */}
          <button
            type="button"
            aria-label="Add to wishlist"
            onClick={(e) => {
              e.stopPropagation();
              setLiked((v) => !v);
            }}
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-500 shadow transition hover:bg-white hover:scale-110"
          >
            <LuHeart
              className={`h-4.5 w-4.5 ${liked ? "fill-red-600 text-red-600" : ""}`}
            />
          </button>

          {/* Left / Right manual image controls on hover */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition hover:bg-[#D41331] group-hover:opacity-100"
              >
                <LuChevronLeft className="h-4.5 w-4.5" />
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition hover:bg-[#D41331] group-hover:opacity-100"
              >
                <LuChevronRight className="h-4.5 w-4.5" />
              </button>
            </>
          )}

          {/* Quick View Button on Hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-neutral-900 shadow-lg backdrop-blur-xs transition hover:bg-white">
              <LuEye className="h-4 w-4 text-[#D41331]" />
              View Details
            </span>
          </div>

          {/* Bottom Indicators */}
          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs text-white">
            {images.length > 1 ? (
              <span className="rounded-full bg-black/60 px-2 py-0.5 text-[11px] font-medium backdrop-blur-xs">
                {activeIdx + 1} / {images.length}
              </span>
            ) : (
              <span />
            )}

            {images.length > 1 && (
              <div className="flex gap-1">
                {images.slice(0, 5).map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all ${
                      i === activeIdx % 5
                        ? "w-4 bg-white"
                        : "w-1.5 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-4">
          <h3
            onClick={handleOpenModal}
            className="cursor-pointer truncate text-lg font-bold text-neutral-900 transition hover:text-[#D41331]"
          >
            {car.name.trim()}
          </h3>

          {/* Price */}
          <div className="mt-2 flex min-h-12 flex-col items-end justify-end text-right">
            {car.oldPrice && (
              <span className="text-xs font-medium text-gray-400 line-through">
                AED {car.oldPrice}
              </span>
            )}
            <p className="flex items-baseline gap-1">
              <span className="text-xs font-bold text-[#D41331]">AED</span>
              <span className="text-2xl font-extrabold text-[#D41331]">
                {car.price}
              </span>
              <span className="text-xs text-gray-500">/ day</span>
            </p>
          </div>

          {/* Weekly / Monthly */}
          <div className="mt-3.5 grid grid-cols-2 gap-2 rounded-xl border border-gray-100 bg-slate-50 p-2.5">
            <div>
              <p className="text-[10px] font-medium uppercase text-gray-500">
                Weekly (-5%)
              </p>
              <p className="mt-0.5 text-xs sm:text-sm font-bold text-neutral-900">
                AED {car.weekly}{" "}
                <span className="text-[10px] font-normal text-gray-500">/wk</span>
              </p>
            </div>
            <div>
              <p className="text-[10px] font-medium uppercase text-gray-500">
                Monthly (-10%)
              </p>
              <p className="mt-0.5 text-xs sm:text-sm font-bold text-neutral-900">
                AED {car.monthly}{" "}
                <span className="text-[10px] font-normal text-gray-500">/mo</span>
              </p>
            </div>
          </div>

          {/* KM limit */}
          <p className="mt-3.5 flex items-center gap-2 border-b border-gray-100 pb-3 text-xs text-gray-500">
            <FaRoad className="h-3.5 w-3.5 text-gray-400" />
            {car.kmLimit}
          </p>

          {/* Actions */}
          <div className="mt-auto flex items-center gap-2 pt-3.5">
            <a
              href={`tel:${phone}`}
              aria-label="Call"
              onClick={(e) => e.stopPropagation()}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-neutral-700 transition hover:border-[#D41331] hover:bg-red-50 hover:text-[#D41331]"
              title="Call Now"
            >
              <LuPhone className="h-4.5 w-4.5" />
            </a>
            <button
              type="button"
              aria-label="WhatsApp"
              onClick={(e) => {
                e.stopPropagation();
                setIsWaOpen(true);
              }}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-neutral-700 transition hover:border-green-500 hover:bg-green-50 hover:text-green-600 cursor-pointer"
              title="WhatsApp Chat"
            >
              <FaWhatsapp className="h-5 w-5" />
            </button>
            <Button
              type="button"
              variant="primary"
              onClick={handleOpenModal}
              className="h-10 flex-1 text-xs font-bold uppercase tracking-wider"
            >
              View Details
            </Button>
          </div>
        </div>
      </article>

      {/* Pop-up Modal */}
      <CarModal
        car={car}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        phone={phone}
        whatsapp={whatsapp}
      />

      {/* WhatsApp Modal */}
      <WhatsAppModal
        isOpen={isWaOpen}
        onClose={() => setIsWaOpen(false)}
        phone={phone}
        whatsappNumber={whatsapp}
        carName={car.name}
        carPrice={car.price}
        carImage={currentImage}
      />
    </>
  );
}
