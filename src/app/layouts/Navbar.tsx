'use client';

import Link from 'next/link';
import { useState } from 'react';
import { LogoSvg } from '../assets/svgs/LogoSvg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white lg:mt-[25px]">
      <div className="mx-auto px-4 sm:px-6 lg:px-[194px]">
        <div className="flex justify-between  items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <LogoSvg />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-[50px] font-[gilroy] font-normal text-[15px] text-[#777777]">
            <Link href="/">Home</Link>
            <Link href="/features">Features</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/why-hirte">Why Hirte</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 text-gray-700 text-sm">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/features" onClick={() => setIsOpen(false)}>Features</Link>
          <Link href="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link href="/why-hirte" onClick={() => setIsOpen(false)}>Why Hirte</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
