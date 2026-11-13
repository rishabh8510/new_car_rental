import Image from "next/image";

const features = [
  {
    title: "Easy Booking Process",
    desc: "We have optimized the booking process so that our clients experience the fastest, easiest, and most transparent service in Dubai.",
    icon: (
      <svg viewBox="0 0 64 64" className="h-10 w-10 text-neutral-900" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="12" y="6" width="26" height="46" rx="3" />
        <rect x="16" y="12" width="18" height="10" rx="1.5" />
        <circle cx="26" cy="34" r="6" stroke="#D41331" />
        <path d="M23.5 34l2 2 3.5-4" stroke="#D41331" />
        <path d="M22 46h8" stroke="#D41331" />
        <path d="M36 38l-2-6a2 2 0 013.6-1l2 4 6 1.5a4 4 0 012.8 5l-2 7H36z" fill="#fff" />
      </svg>
    ),
  },
  {
    title: "Convenient Pick-Up & Return Process",
    desc: "Flexible pick-up and delivery across Dubai with streamlined documentation and zero hidden return surprises.",
    icon: (
      <svg viewBox="0 0 64 64" className="h-10 w-10 text-neutral-900" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 40v-8l5-10a4 4 0 013.6-2.2h17.8a4 4 0 013.6 2.2L43 32v8" />
        <path d="M8 40h6M30 40h6" />
        <circle cx="16" cy="42" r="4" />
        <path d="M4 28h8M2 34h8" />
        <path d="M46 28l10 4v8c0 7-5 11-10 13-5-2-10-6-10-13v-8z" fill="#fff" />
        <path d="M41 40l4 4 7-8" stroke="#D41331" />
      </svg>
    ),
  },
];

const Asterisk = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M10.2 1h3.6v7.3l6.3-3.7 1.8 3.1-6.3 3.7 6.3 3.7-1.8 3.1-6.3-3.7V23h-3.6v-7.3l-6.3 3.7-1.8-3.1 6.3-3.7-6.3-3.7 1.8-3.1 6.3 3.7z" />
  </svg>
);

const AboutSection = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        {/* Left - Images */}
        <div className="relative mx-auto h-[360px] w-full max-w-[320px] sm:h-[460px] sm:max-w-[460px] md:h-[540px] md:max-w-[520px] lg:h-[620px] lg:max-w-[560px]">
          {/* Big image */}
          <div className="absolute left-0 top-0 h-[78%] w-[66%] rounded-t-full rounded-bl-[45%] rounded-br-[30%] border border-gray-200 p-2 sm:p-3">
            <div className="relative h-full w-full overflow-hidden rounded-t-full rounded-bl-[45%] rounded-br-[30%]">
              <Image
                src="/images/about-section-first.jpeg"
                alt="Happy customer in car"
                fill
                sizes="(min-width: 1024px) 370px, (min-width: 768px) 340px, (min-width: 640px) 300px, 210px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Small image */}
          <div className="absolute bottom-0 right-0 h-[62%] w-[52%] rounded-t-full border border-gray-300 bg-white p-1.5 sm:p-2">
            <div className="relative h-full w-full overflow-hidden rounded-t-full">
              <Image
                src="/images/about-section-second.jpeg"
                alt="Car rental agent"
                fill
                sizes="(min-width: 1024px) 290px, (min-width: 768px) 270px, (min-width: 640px) 240px, 165px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Brand asterisk */}
          <Asterisk className="absolute right-[8%] top-[14%] h-10 w-10 text-[#D41331] sm:h-16 sm:w-16 lg:h-20 lg:w-20" />

          {/* Navy 4-point star */}
          <svg
            viewBox="0 0 24 24"
            className="absolute -bottom-2 left-[40%] h-8 w-8 text-[#111a33] sm:h-10 sm:w-10 lg:h-12 lg:w-12"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 0c1 7 5 11 12 12-7 1-11 5-12 12-1-7-5-11-12-12C7 11 11 7 12 0z" />
          </svg>
        </div>

        {/* Right - Content */}
        <div>
          <div className="flex items-center gap-2 text-[#D41331]">
            <Asterisk className="h-3.5 w-3.5" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">
              About Us
            </span>
          </div>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Your Trusted Partner in Reliable Car Rental
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            777 Drive Rent a Car provides flexible, cost-effective vehicle rental
            solutions across Dubai. Whether for daily commutes, monthly business
            leasing, or leisure trips, we deliver quality cars with honest pricing.
          </p>

          <div className="mt-8 space-y-6">
            {features.map((item, index) => (
              <div
                key={item.title}
                className={`flex items-start gap-4 py-5 ${
                  index !== features.length - 1 ? "border-b border-gray-100" : ""
                } ${index === 0 ? "pt-0" : ""}`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#D41331]">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-neutral-900 sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm sm:text-base leading-relaxed text-gray-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
