"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [activeLink, setActiveLink] = useState("#home");

  return (
    <header className="w-full bg-[#FFF3E6]">
      <div className="max-w-6xl mx-auto px-5 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="text-2xl font-bold text-[#381932]">
          K.
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className="relative text-sm text-[#381932] pb-1.75"
            >
              {link.name}

              {activeLink === link.href && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-0.75 bg-[#381932] rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Contact Button */}
        <Link
          href="#contact"
          className="hidden bg-[#381932] px-6 py-3.5 rounded-full hover:bg-[#58304F] transition md:flex gap-1.5"
        >
          <p className="text-[#FFF3F6] text-sm">Get in touch</p>
          <MdArrowOutward className="text-[#FFF3F6] mt-0.5" />
        </Link>

        {/* Mobile Navigation */}
        <details className="relative md:hidden">
          <summary className="cursor-pointer font-medium list-none text-[#381932]">
            <FaBars />
          </summary>

          <nav className="absolute right-0 top-10 z-50 w-44 rounded-xl bg-white shadow-lg p-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className="text-sm text-[#381932]"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
