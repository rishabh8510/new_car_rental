"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Archivo } from "next/font/google";
import { FaWhatsapp } from "react-icons/fa";
import { LuShieldCheck, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import Button from "@/components/ui/Button";
import CarModal from "./CarModal";
import WhatsAppModal from "./WhatsAppModal";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export type Car = {
  id: number | string;
  name: string;
  slug: string;
  image: string;
  images?: string[];
  badge?: string;
  currency?: string;
  ac?: string;
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
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWaOpen, setIsWaOpen] = useState(false);

  const images: string[] =
    car.images && car.images.length > 0 ? car.images : [car.image];

  // Auto-scroll images when not hovered
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

  // Sab kuch JSON se: seats · transmission · ac
  const subtitle = [car.seats, car.transmission, car.ac]
    .filter(Boolean)
    .join(" · ");

  const rates = [
    { label: "Daily", value: car.price },
    { label: "Weekly", value: car.weekly },
    { label: "Monthly", value: car.monthly },
  ];

  return (
    <>
      <article
        className={`${archivo.className} group flex h-full flex-col overflow-hidden border-2 border-neutral-400 bg-[#F3F1F2] transition hover:shadow-xl`}
      >
        {/* Image */}
        <div
          className="relative aspect-[8/5] w-full cursor-pointer overflow-hidden bg-neutral-900"
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
            className="object-cover"
          />

          {/* Badge */}
          {car.badge && (
            <span className="absolute left-3 top-3 border border-[#7B1F25] bg-white/95 px-3 py-1.5 text-sm font-medium leading-none text-[#7B1F25]">
              {car.badge}
            </span>
          )}

          {/* Manual image controls on hover */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition hover:bg-[#7B2427] group-hover:opacity-100"
              >
                <LuChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition hover:bg-[#7B2427] group-hover:opacity-100"
              >
                <LuChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          {/* Deposit pill (JSON: car.deposit) */}
          {car.deposit && (
            <span className="inline-flex w-fit max-w-full items-center gap-1.5 rounded-full border border-green-300 bg-green-50 px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide text-green-900">
              <LuShieldCheck className="h-3.5 w-3.5 shrink-0 text-green-700" />
              <span className="truncate">{car.deposit}</span>
            </span>
          )}

          {/* Title */}
          <h3
            onClick={handleOpenModal}
            className="mt-4 cursor-pointer text-2xl font-extrabold leading-tight tracking-tight text-neutral-900"
          >
            {car.name.trim()}
          </h3>

          {/* Subtitle */}
          <p className="mt-2.5 text-base text-neutral-500">{subtitle}</p>

          {/* Divider */}
          <div className="mt-4 border-t-[3px] border-neutral-400" />

          {/* Rates */}
          <div className="flex flex-col">
            {rates.map((r, i) => (
              <div
                key={r.label}
                className={`flex items-center justify-between py-3 ${
                  i < rates.length - 1 ? "border-b border-neutral-300" : ""
                }`}
              >
                <span className="text-sm font-medium uppercase tracking-wider text-neutral-500">
                  {r.label}
                </span>
                <span className="text-sm">
                  <span className="font-bold tracking-wider text-neutral-500">
                    {r.value}
                  </span>{" "}
                  <span className="font-bold text-neutral-900">
                    {car.currency}
                  </span>
                </span>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-auto flex items-stretch gap-3 pt-3">
            <Button
              variant="primary"
              onClick={handleOpenModal}
              className="h-11 flex-1 rounded-none text-base font-bold"
            >
              Book
            </Button>
            <button
              type="button"
              aria-label="WhatsApp"
              title="WhatsApp Chat"
              onClick={(e) => {
                e.stopPropagation();
                setIsWaOpen(true);
              }}
              className="flex h-11 w-14 shrink-0 cursor-pointer items-center justify-center bg-[#5BCB6B] text-white transition hover:brightness-110"
            >
              <FaWhatsapp className="h-6 w-6" />
            </button>
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