"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRoad, FaWhatsapp } from "react-icons/fa";
import { LuFlame, LuHeart, LuPhone } from "react-icons/lu";
import Button from "./Button";

export type Car = {
  id: number | string;
  name: string;
  slug: string;
  image: string;
  badge?: string;
  oldPrice?: string;
  price: string;
  weekly: string;
  monthly: string;
  kmLimit: string;
};

type CarCardProps = {
  car: Car;
  basePath?: string; // card ka link: `${basePath}/${slug}`
  phone?: string;
  whatsapp?: string;
};

export default function CarCard({
  car,
  basePath = "/fleet",
  phone = "+971000000000",
  whatsapp = "971000000000",
}: CarCardProps) {
  const [liked, setLiked] = useState(false);
  const href = `${basePath}/${car.slug}`;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md transition hover:-translate-y-0.5 hover:border-red-200 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden bg-gray-100">
        <Link href={href}>
          <Image
            src={car.image}
            alt={car.name}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 hover:scale-105"
          />
        </Link>

        {car.badge && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#D41331] to-[#890018] px-3 py-1.5 text-xs font-extrabold uppercase tracking-wider text-white shadow">
            <LuFlame className="h-3.5 w-3.5 text-white" />
            {car.badge}
          </span>
        )}

        <button
          type="button"
          aria-label="Add to wishlist"
          onClick={() => setLiked((v) => !v)}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-500 shadow transition hover:bg-white"
        >
          <LuHeart
            className={`h-5 w-5 ${liked ? "fill-red-600 text-red-600" : ""}`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="truncate text-lg font-bold text-neutral-900 transition hover:text-[#D41331]">
          <Link href={href}>{car.name}</Link>
        </h3>

        {/* Price */}
        <div className="mt-2 flex min-h-14 flex-col items-end justify-end text-right">
          {car.oldPrice && (
            <span className="text-sm font-medium text-gray-400 line-through">
              AED {car.oldPrice}
            </span>
          )}
          <p className="flex items-baseline gap-1.5">
            <span className="text-sm font-bold text-[#D41331]">AED</span>
            <span className="text-3xl font-extrabold text-[#D41331]">
              {car.price}
            </span>
            <span className="text-sm text-gray-500">/ day</span>
          </p>
        </div>

        {/* Weekly / Monthly */}
        <div className="mt-4 grid grid-cols-2 gap-2 rounded-xl border border-gray-200 bg-slate-50 p-3">
          <div>
            <p className="text-[11px] font-medium uppercase text-gray-500">
              Weekly (-5%)
            </p>
            <p className="mt-1 text-sm font-bold text-neutral-900">
              AED {car.weekly}{" "}
              <span className="text-xs font-normal text-gray-500">/wk</span>
            </p>
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase text-gray-500">
              Monthly (-10%)
            </p>
            <p className="mt-1 text-sm font-bold text-neutral-900">
              AED {car.monthly}{" "}
              <span className="text-xs font-normal text-gray-500">/mo</span>
            </p>
          </div>
        </div>

        {/* KM limit */}
        <p className="mt-4 flex items-center gap-2 border-b border-gray-100 pb-4 text-sm text-gray-500">
          <FaRoad className="h-4 w-4 text-gray-500" />
          {car.kmLimit}
        </p>

        {/* Actions */}
        <div className="mt-auto flex items-center gap-2 pt-4">
          <a
            href={`tel:${phone}`}
            aria-label="Call"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-neutral-700 transition hover:border-[#D41331] hover:bg-red-50 hover:text-[#D41331]"
          >
            <LuPhone className="h-5 w-5" />
          </a>
          <a
            href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(
              `Hi, I want to rent ${car.name}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-neutral-700 transition hover:border-green-500 hover:bg-green-50 hover:text-green-600"
          >
            <FaWhatsapp className="h-6 w-6" />
          </a>
          <Button
            href={href}
            variant="primary"
            className="h-11 flex-1 text-sm font-bold tracking-wide"
          >
            Rent Now
          </Button>
        </div>
      </div>
    </article>
  );
}
