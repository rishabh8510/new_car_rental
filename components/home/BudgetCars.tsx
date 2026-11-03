"use client";

import { useRef } from "react";
import Link from "next/link";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import CarCard, { type Car } from "../ui/CarCard";
import budgetCars from "@/data/budgetCars.json";
import { MdArrowOutward } from "react-icons/md";

const cars = budgetCars as Car[];

export default function BudgetCars() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({
      left: dir === "next" ? el.clientWidth : -el.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-white py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-neutral-900">Budget Cars</h2>
            <p className="mt-2 text-base text-gray-500">
              Reliable and budget-friendly rentals — Summer Offer in Dubai.
            </p>
          </div>

          <Link
            href="/fleet/budget-cars"
            className="inline-flex shrink-0 items-center gap-1.5 text-base font-bold text-neutral-900 transition hover:text-[#D41331]"
          >
            View All <MdArrowOutward className="h-5 w-5" />
          </Link>
        </div>

        {/* Slider */}
        <div className="relative mt-8">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => scroll("prev")}
            className="absolute -left-4 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-neutral-900 shadow-lg transition hover:bg-[#D41331] hover:text-white md:flex"
          >
            <LuChevronLeft className="h-6 w-6" />
          </button>

          <div
            ref={trackRef}
            className="-mx-2.5 flex snap-x snap-mandatory overflow-x-auto scroll-smooth pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {cars.map((car) => (
              <div
                key={car.id}
                className="shrink-0 basis-full snap-start px-2.5 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <CarCard car={car} />
              </div>
            ))}
          </div>

          <button
            type="button"
            aria-label="Next"
            onClick={() => scroll("next")}
            className="absolute -right-4 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-neutral-900 shadow-lg transition hover:bg-[#D41331] hover:text-white md:flex"
          >
            <LuChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}