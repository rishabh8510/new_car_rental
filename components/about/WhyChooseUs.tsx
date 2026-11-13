import Image from "next/image";
import type { ReactNode } from "react";

/* ---------- Icons ---------- */
const Asterisk = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M10.2 1h3.6v7.3l6.3-3.7 1.8 3.1-6.3 3.7 6.3 3.7-1.8 3.1-6.3-3.7V23h-3.6v-7.3l-6.3 3.7-1.8-3.1 6.3-3.7-6.3-3.7 1.8-3.1 6.3 3.7z" />
  </svg>
);

const svgBase = {
  viewBox: "0 0 48 48",
  className: "h-6 w-6 text-neutral-900",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const BriefcaseIcon = () => (
  <svg {...svgBase}>
    <rect x="6" y="14" width="36" height="24" rx="3" />
    <path d="M17 14v-3a3 3 0 013-3h8a3 3 0 013 3v3" />
    <path d="M6 25h36" />
    <rect x="21" y="22" width="6" height="6" rx="1" fill="#fff" stroke="#D41331" />
  </svg>
);

const KeyIcon = () => (
  <svg {...svgBase}>
    <circle cx="16" cy="24" r="8" />
    <circle cx="16" cy="24" r="2.5" stroke="#D41331" />
    <path d="M24 24h18" />
    <path d="M36 24v6M42 24v4" />
  </svg>
);

const FleetIcon = () => (
  <svg {...svgBase}>
    <circle cx="24" cy="12" r="5" stroke="#D41331" />
    <path d="M24 5v2M24 17v2M17 12h2M29 12h2" stroke="#D41331" />
    <path d="M8 38v-6l3-7a3 3 0 012.8-2h20.4a3 3 0 012.8 2l3 7v6" />
    <path d="M6 38h36v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-2H11v2a1 1 0 01-1 1H7a1 1 0 01-1-1z" />
    <circle cx="13" cy="33" r="1.2" fill="#111" />
    <circle cx="35" cy="33" r="1.2" fill="#111" />
  </svg>
);

const TagIcon = () => (
  <svg {...svgBase}>
    <path d="M6 24V8a2 2 0 012-2h16l18 18-18 18z" />
    <circle cx="15" cy="15" r="3" stroke="#D41331" />
    <path d="M22 26l6-6M24 32l8-8" />
  </svg>
);

const SupportIcon = () => (
  <svg {...svgBase}>
    <circle cx="24" cy="16" r="8" />
    <path d="M14 16a10 10 0 0120 0" />
    <path d="M13 17v4a2 2 0 002 2h1v-7h-1a2 2 0 00-2 2zM35 17v4a2 2 0 01-2 2h-1v-7h1a2 2 0 012 2z" fill="#fff" />
    <path d="M20 22c1 2 3 3 4 3s3-1 4-3" stroke="#D41331" />
    <path d="M10 42c0-7 6-11 14-11s14 4 14 11z" />
    <path d="M24 31v6" />
  </svg>
);

const SafetyIcon = () => (
  <svg {...svgBase}>
    <path d="M6 30v-4l3-6a3 3 0 012.7-1.7h13.6a3 3 0 012.7 1.7l3 6v4" />
    <path d="M4 30h26v3a1 1 0 01-1 1h-2a1 1 0 01-1-1v-1H8v1a1 1 0 01-1 1H5a1 1 0 01-1-1z" />
    <path d="M34 18l9 3v6c0 5-4 8-9 10-5-2-9-5-9-10v-6z" fill="#fff" />
    <path d="M30.5 27l3 3 5-6" stroke="#D41331" />
  </svg>
);

/* ---------- Data ---------- */
type Feature = { title: string; desc: string; icon: ReactNode };

const leftFeatures: Feature[] = [
  {
    title: "B2B-First Rental Model",
    desc: "Built from the ground up for businesses with flexible billing, transparent terms, and zero complexity.",
    icon: <BriefcaseIcon />,
  },
  {
    title: "Zero Ownership Hassle",
    desc: "You get the mobility you need without heavy capital investment, interest payments, or depreciation concerns.",
    icon: <KeyIcon />,
  },
  {
    title: "Modern, Well-Maintained Fleet",
    desc: "Every vehicle undergoes strict multi-point safety inspections to ensure optimal performance and comfort.",
    icon: <FleetIcon />,
  },
];

const rightFeatures: Feature[] = [
  {
    title: "Transparent Pricing",
    desc: "Clear, all-inclusive rates with zero hidden charges, upfront deposits, or unexpected return fees.",
    icon: <TagIcon />,
  },
  {
    title: "Dedicated Account Support",
    desc: "A personal point of contact ensuring quick response times, priority swaps, and operational coordination.",
    icon: <SupportIcon />,
  },
  {
    title: "Full Insurance & Assistance",
    desc: "Comprehensive RTA-approved insurance coverage with 24/7 emergency roadside assistance across the UAE.",
    icon: <SafetyIcon />,
  },
];

/* ---------- Sub component ---------- */
const FeatureList = ({ items }: { items: Feature[] }) => (
  <div className="flex flex-col justify-center space-y-2">
    {items.map((item, index) => (
      <div
        key={item.title}
        className={`flex items-start gap-4 py-5 ${
          index !== items.length - 1 ? "border-b border-gray-100" : ""
        } ${index === 0 ? "pt-0" : ""} ${
          index === items.length - 1 ? "pb-0" : ""
        }`}
      >
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#D41331]">
          {item.icon}
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-bold text-neutral-900">
            {item.title}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-gray-600">
            {item.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
);

/* ---------- Component ---------- */
const WhyChooseUs = () => {
  return (
    <section className="w-full overflow-hidden bg-white py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-2 text-[#D41331]">
            <Asterisk className="h-3.5 w-3.5" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">
              Why Choose Us
            </span>
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Key Reasons Businesses Choose Us
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            We go beyond standard vehicle rentals by offering true flexibility,
            dependability, and tailored corporate solutions.
          </p>
        </div>

        {/* Body */}
        <div className="mt-12 grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10 lg:mt-14 lg:grid-cols-[1fr_auto_1fr] lg:gap-8 xl:gap-12">
          {/* Left features */}
          <div className="order-2 md:order-2 md:col-span-1 lg:order-1 lg:col-span-1">
            <FeatureList items={leftFeatures} />
          </div>

          {/* Center image: capsule skyline + car overlapping */}
          <div className="relative order-1 mx-auto h-[340px] w-[210px] sm:h-[420px] sm:w-[260px] md:order-1 md:col-span-2 md:h-[480px] md:w-[290px] lg:order-2 lg:col-span-1 lg:h-[520px] lg:w-[310px] xl:h-[600px] xl:w-[360px]">
            {/* Capsule (rounded top & bottom) */}
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image
                src="/images/why-choose-img.jpg"
                alt="City skyline"
                fill
                sizes="(min-width: 1280px) 360px, (min-width: 1024px) 310px, (min-width: 768px) 290px, (min-width: 640px) 260px, 210px"
                quality={90}
                className="object-cover"
              />
            </div>

            {/* Car: capsule se chaudi, dono side bahar nikli hui */}
            <Image
              src="/images/mg-5.png"
              alt="Red car"
              width={640}
              height={300}
              quality={90}
              sizes="(min-width: 1280px) 454px, (min-width: 1024px) 390px, (min-width: 768px) 366px, (min-width: 640px) 328px, 265px"
              className="absolute bottom-[9%] left-1/2 h-auto w-[126%] max-w-none -translate-x-1/2"
            />
          </div>

          {/* Right features */}
          <div className="order-3 md:order-3 md:col-span-1 lg:order-3 lg:col-span-1">
            <FeatureList items={rightFeatures} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;