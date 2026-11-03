import { LuCheck } from "react-icons/lu";

type DocItem = { text: string; note?: string };

const documentGroups: { title: string; items: DocItem[] }[] = [
  {
    title: "For International Visitors",
    items: [
      { text: "Valid Passport" },
      { text: "Home Country Driving License" },
      { text: "International Driving Permit (IDP)", note: "(if applicable)" },
    ],
  },
  {
    title: "For UAE Residents",
    items: [{ text: "Valid Emirates ID" }, { text: "Valid UAE Driving License" }],
  },
];

const considerations = [
  "Review total costs including insurance, deposits, and taxes",
  "Check vehicle size for passenger count and luggage capacity",
  "Confirm kilometer/mileage reimbursement and fuel policies",
  "Familiarize yourself with UAE traffic laws, speed limits, and Salik tolls",
];

export default function DocumentsRequired() {
  return (
    <section className="w-full bg-white py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-10 rounded-lg border border-gray-200 bg-slate-50 p-6 shadow-sm sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-16">
          {/* Documents Required */}
          <div>
            <h2 className="text-2xl font-medium text-neutral-900 sm:text-3xl">
              Documents Required
            </h2>

            {documentGroups.map((group) => (
              <div key={group.title} className="mt-8">
                <h3 className="text-lg font-medium text-[#D41331]">
                  {group.title}
                </h3>
                <ul className="mt-4 list-disc space-y-2 pl-6 text-base text-gray-700 marker:text-[#D41331] sm:text-lg">
                  {group.items.map((item) => (
                    <li key={item.text}>
                      {item.text}
                      {item.note && <em className="ml-1">{item.note}</em>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Important Considerations */}
          <div>
            <h2 className="text-2xl font-medium text-neutral-900 sm:text-3xl">
              Important Considerations
            </h2>

            <ul className="mt-8 divide-y divide-gray-200 border-b border-gray-200">
              {considerations.map((text) => (
                <li
                  key={text}
                  className="flex items-start gap-3 py-4 text-base text-gray-700 sm:text-lg"
                >
                  <LuCheck className="mt-1 h-5 w-5 shrink-0 text-[#D41331]" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}