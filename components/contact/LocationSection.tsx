const Asterisk = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M10.2 1h3.6v7.3l6.3-3.7 1.8 3.1-6.3 3.7 6.3 3.7-1.8 3.1-6.3-3.7V23h-3.6v-7.3l-6.3 3.7-1.8-3.1 6.3-3.7-6.3-3.7 1.8-3.1 6.3 3.7z" />
  </svg>
);

const MAP_QUERY = "133 46th Street, Hor Al Anz, Deira, Dubai, UAE";
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  MAP_QUERY
)}&z=15&output=embed`;

const LocationSection = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-2 text-[#D41331]">
            <Asterisk className="h-3.5 w-3.5" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">
              Location
            </span>
          </div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            How to Reach Our Location
          </h2>
          <p className="mt-3 text-base text-gray-500 sm:text-lg">
            Visit our office located at 133 46th Street, Hor Al Anz, Deira, Dubai, UAE.
          </p>
        </div>

        {/* Map */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 shadow-sm lg:mt-12">
          <iframe
            title="Our Dubai office location"
            src={MAP_SRC}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="block h-[340px] w-full border-0 sm:h-[420px] lg:h-[480px]"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
