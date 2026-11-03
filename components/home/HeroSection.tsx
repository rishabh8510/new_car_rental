"use client";

import { MdArrowOutward } from "react-icons/md";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section
      className="relative w-full h-auto md:h-[85vh] bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/car.jpg')",
      }}
    >
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-24 md:py-0 min-h-[400px] md:h-full">
        <h1 className="text-white text-3xl md:text-5xl font-semibold leading-tight">
          Flexible monthly Car Rentals. Built for Business.
        </h1>

        <p className="mt-4 max-w-3xl text-gray-200 text-sm md:text-base">
          777 Drive Rent a Car provides cost-effective, Flexible monthly
          vehicle rental solutions that help businesses stay mobile,
          efficient, and scalable.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <Button
            variant="secondary"
            onClick={() => router.push("/contact")}
          >
            Get Started Today <MdArrowOutward />
          </Button>

          <Button
            variant="outline"
            onClick={() => router.push("/fleet")}
          >
            View Our Fleet <MdArrowOutward />
          </Button>
        </div>
      </div>
    </section>
  );
}
