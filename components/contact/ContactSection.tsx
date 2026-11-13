"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/ui/Button";

/* ---------- Icons ---------- */
const PhoneIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="h-9 w-9 shrink-0 text-[#D41331]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M14 6l5 9-4 3c2 5 6 9 11 11l3-4 9 5-3 6c-1 2-3 3-6 2C17 36 8 26 5 14c-.5-3 1-5 3-6z" />
    <path d="M30 8c5 1 9 5 10 10M30 14c2 .5 4 2.500 4.500 4.500" />
  </svg>
);

const MailIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="h-9 w-9 shrink-0 text-[#D41331]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="4" y="10" width="40" height="28" rx="2" />
    <path d="M4 10l20 17L44 10M4 38l14-14M44 38L30 24" />
  </svg>
);

const LocationIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="h-9 w-9 shrink-0 text-[#D41331]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M24 5c-6 0-10 4.500-10 10 0 8 10 17 10 17s10-9 10-17c0-5.500-4-10-10-10z" />
    <circle cx="24" cy="15" r="3.500" />
    <ellipse cx="24" cy="38" rx="14" ry="4.500" />
    <path d="M12 34c-3 1-5 3-5 4" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
    <path d="M13.500 21v-8h2.700l.4-3.200h-3.100V7.800c0-.9.3-1.500 1.600-1.500h1.700V3.400c-.3 0-1.300-.1-2.400-.1-2.400 0-4 1.500-4 4.100v2.400H7.700V13h2.700v8z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
    <path d="M17.800 3h3.100l-6.800 7.700L22 21h-6.200l-4.900-6.300L5.300 21H2.200l7.300-8.300L2 3h6.400l4.400 5.800zm-1.100 16.200h1.700L7.400 4.700H5.600z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
    <path d="M4.500 9h3.700v11.500H4.500zM6.400 3.500a2.100 2.100 0 110 4.200 2.100 2.100 0 010-4.200zM10.500 9h3.500v1.600c.5-1 1.800-1.900 3.700-1.900 3.800 0 4.500 2.500 4.500 5.700v6.100h-3.700v-5.400c0-1.300 0-2.900-1.800-2.900s-2.100 1.400-2.100 2.800v5.500h-3.700z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5 fill-none stroke-current"
    strokeWidth="1.8"
    aria-hidden="true"
  >
    <rect x="3.500" y="3.500" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const socials = [
  { name: "Facebook", icon: <FacebookIcon />, href: "https://www.facebook.com/777driverentacar/" },
  { name: "X", icon: <XIcon />, href: "#" },
  { name: "LinkedIn", icon: <LinkedInIcon />, href: "https://www.linkedin.com/company/777driverentacar/" },
  { name: "Instagram", icon: <InstagramIcon />, href: "https://www.instagram.com/777driverentacar/" },
];

/* ---------- Shared styles ---------- */
const labelClass = "block text-sm font-semibold text-neutral-800";
const inputClass =
  "mt-2 w-full border-0 border-b border-gray-200 bg-transparent pb-3 text-base text-neutral-900 placeholder:text-gray-400 outline-none transition-colors focus:border-[#D41331]";

/* ---------- Component ---------- */
const ContactSection = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="w-full bg-white px-5 py-12 md:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
          {/* Left - Contact Info */}
          <div className="relative flex min-h-[520px] flex-col overflow-hidden rounded-xl bg-neutral-900 p-8 text-white sm:p-10 lg:min-h-[580px]">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#D41331]">
                Get in Touch
              </p>
              <h2 className="mt-2 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Contact Information
              </h2>
              <p className="mt-3 text-base text-gray-400">
                Say something to start a conversation with our rental team!
              </p>
            </div>

            <div className="mt-12 space-y-7">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                  <PhoneIcon />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400">Phone</p>
                  <a
                    href="tel:+971509954626"
                    className="text-base font-semibold text-white transition hover:text-[#D41331]"
                  >
                    +971 509954626
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                  <MailIcon />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400">Email</p>
                  <a
                    href="mailto:info@777drive.ae"
                    className="text-base font-semibold text-white transition hover:text-[#D41331]"
                  >
                    info@777drive.ae
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-white">
                  <LocationIcon />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400">Address</p>
                  <p className="text-base font-semibold leading-relaxed text-white">
                    133 46th Street, Hor Al Anz, Deira, Dubai, UAE
                  </p>
                </div>
              </div>
            </div>

            {/* Social icons */}
            <div className="relative z-10 mt-auto flex items-center gap-3 pt-10">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#D41331] hover:bg-[#D41331]"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Decorative circles */}
            <span className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#D41331]/10" />
            <span className="pointer-events-none absolute bottom-12 right-12 h-36 w-36 rounded-full bg-white/5" />
          </div>

          {/* Right - Form */}
          <div className="relative flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="relative z-10">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className={labelClass}>
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="Enter Your First Name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className={labelClass}>
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Enter Your Last Name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter Your Number"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="message" className={labelClass}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your rental inquiry or message here..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="mt-8">
                <Button
                  type="submit"
                  variant="primary"
                  className="px-8 py-3.5 text-base font-bold shadow-md"
                >
                  Send Message
                </Button>
              </div>
            </form>

            {/* Paper plane + dashed path */}
            <svg
              viewBox="0 0 420 220"
              className="pointer-events-none absolute -bottom-6 right-0 hidden h-[180px] w-[340px] opacity-70 sm:block"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M60 40c10 40 40 60 80 80s90 20 130 0 70-20 110 30"
                stroke="#e5e7eb"
                strokeWidth="2.5"
                strokeDasharray="10 10"
                strokeLinecap="round"
              />
              <g stroke="#D41331" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round">
                <path d="M2 4l105 52-42 14z" />
                <path d="M2 4l62 66-6 42 6-42" />
                <path d="M64 70l-12 34 6 8" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
