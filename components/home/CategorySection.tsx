
import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  LuCircleDollarSign,
  // LuMountain,
  // LuSparkles,
  // LuStar,
  // LuSun,
  // LuZap,
} from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";

type Category = {
  title: string;
  cars: number;
  price: string;
  href: string;
  image: string;
  icon: IconType;
};

const categories: Category[] = [
  // {
  //   title: "Sports Car Rental",
  //   cars: 12,
  //   price: "750.00",
  //   href: "/fleet?category=sports",
  //   image: "/images/sport.avif",
  //   icon: LuZap,
  // },
  // {
  //   title: "Luxury Cars",
  //   cars: 46,
  //   price: "210.00",
  //   href: "/fleet",
  //   image: "/images/luxury.png",
  //   icon: LuStar,
  // },
  // {
  //   title: "SUV Car Rental",
  //   cars: 17,
  //   price: "195.00",
  //   href: "/fleet",
  //   image: "/images/suv.jpg",
  //   icon: LuMountain,
  // },
  // {
  //   title: "Convertible Cars",
  //   cars: 12,
  //   price: "360.00",
  //   href: "/fleet",
  //   image: "/images/convertible.jpg",
  //   icon: LuSun,
  // },
  {
    title: "Budget Cars",
    cars: 13,
    price: "115.00",
    href: "/fleet?category=budget",
    image: "/images/budget.png",
    icon: LuCircleDollarSign,
  },
  // {
  //   title: "New Cars Arrived",
  //   cars: 50,
  //   price: "115.00",
  //   href: "/fleet?category=new",
  //   image: "/images/new.avif",
  //   icon: LuSparkles,
  // },
];

export default function CategorySection() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Main Heading */}
        <h1 className="text-center text-4xl font-normal text-neutral-900 sm:text-5xl md:text-6xl">
          Car Rental In Dubai
        </h1>

        {/* Section Heading */}
        <div className="mt-10 text-center md:mt-14">
          <p className="text-sm font-bold uppercase tracking-widest text-[#D41331]">
            Our Fleet
          </p>

          <h2 className="mt-3 text-3xl font-bold text-neutral-900 sm:text-4xl">
            Shop by Category
          </h2>

          <p className="mt-3 text-base text-gray-500 sm:text-lg">
            Find the right car for your trip in Dubai.
          </p>
        </div>

        {/* Category Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-100 sm:h-52 xl:h-44">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1280px) 16vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Cars Badge */}
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
                    <Icon className="h-3.5 w-3.5 text-[#D41331]" />
                    {item.cars} cars
                  </span>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 items-start justify-between gap-2 p-4">
                  <div>
                    <h3 className="text-base font-bold leading-snug text-neutral-900">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 text-sm text-gray-500">
                      From{" "}
                      <span className="font-bold text-[#D41331]">
                        AED {item.price}
                      </span>{" "}
                      / day
                    </p>
                  </div>

                  {/* Arrow */}
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-neutral-900 transition-colors duration-300 group-hover:bg-[#D41331] group-hover:text-white">
                    <MdArrowOutward className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
