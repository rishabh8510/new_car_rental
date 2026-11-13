// import Image from "next/image";
// import Button from "@/components/ui/Button";

// export default function FleetBanner() {
//   return (
//     <section className="relative w-full overflow-hidden py-20 md:py-28 lg:py-32">
//       {/* Background Image (full width) */}
//       <Image
//         src="/images/banner.jpg"
//         alt="Car Rental in Dubai"
//         fill
//         priority
//         sizes="100vw"
//         className="object-cover object-center"
//       />

//       {/* Dark Overlay for text readability */}
//       <div className="absolute inset-0 bg-black/60" />
//       <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

//       {/* Content (inside max-w-7xl, left aligned) */}
//       <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-5 text-left lg:px-8">
//         {/* Badge */}
//         <span className="rounded-full bg-gradient-to-r from-[#D41331] to-[#890018] px-5 py-2 text-xs uppercase tracking-wider text-white shadow-md sm:text-sm">
//           777 Drive Rent a Car
//         </span>

//         {/* Heading */}
//         <h1 className="mt-6 max-w-2xl text-4xl font-bold text-white sm:text-5xl md:text-6xl">
//           Car Rental in Dubai
//         </h1>

//         {/* Description */}
//         <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl">
//           Having transport convenience and reliability for short-term and
//           long-term travel, airport transfers, business trips, and holiday
//           excursions.
//         </p>

//         {/* Button */}
//         <Button
//           href="/fleet"
//           variant="primary"
//           className="mt-10 px-8 py-4 text-base font-bold sm:text-lg"
//         >
//           View Fleet
//         </Button>
//       </div>
//     </section>
//   );
// }



import Image from "next/image";
import Button from "@/components/ui/Button";

export default function FleetBanner() {
  return (
    <section
      className="relative w-full py-20 md:py-28 lg:py-32"
      style={{ clipPath: "inset(0)" }}
    >
      {/* Fixed Background Image (scroll pe image nahi hilegi) */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/banner.jpg"
          alt="Car Rental in Dubai"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      {/* Content (inside max-w-7xl, left aligned) */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-5 text-left lg:px-8">
        {/* Badge */}
        <span className="rounded-full bg-gradient-to-r from-[#D41331] to-[#890018] px-5 py-2 text-xs uppercase tracking-wider text-white shadow-md sm:text-sm">
          777 Drive Rent a Car
        </span>

        {/* Heading */}
        <h1 className="mt-6 max-w-2xl text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          Car Rental in Dubai
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl">
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