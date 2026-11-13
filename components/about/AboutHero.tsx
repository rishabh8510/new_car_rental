import Image from "next/image";
import Link from "next/link";

const AboutHero = () => {
  return (
    <section className="relative flex h-[280px] w-full items-center justify-center overflow-hidden sm:h-[340px] md:h-[400px]">
      {/* Background Image */}
      <Image
        src="/images/about-bg.jpg"
        alt="777 Drive fleet showroom"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-neutral-950/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-neutral-950/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          About Us
        </h1>

        <nav
          aria-label="Breadcrumb"
          className="mt-4 flex items-center gap-2 text-sm font-medium text-white sm:text-base md:mt-6"
        >
          <Link href="/" className="transition-colors hover:text-[#D41331]">
            Home
          </Link>
          <span className="text-white/60">/</span>
          <span className="text-[#D41331]">About Us</span>
        </nav>
      </div>
    </section>
  );
};

export default AboutHero;
