"use client";
import Image from "next/image";
import { useState } from "react";

const logos = [
  "mircrosoft.svg",
  "google.svg",
  "linkedin.svg",
  "amazon.svg",
  "node.svg",
  "laravel.svg",
  "Adobe_Creative.svg",
];

export default function TrustedCompanies3x() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="flex flex-col items-center bg-gray-50 px-6 md:px-20 py-12 space-y-14">
      <p className="text-xl md:text-2xl text-gray-700 text-center">
        Dipercaya oleh perusahaan global dan startup inovatif
      </p>

      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className={`flex w-max gap-12 animate-scroll-3x ${
            paused ? "pause" : ""
          }`}
        >
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-28 h-16 rounded-md shadow-sm"
            >
              <Image
                src={`/${logo}`}
                alt="logo"
                width={100}
                height={100}
                className="max-h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
