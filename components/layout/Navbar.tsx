"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 md:px-20 py-4">
        {/* Brand */}
        <Link
          href="/"
          className="font-extrabold text-2xl md:text-3xl text-blue-800"
        >
          ProductivityPro
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium hover:underline"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="#get-started"
            className="px-6 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-full font-medium"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col items-center space-y-4 pb-6 md:hidden bg-white shadow-md">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-lg hover:underline"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="#get-started"
            className="px-6 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-full font-medium"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
