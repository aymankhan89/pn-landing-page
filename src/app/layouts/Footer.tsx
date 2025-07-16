"use client";

import Link from "next/link";
import {
  FacebookSvg,
  FooterLogoSvg,
  InstagramSvg,
  LinkendInSvg,
  MailSvg,
  PhoneSvg,
  TopArrowSvg,
  TwitterSvg,
  // LocationSvg,
} from "../assets/svgs";

const productLinks = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Why Hirte", href: "/why-hirte" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

const contactMethods = [
  { icon: PhoneSvg, value: "+91-7038575731", href: "tel:+917038575731" },
  {
    icon: MailSvg,
    value: "info@proficientnow.com",
    href: "mailto:info@proficientnow.com",
  },
];

const locationLines = [
  "Sanali Info Park, 1st Floor, A Block,",
  "8-2-120/113, Road No. 2, Banjara Hills,",
  "Hyderabad – 500034",
];

const socialLinks = [
  { icon: TwitterSvg, href: "#" },
  { icon: LinkendInSvg, href: "#" },
  { icon: FacebookSvg, href: "#" },
  { icon: InstagramSvg, href: "#" },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[#271F36] text-white overflow-hidden rounded-t-[15px]">
      {/* ——— MOBILE ONLY ——— */}
      <div className="block md:hidden px-6 pt-8 pb-10">
        {/* Logo */}
        <div className="mb-8">
          <FooterLogoSvg />
        </div>

        {/* PRODUCT */}
        <div className="mb-6">
          <h3 className="text-[14px] font-medium uppercase mb-3">PRODUCT</h3>
          <ul className="space-y-2 text-[14px]">
            {productLinks.map(({ label, href }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* LEGAL */}
        <div className="mb-6">
          <h3 className="text-[14px] font-medium uppercase mb-3">LEGAL</h3>
          <ul className="space-y-2 text-[14px]">
            {legalLinks.map(({ label, href }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div className="mb-6">
          <h3 className="text-[14px] font-medium mb-3">Contact Us</h3>
          {contactMethods.map(({ icon: Icon, value, href }) => (
            <div key={value} className="flex items-center space-x-2 mb-2">
              <Icon />
              <Link href={href} className="text-[14px]">
                {value}
              </Link>
            </div>
          ))}
        </div>

        {/* LOCATION */}
        <div className="mb-8">
          <h3 className="text-[14px] font-medium mb-3">Location</h3>
          <div className="flex items-start space-x-2">
            {/* <LocationSvg /> */}
            <div className="text-[14px] leading-snug">
              {locationLines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map(({ icon: Icon, href }) => (
            <Link key={href} href={href}>
              <Icon />
            </Link>
          ))}
        </div>

        {/* COPYRIGHT */}
        <div className="text-center text-[13px] text-[#A7A7A7] mb-6">
          © 2025 — All Rights Reserved
        </div>

        {/* BACK TO TOP */}
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={scrollToTop}
        >
          <TopArrowSvg />
          <span className="text-[11px] font-medium text-[#6D6D6D]">
            BACK TO TOP
          </span>
        </div>
      </div>

      {/* ——— DESKTOP ——— */}
      <div className="hidden md:block h-[644px] pt-[60px] pb-6 px-4 md:px-[194px]">
        {/* Logo on desktop */}
        <div className="mb-8">
          <FooterLogoSvg />
        </div>

        <div className="relative z-10 flex flex-col h-full gap-[150px]">
          {/* Top row */}
          <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
            {/* Social */}
            <div className="flex space-x-5">
              {socialLinks.map(({ icon: Icon, href }) => (
                <Link key={href} href={href}>
                  <Icon />
                </Link>
              ))}
            </div>

            {/* Back to top */}
            <div
              className="flex flex-col items-center gap-2 cursor-pointer"
              onClick={scrollToTop}
            >
              <TopArrowSvg />
              <span className="text-[11px] font-medium text-[#6D6D6D]">
                BACK TO TOP
              </span>
            </div>

            {/* Contact */}
            <div className="space-y-4 text-[13px] text-[#DAD7D7]">
              {contactMethods.map(({ icon: Icon, value, href }) => (
                <div key={value} className="flex items-center space-x-2">
                  <Icon />
                  <Link href={href}>{value}</Link>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[80px]">
            {/* Middle nav */}
            <div className="flex flex-col gap-[40px] text-[13px] font-medium">
              <div className="flex justify-center space-x-[50px]">
                {productLinks.map(({ label, href }) => (
                  <Link key={href} href={href}>
                    {label}
                  </Link>
                ))}
              </div>
              <div className="flex justify-center space-x-[50px]">
                {legalLinks.map(({ label, href }) => (
                  <Link key={href} href={href}>
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom row */}
            <div className="flex items-center justify-center gap-[30px] text-[13px]">
              <div className="flex items-center space-x-2 text-white">
                <FooterLogoSvg />
                <div className="leading-snug text-[#A7A7A7]">
                  Sanali Info Park. 1st Floor. A Block, 8-2-120/113, Road No. 2,
                  Banjara Hills, Hyderabad – 500034
                </div>
              </div>
              <div className="text-[#A7A7A7]">© 2025 — All Rights Reserved</div>
            </div>
          </div>
        </div>
      </div>

      {/* ——— Shared gradient ring ——— */}
      <div
        className="
          absolute bottom-[-1550px] left-1/2 transform -translate-x-1/2
          w-[2300px] h-[1600px] rounded-full bg-[#7D7BF5]
          blur-3xl opacity-40 pointer-events-none
        "
        aria-hidden="true"
      />
    </footer>
  );
};

export default Footer;
