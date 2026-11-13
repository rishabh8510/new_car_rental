import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { PiBuildingOffice } from "react-icons/pi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";

const currentYear = 2026;

const pages = [
  "About us",
  "Fleet",
  // "Corporate Rentals",
  // "Why 777 Car Rent",
  // "Blogs",
  "Contact us",
];

const services = [
  "Monthly Car Rentals",
  "Annual Car Rentals",
  "Corporate Fleet Solutions",
  "SME Commercial Leasing",
  "Long-Term Vehicle Leasing",
];

const socialLinks = [
  {
    icon: FaFacebookF,
    url: "https://www.facebook.com/777driverentacar/",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/777driverentacar/",
    label: "Instagram",
  },
  {
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/company/777driverentacar/",
    label: "LinkedIn",
  },
];

const linkClass =
  "cursor-pointer text-base text-gray-400 transition-colors duration-300 hover:text-[#D41331]";
const headingClass = "mb-6 text-lg font-semibold text-white";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#141414] text-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-10 pb-12 pt-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-8">
          {/* Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1 lg:pr-8">
            <Image
              src="/logo.svg"
              alt="Car Rental Logo"
              width={160}
              height={80}
              className="h-16 w-auto object-contain sm:h-20"
            />

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-400 sm:text-base">
              777 Drive Rent a Car is a Dubai-based vehicle rental company
              specializing in long-term mobility solutions for corporates,
              SMEs, and commercial clients. We provide flexible monthly and
              annual rental contracts designed to support business growth
              without the burden of vehicle ownership.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className={headingClass}>Pages</h3>
            <ul className="space-y-4">
              {pages.map((item) => (
                <li key={item} className={linkClass}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className={headingClass}>Our Services</h3>
            <ul className="space-y-4">
              {services.map((item) => (
                <li key={item} className={linkClass}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Follow us */}
          <div>
            <h3 className={headingClass}>Follow us</h3>
            <ul className="space-y-4">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <Link
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={linkClass}
                  >
                    {social.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Row - single line, centered */}
        <div className="flex flex-col items-center justify-center gap-4 border-t border-white/10 py-6 text-sm text-white sm:text-base lg:flex-row lg:flex-wrap lg:gap-x-12">
          <div className="flex items-center gap-3 text-center">
            <PiBuildingOffice className="shrink-0 text-xl text-[#D41331]" />
            <span>133 46th Street, Hor Al Anz, Deira, Dubai, UAE</span>
          </div>
          <div className="flex items-center gap-3">
            <FiPhone className="shrink-0 text-xl text-[#D41331]" />
            <span>+97 1509954626</span>
          </div>
          <div className="flex items-center gap-3">
            <MdOutlineMail className="shrink-0 text-xl text-[#D41331]" />
            <span>info@777drive.ae</span>
          </div>
        </div>

        {/* Copyright - centered */}
        <div className="pb-8 text-center text-sm text-gray-400">
          © {currentYear} 777 Drive Rent a Car. All Rights Reserved.
        </div>

        {/* Big faded brand text */}
        <div
          aria-hidden="true"
          className="pointer-events-none h-[8vw] select-none overflow-hidden whitespace-nowrap text-center xl:h-[110px]"
        >
          <span className="block text-[17vw] font-medium uppercase leading-none tracking-tight text-[#222222] xl:text-[220px]">
            777 Drive
          </span>
        </div>
      </div>
    </footer>
  );
}