"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF8] border-b border-[#E8E0D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className="text-xl font-bold tracking-widest text-[#2C2C2C] uppercase">
              Gabaya
            </span>
            <span className="text-xs tracking-[0.3em] text-[#7B9E87] uppercase font-medium">
              Legacy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-wider text-[#2C2C2C] hover:text-[#7B9E87] transition-colors uppercase font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/collections"
              className="text-sm bg-[#2C2C2C] text-white px-5 py-2 rounded-full hover:bg-[#7B9E87] transition-colors tracking-wider uppercase font-medium"
            >
              Shop Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#2C2C2C]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#FAFAF8] border-t border-[#E8E0D5] px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-sm tracking-wider text-[#2C2C2C] hover:text-[#7B9E87] transition-colors uppercase font-medium py-2"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/collections"
            className="block text-center text-sm bg-[#2C2C2C] text-white px-5 py-2 rounded-full hover:bg-[#7B9E87] transition-colors tracking-wider uppercase font-medium mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Shop Now
          </Link>
        </div>
      )}
    </header>
  );
}
