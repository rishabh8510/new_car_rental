import {
  MdOutlineMail,
} from "react-icons/md";

import {
  FiPhone,
} from "react-icons/fi";

import {
  PiBuildingOffice,
} from "react-icons/pi";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";

const currentYear = 2026;

export default function Footer() {
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

  return (
    <footer className="bg-[#111111] text-gray-300">

      {/* Top Section */}
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo & Description */}
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Car Rental Logo"
              width={160}
              height={80}
              className="h-20 w-auto object-contain mb-2"
            />
          </div>

          <p className="text-sm leading-relaxed text-gray-400">
            777 Drive Rent a Car is a Dubai-based vehicle rental company
            specializing in long-term mobility solutions for corporates,
            SMEs, and commercial clients. We provide flexible monthly
            and annual rental contracts designed to support business
            growth without the burden of vehicle ownership.
          </p>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-4 uppercase">
            Pages
          </h3>

          <ul className="space-y-2 text-sm text-gray-400">
            <li className="transition hover:text-[#D41331] cursor-pointer">About us</li>
            <li className="transition hover:text-[#D41331] cursor-pointer">Fleet</li>
            <li className="transition hover:text-[#D41331] cursor-pointer">Corporate Rentals</li>
            <li className="transition hover:text-[#D41331] cursor-pointer">Why 777 Car Rent</li>
            <li className="transition hover:text-[#D41331] cursor-pointer">Blogs</li>
            <li className="transition hover:text-[#D41331] cursor-pointer">Contact us</li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-4 uppercase">
            Our Services
          </h3>

          <ul className="space-y-2 text-sm text-gray-400">
            <li className="transition hover:text-[#D41331] cursor-pointer">Monthly Car Rentals</li>
            <li className="transition hover:text-[#D41331] cursor-pointer">Annual Car Rentals</li>
            <li className="transition hover:text-[#D41331] cursor-pointer">Corporate Fleet Solutions</li>
            <li className="transition hover:text-[#D41331] cursor-pointer">SME Commercial Leasing</li>
            <li className="transition hover:text-[#D41331] cursor-pointer">Long-Term Vehicle Leasing</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-sm font-semibold mb-4 uppercase">
            Contact
          </h3>

          <ul className="space-y-3 text-sm text-gray-400">

            <li>
              <div className="flex items-center gap-2 text-white">
                <MdOutlineMail className="text-lg text-[#D41331]" />
                <span>Email</span>
              </div>

              <p className="mt-1 text-gray-400">
                info@777drive.ae
              </p>
            </li>

            <li>
              <div className="flex items-center gap-2 text-white">
                <FiPhone className="text-lg text-[#D41331]" />
                <span>Phone</span>
              </div>

              <p className="mt-1 text-gray-400">
                +97 1509954626
              </p>
            </li>

            <li>
              <div className="flex items-center gap-2 text-white">
                <PiBuildingOffice className="text-lg text-[#D41331]" />
                <span>Office</span>
              </div>

              <p className="mt-1 text-gray-400">
                Business Bay - Dubai - United Arab Emirates
              </p>
            </li>

          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 text-xs text-gray-500">
        <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-4 px-5 lg:px-8">
          <div>
            © {currentYear} 777 Drive Rent a Car. All Rights Reserved.
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <Link
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-400 hover:text-[#D41331] transition-colors duration-300"
                >
                  <Icon size={20} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

    </footer>
  );
}
