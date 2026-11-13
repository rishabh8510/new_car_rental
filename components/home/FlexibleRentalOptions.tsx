"use client";

import { useState } from "react";
import Image from "next/image";
import { LuChevronDown } from "react-icons/lu";

/* ---------- Asterisk Icon ---------- */
const Asterisk = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M10.2 1h3.6v7.3l6.3-3.7 1.8 3.1-6.3 3.7 6.3 3.7-1.8 3.1-6.3-3.7V23h-3.6v-7.3l-6.3 3.7-1.8-3.1 6.3-3.7-6.3-3.7 1.8-3.1 6.3 3.7z" />
  </svg>
);

const options = [
  {
    title: "Daily Rentals",
    description:
      "Perfect if you need transportation for a couple of days, short business meetings, or quick city outings without a long-term commitment. Comprehensive insurance and instant delivery included.",
  },
  {
    title: "Monthly Rentals",
    description:
      "An economical choice for long visits, temporary work assignments, or while waiting for delivery of your new vehicle. Enjoy 10% monthly discounts with zero maintenance worries.",
  },
  {
    title: "Luxury & VIP Events",
    description:
      "Experience Dubai's upscale lifestyle with premium vehicles for special events, weddings, VIP airport transfers, and executive business class travel.",
  },
];

export default function FlexibleRentalOptions() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-slate-50 border-y border-gray-100 py-12 md:py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8">
        {/* Left - Slanted image panels + car */}
        <div className="relative mx-auto aspect-[948/743] w-full max-w-[640px] lg:max-w-none">
          {/* Left slanted panel */}
          <div className="absolute inset-y-0 left-0 w-[51.3%] overflow-hidden rounded-2xl [clip-path:polygon(0_0,60.6%_0,100%_100%,34.5%_100%)] shadow-md">
            <Image
              src="/images/first.jpg"
              alt="Dubai skyline"
              fill
              sizes="(min-width: 1024px) 35vw, 60vw"
              className="object-cover"
            />
          </div>

          {/* Right slanted panel */}
          <div className="absolute inset-y-0 left-[48.5%] w-[51.5%] overflow-hidden rounded-2xl [clip-path:polygon(0_0,60.4%_0,100%_100%,35%_100%)] shadow-md">
            <Image
              src="/images/second.jpg"
              alt="Dubai city architecture"
              fill
              sizes="(min-width: 1024px) 35vw, 60vw"
              className="object-cover"
            />
          </div>

          {/* Car (overlaps both panels) */}
          <Image
            src="/images/mg-5.png"
            alt="Rental car"
            width={900}
            height={420}
            priority
            className="absolute left-[4.7%] top-[25%] w-[95%] max-w-none drop-shadow-2xl"
          />
        </div>

        {/* Right - Content */}
        <div>
          {/* Eyebrow */}
          <div className="flex items-center gap-2 text-[#D41331]">
            <Asterisk className="h-3.5 w-3.5" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">
              Rental Plans
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Flexible Rental Options
          </h2>

          <p className="mt-3 text-base text-gray-500 sm:text-lg leading-relaxed">
            Choose the rental duration that suits your lifestyle and budget, with
            flexible cancellation and all-inclusive pricing.
          </p>

          {/* Accordion */}
          <div className="mt-8 divide-y divide-gray-200/80 border-t border-b border-gray-200/80">
            {options.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.title} className="transition-colors">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 sm:py-6 text-left cursor-pointer group"
                  >
                    <span
                      className={`text-lg font-bold sm:text-xl transition-colors ${
                        isOpen
                          ? "text-[#D41331]"
                          : "text-neutral-900 group-hover:text-[#D41331]"
                      }`}
                    >
                      {item.title}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all ${
                        isOpen
                          ? "bg-red-50 text-[#D41331] rotate-180"
                          : "bg-gray-100 text-gray-500 group-hover:bg-red-50 group-hover:text-[#D41331]"
                      }`}
                    >
                      <LuChevronDown className="h-5 w-5" />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] pb-5 sm:pb-6" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
