"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import CarCard, { type Car } from "@/components/ui/CarCard";
import budgetCarsData from "@/data/budgetCars.json";
// import newCarsData from "@/data/NewCars.json";
// import sportsCarsData from "@/data/sportCar.json";
import { LuSparkles } from "react-icons/lu";

type CarCategory = "all" | "budget" | "new" | "sports";

type FleetCar = Car & { category: "budget" | "new" | "sports" };

const budgetCars: FleetCar[] = (budgetCarsData as Car[]).map((car) => ({
  ...car,
  category: "budget",
}));

// Temporarily commented out - uncomment when unhiding
// const newCars: FleetCar[] = (newCarsData as Car[]).map((car) => ({
//   ...car,
//   category: "new",
// }));
// const sportsCars: FleetCar[] = (sportsCarsData as Car[]).map((car) => ({
//   ...car,
//   category: "sports",
// }));

const allCars: FleetCar[] = [
  ...budgetCars,
  // ...newCars,
  // ...sportsCars,
];

const categories: { id: CarCategory; label: string; count: number }[] = [
  { id: "all", label: "All Cars", count: allCars.length },
  { id: "budget", label: "Budget Cars", count: budgetCars.length },
  // Temporarily hidden filter tabs - uncomment to re-enable
  // { id: "new", label: "New Cars", count: 6 },
  // { id: "sports", label: "Sports Cars", count: 6 },
];

function FleetCarsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState<CarCategory | null>(null);

  // Derive active category from user interaction, query param, or default to "all"
  const activeCategory: CarCategory =
    selectedCategory ??
    (categoryParam === "budget"
      ? "budget"
      : "all");

  const handleCategoryChange = (cat: CarCategory) => {
    setSelectedCategory(cat);
    if (cat === "all") {
      router.push("/fleet", { scroll: false });
    } else {
      router.push(`/fleet?category=${cat}`, { scroll: false });
    }
  };

  const filteredCars =
    activeCategory === "all"
      ? allCars
      : allCars.filter((car) => car.category === activeCategory);

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-100 pb-8">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D41331]">
              <LuSparkles className="h-4 w-4" />
              <span>Explore Our Dubai Fleet</span>
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Available Cars for Rent
            </h2>
            <p className="mt-2 text-base text-gray-500">
              Showing {filteredCars.length} vehicles matching your selection.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm transition cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-[#D41331] to-[#890018] text-white font-bold shadow-md"
                      : "border border-gray-200 bg-slate-50 text-neutral-700 font-semibold hover:border-[#D41331] hover:bg-red-50 hover:text-[#D41331]"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] ${
                      isActive
                        ? "bg-white/25 text-white"
                        : "bg-gray-200/80 text-gray-600"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Cars Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {filteredCars.map((car) => (
            <div key={`${car.category}-${car.id}`} className="h-full">
              <CarCard car={car} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function FleetCarsSection() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-sm font-semibold text-gray-400">
          Loading fleet...
        </div>
      }
    >
      <FleetCarsContent />
    </Suspense>
  );
}
