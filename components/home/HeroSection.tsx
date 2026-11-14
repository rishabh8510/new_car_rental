import Image from "next/image";
import { MdHeadsetMic } from "react-icons/md";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative w-full h-auto md:h-[85vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/second-bg.jpg"
        alt="Car rental in Dubai background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-start justify-center text-left px-4 md:px-12 lg:px-20 py-16 md:py-0 min-h-[400px] md:h-full">
        <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight max-w-xl">
          Car Rental in Dubai
        </h1>

        <p className="mt-4 text-white text-base md:text-xl">
          Flexible • Reliable • Hassle-Free
        </p>

        {/* Red line */}
        <span className="mt-5 block h-1 w-16 rounded-full bg-red-600" />

        {/* Call assist card */}
        <div className="mt-6 flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-lg">
          <MdHeadsetMic className="text-5xl text-red-600 shrink-0" />
          <span className="h-12 w-px bg-gray-300" />
          <p className="text-lg md:text-xl font-bold leading-snug text-gray-900">
            We can
            <br />
            assist you
            <br />
            on call
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full max-w-xl">
          <Button
            variant="primary"
            href="tel:+971000000000"
            className="flex-1 py-4 text-base"
          >
            <FaPhoneAlt /> Call Us Now
          </Button>

          <Button
            variant="green"
            href="https://wa.me/971509954626"
            target="_blank"
            className="flex-1 py-4 text-base"
          >
            <FaWhatsapp className="text-xl" /> Chat on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}