import Button from "@/components/ui/Button";

export default function FleetBanner() {
  return (
    <section className="w-full bg-gradient-to-br from-slate-900 to-slate-800 py-20 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-5 text-center lg:px-8">
        {/* Badge */}
        <span className="rounded-full bg-gradient-to-r from-[#D41331] to-[#890018] px-5 py-2 text-xs font-extrabold uppercase tracking-wider text-white shadow-md sm:text-sm">
          Golden Key Car Rental
        </span>

        {/* Heading */}
        <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          Car Rental in Dubai
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg md:text-xl">
          Having transport convenience and reliability for short-term and
          long-term travel, airport transfers, business trips, and holiday
          excursions.
        </p>

        {/* Button */}
        <Button
          href="/fleet"
          variant="primary"
          className="mt-10 px-8 py-4 text-base font-bold sm:text-lg"
        >
          View Fleet
        </Button>
      </div>
    </section>
  );
}
