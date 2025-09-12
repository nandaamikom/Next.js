"use client";

import { useState, useEffect } from "react";
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

  // ✅ Close menu otomatis kalau resize ke layar md ke atas
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="w-full border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 md:px-20 py-4">
        {/* Brand */}
        <Link
          href="/"
          className="font-extrabold text-xl md:text-2xl lg:text-3xl md:px-4 leading-none text-blue-800"
        >
          ProductivityPro
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-base md:text-md lg:text-lg hover:underline"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          {/* CTA selalu tampil */}
          <Link
            href="#get-started"
            className="hidden sm:inline-block px-4 md:px-6 lg:px-8 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-full font-medium text-sm md:text-base lg:text-lg"
          >
            Get Started
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col items-center gap-4 pb-6 md:hidden bg-white shadow-md">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-lg hover:underline"
              onClick={() => setIsOpen(false)} // klik menu = auto close
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
