import Image from "next/image";
import type { ReactNode } from "react";

/* ---------- Icons ---------- */
const Asterisk = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M10.2 1h3.6v7.3l6.3-3.7 1.8 3.1-6.3 3.7 6.3 3.7-1.8 3.1-6.3-3.7V23h-3.6v-7.3l-6.3 3.7-1.8-3.1 6.3-3.7-6.3-3.7 1.8-3.1 6.3 3.7z" />
  </svg>
);

const CarIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 15v-3l1.6-4A2 2 0 017.5 6.7h9a2 2 0 011.9 1.3L20 12v3" />
    <path d="M3 15h18v3a1 1 0 01-1 1h-1.5a1 1 0 01-1-1v-1h-11v1a1 1 0 01-1 1H4a1 1 0 01-1-1z" />
    <circle cx="7.5" cy="13" r="0.8" fill="currentColor" />
    <circle cx="16.5" cy="13" r="0.8" fill="currentColor" />
  </svg>
);

const WrenchIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14.7 6.3a4 4 0 005 5l-8.9 8.9a2.1 2.1 0 01-3-3L16.7 8.3" />
    <path d="M14.7 6.3a4 4 0 015-1.4l-2.3 2.3.6 2.1 2.1.6 2.3-2.3" />
  </svg>
);

const ShieldIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
    <rect x="9.5" y="9" width="5" height="6" rx="1" />
  </svg>
);

const ChartIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 20v-5M10 20v-8M15 20v-4M20 20V9" />
    <path d="M4 10l5-4 3 2 6-5" />
    <path d="M14 3h4v4" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true">
    <circle cx="12" cy="12" r="11" fill="#D41331" />
    <path d="M7 12.5l3.2 3.2L17 9" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ---------- Data ---------- */
type PurposeCard = {
  title: string;
  desc: string;
  icon: ReactNode;
  variant: "highlight" | "light";
};

const purposeCards: PurposeCard[] = [
  {
    title: "Business Mobility",
    desc: "Keep your teams moving with reliable, well-maintained vehicles available whenever and wherever you need them.",
    icon: <CarIcon className="h-6 w-6" />,
    variant: "highlight",
  },
  {
    title: "Zero Maintenance Burden",
    desc: "We handle all maintenance, repairs, servicing, and upkeep so you can focus 100% on your core operations.",
    icon: <WrenchIcon className="h-6 w-6" />,
    variant: "light",
  },
  {
    title: "Full Compliance",
    desc: "RTA registration, comprehensive insurance, and legal licensing managed on your behalf for total peace of mind.",
    icon: <ShieldIcon className="h-6 w-6" />,
    variant: "light",
  },
  {
    title: "Growth Support",
    desc: "Scale your fleet up or down smoothly as your business evolves with customizable, flexible contract terms.",
    icon: <ChartIcon className="h-6 w-6" />,
    variant: "highlight",
  },
];

const checkPoints = [
  "Customized operational requirements and daily demands",
  "Project timelines, seasonal surge support, and event needs",
  "Budget-friendly rates and scalable fleet size targets",
  "Dedicated fleet manager and 24/7 roadside assistance",
];

const bottomCards = [
  {
    title: "Partner-Centric",
    desc: "We build long-term relationships, not just transactional rentals. Your operational success is our priority.",
  },
  {
    title: "Cost Predictability",
    desc: "Monthly and annual contracts provide fixed, transparent costs with zero unexpected depreciation expenses.",
  },
  {
    title: "Tailored Fleets",
    desc: "We match exact vehicle categories, seat capacity, and specs to your precise business operations in the UAE.",
  },
  {
    title: "Scalable & Flexible",
    desc: "Easily adjust fleet quantities and terms as projects expand or requirements shift throughout the year.",
  },
];

/* ---------- Component ---------- */
const OurPurpose = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-2 text-[#D41331]">
            <Asterisk className="h-3.5 w-3.5" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">
              Our Purpose
            </span>
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Simplifying Business Mobility
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            At 777 Drive Rent a Car, we believe businesses should focus on what
            they do best—not on managing vehicle fleets. We exist to remove the
            complexity, cost, and distraction of vehicle ownership, giving you
            the freedom to operate efficiently and grow confidently.
          </p>
        </div>

        {/* Purpose Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {purposeCards.map((card) => {
            const isHighlight = card.variant === "highlight";
            return (
              <div
                key={card.title}
                className={`flex items-center gap-5 rounded-2xl p-6 transition shadow-sm hover:shadow-md ${
                  isHighlight
                    ? "bg-gradient-to-r from-[#D41331] to-[#890018] text-white"
                    : "border border-gray-100 bg-slate-50 text-neutral-900"
                }`}
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-xs ${
                    isHighlight
                      ? "bg-white text-[#D41331]"
                      : "bg-red-50 text-[#D41331]"
                  }`}
                >
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold sm:text-xl">{card.title}</h3>
                  <p
                    className={`mt-1 text-sm leading-relaxed ${
                      isHighlight ? "text-white/90" : "text-gray-600"
                    }`}
                  >
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Image + Content */}
        <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative mx-auto aspect-4/3 w-full max-w-[560px] overflow-hidden rounded-2xl border border-gray-100 shadow-md">
            <Image
              src="/images/purpose.jpg"
              alt="Premium corporate SUV rental in Dubai"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 90vw"
            />
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900">
              A True Flexible Monthly Fleet Partner
            </h3>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Unlike traditional rental companies focused strictly on short-term
              tourist transactions, we specialize in building lasting partnerships
              with businesses that need reliable mobility solutions month after
              month, year after year.
            </p>
            <ul className="mt-6 space-y-3.5">
              {checkPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 text-sm sm:text-base font-medium text-neutral-800"
                >
                  <CheckIcon />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {bottomCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-gray-100 bg-slate-50 p-6 shadow-xs transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-[#D41331] to-[#890018] text-white shadow-xs">
                <ShieldIcon className="h-5 w-5" />
              </div>
              <h4 className="mt-4 text-base sm:text-lg font-bold text-neutral-900">
                {card.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPurpose;
