import type { IconType } from "react-icons";
import { FaCar, FaCarSide, FaMapPin, FaPlane } from "react-icons/fa";

type Feature = {
  title: string;
  description: string;
  icon: IconType;
  iconColor: string;
};

const features: Feature[] = [
  {
    title: "Total Flexibility",
    description:
      "Come and go as you want with the liberty to travel on your own schedule across the city.",
    icon: FaCar,
    iconColor: "text-[#D41331]",
  },
  {
    title: "Multi-Stop Journeys",
    description:
      "Visit popular spots like Downtown Dubai, Burj Khalifa, Jumeirah Beach, and Palm Jumeirah all in one day.",
    icon: FaMapPin,
    iconColor: "text-[#890018]",
  },
  {
    title: "Right Vehicle Fit",
    description:
      "Choose SUVs for family comfort, premium/luxury vehicles for speed and style, or budget economy cars.",
    icon: FaCarSide,
    iconColor: "text-[#D41331]",
  },
  {
    title: "Airport Transport",
    description:
      "Direct pickup and drop-off solutions for seamless transport to and from Dubai International Airport.",
    icon: FaPlane,
    iconColor: "text-[#890018]",
  },
];

export default function WhyRentCar() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-neutral-900 sm:text-4xl">
            Why Rent A Car In Dubai?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            Discover and explore Dubai&apos;s attractions at your own pace and
            timetable without relying on public transit or taxis.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
              >
                <Icon className={`h-10 w-10 ${item.iconColor}`} />
                <h3 className="mt-8 text-2xl font-medium text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}