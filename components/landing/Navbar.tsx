"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Marketplace", href: "/marketplace" },
  { name: "Categories", href: "/categories" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Start Selling", href: "/seller" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-full items-center justify-between px-6 lg:px-8 bg-gray-600">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-[#D4AF37] text-lg font-bold text-white shadow-sm">
            T
          </div>

          <div className="leading-none">
            <h1 className="text-xl font-bold text-gray-900">
              TrustMall
            </h1>

            <p className="text-xs text-white font-bold">
              Trade with Confidence
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-bold text-white transition ${
                item.name === ""
                  ? "text-[#D4AF37]"
                  : "text-gray-700 hover:text-[#D4AF37]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-4 lg:flex">
          <button className="rounded-sm p-2 transition hover:bg-gray-400">
            <ShoppingCart
              size={22}
              className="text-white text-bold"
            />
          </button>

          <Link
            href="/login"
            className="bg-gray-600 rounded-sm border border-gray-600 text-white px-5 py-2 text-sm font-bold text-gray-700 transition bg-orange-400"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="flex items-center gap-2 rounded-sm bg-orange-400 px-5 py-2 text-sm font-bold text-white transition-all duration-300 hover:bg-[#D4AF37]"
          >
            Get Started
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Menu */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t bg-gray-800 shadow-sm lg:hidden">
          <div className="space-y-2 px-6 py-6">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-sm py-3 text-white transition hover:text-[#D4AF37]"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}