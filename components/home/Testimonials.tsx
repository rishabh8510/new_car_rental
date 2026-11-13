"use client";

import { useRef } from "react";
import { LuChevronLeft, LuChevronRight, LuCircleCheck } from "react-icons/lu";

/* ---------- Icons ---------- */
const Asterisk = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M10.2 1h3.6v7.3l6.3-3.7 1.8 3.1-6.3 3.7 6.3 3.7-1.8 3.1-6.3-3.7V23h-3.6v-7.3l-6.3 3.7-1.8-3.1 6.3-3.7-6.3-3.7 1.8-3.1 6.3 3.7z" />
  </svg>
);

const Star = ({ filled }: { filled: boolean }) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
    <path
      d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"
      fill={filled ? "#D41331" : "none"}
      stroke="#D41331"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

/* ---------- Customer Testimonials Data ---------- */
const testimonials = [
  {
    name: "Rashid Al-Maktoum",
    role: "Business Executive, Dubai",
    rating: 5,
    car: "Mitsubishi Outlander 2025",
    text: "Booked a Mitsubishi Outlander for a month for our corporate team in Dubai. The vehicle was spotless, delivered right to our office within 2 hours. Seamless documentation and zero deposit hassle. Truly the most reliable monthly rental in Dubai!",
  },
  {
    name: "Sarah Jenkins",
    role: "Tourist from UK",
    rating: 5,
    car: "MG 5 2025",
    text: "Rented an MG 5 for our two-week holiday across Dubai and Abu Dhabi. Excellent fuel economy, cold AC, and pristine condition. Their customer support on WhatsApp was instant whenever we had questions. Highly recommend 777 Drive!",
  },
  {
    name: "Mohammed Tariq",
    role: "Dubai Resident & Entrepreneur",
    rating: 5,
    car: "Mitsubishi ASX 2025",
    text: "I've been renting cars in Dubai for over 4 years, and 777 Drive stands out for honesty. Zero hidden charges, transparent weekly and monthly rates, and very well-maintained cars. The delivery and return were completely effortless.",
  },
  {
    name: "Elena Rostova",
    role: "Frequent UAE Business Traveler",
    rating: 5,
    car: "Nissan Sunny 2024",
    text: "Super smooth rental process! The car was delivered directly to Dubai International Airport (DXB). Clean, modern interior with comprehensive insurance included. The 777 Drive team was extremely polite and professional.",
  },
  {
    name: "David Chen",
    role: "Consultant, Dubai Marina",
    rating: 5,
    car: "Mitsubishi Attrage",
    text: "Great experience with their flexible monthly rental options. Competitive pricing without long-term bank commitments or lock-ins. 777 Drive makes corporate and personal vehicle rental completely painless.",
  },
];

/* ---------- Component ---------- */
export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    const el = sliderRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 24 : el.clientWidth;
    el.scrollBy({ left: dir === "next" ? step : -step, behavior: "smooth" });
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-12 md:py-16 lg:py-20">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-2 text-[#D41331]">
            <Asterisk className="h-3.5 w-3.5" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">
              Customer Reviews
            </span>
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            What Our Clients Say About Us
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            Real feedback from tourists, residents, and corporate businesses who
            rely on 777 Drive for car rentals in Dubai.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div
          ref={sliderRef}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((item) => {
            const initials = item.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2);

            return (
              <div
                key={item.name}
                className="flex min-w-full snap-start flex-col justify-between rounded-2xl border border-gray-100 bg-white p-7 shadow-xs transition hover:border-red-200 hover:shadow-md md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)]"
              >
                <div>
                  {/* Top: Stars & Verified Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <Star key={n} filled={n <= item.rating} />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-0.5 text-[11px] font-semibold text-green-700">
                      <LuCircleCheck className="h-3 w-3 text-green-600" />
                      Verified Rental
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="mt-5 text-sm sm:text-base leading-relaxed text-gray-600">
                    &ldquo;{item.text}&rdquo;
                  </p>
                </div>

                {/* Reviewer Details */}
                <div className="mt-6 flex items-center gap-3.5 border-t border-gray-100 pt-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#D41331] to-[#890018] text-sm font-bold text-white shadow-xs">
                    {initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-base font-bold text-neutral-900">
                      {item.name}
                    </h3>
                    <p className="truncate text-xs text-gray-500">{item.role}</p>
                    <p className="truncate text-[11px] font-semibold text-[#D41331]">
                      Rented: {item.car}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => scroll("prev")}
            aria-label="Previous testimonial"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#D41331] to-[#890018] text-white shadow-md transition hover:opacity-90 cursor-pointer"
          >
            <LuChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={() => scroll("next")}
            aria-label="Next testimonial"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#D41331] to-[#890018] text-white shadow-md transition hover:opacity-90 cursor-pointer"
          >
            <LuChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
