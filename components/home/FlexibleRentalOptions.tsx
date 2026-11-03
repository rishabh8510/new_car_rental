const options = [
  {
    title: "Daily Rentals",
    description:
      "Perfect if you need transportation for a couple of days, short business meetings, or quick city outings without a long-term commitment.",
  },
  {
    title: "Monthly Rentals",
    description:
      "An economical choice for long visits, temporary work assignments, or while waiting for delivery of your new personal vehicle.",
  },
  {
    title: "Luxury & VIP Events",
    description:
      "Experience Dubai's upscale lifestyle with premium vehicles for special events, weddings, and business class travel.",
  },
];

export default function FlexibleRentalOptions() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <h2 className="text-center text-3xl font-extrabold text-neutral-900 sm:text-4xl">
          Flexible Rental Options
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {options.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-t-4 border-gray-200 border-t-[#D41331] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
            >
              <h3 className="text-2xl font-medium text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}