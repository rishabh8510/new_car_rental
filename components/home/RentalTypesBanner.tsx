import { MdCalendarMonth, MdVerifiedUser } from "react-icons/md";

const items = [
  { icon: MdCalendarMonth, lines: ["Daily", "Rental"] },
  { icon: MdCalendarMonth, lines: ["Weekly", "Rental"] },
  { icon: MdCalendarMonth, lines: ["Monthly", "Rental"] },
  { icon: MdVerifiedUser, lines: ["Fully", "Insured"] },
];

export default function RentalTypesBanner() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-5xl px-4 py-8 md:py-10">
        <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-y-0">
          {items.map(({ icon: Icon, lines }, index) => (
            <div
              key={lines.join(" ")}
              className={`flex flex-col items-center justify-center text-center ${
                index !== 0 ? "md:border-l md:border-gray-300" : ""
              }`}
            >
              <Icon className="text-5xl md:text-6xl text-[#D41331]" />
              <p className="mt-3 text-lg md:text-xl font-bold leading-tight text-gray-900">
                {lines[0]}
                <br />
                {lines[1]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}