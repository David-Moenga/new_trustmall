"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Marketplace", href: "/marketplace" },
  { name: "Categories", href: "/categories" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Become a Seller", href: "/seller" },
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
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#D4AF37] font-bold text-white">
            T
          </div>

          <div className="flex flex-col leading-none">
            <span className="text-xl font-bold text-gray-900">
              TrustMall
            </span>

            <span className="text-xs text-gray-500">
              Secure Cross-Border Commerce
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-700 transition hover:text-[#D4AF37]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Search */}
        <div className="hidden lg:flex">
          <div className="flex items-center rounded-sm border border-gray-200 bg-gray-50 px-3 py-2">
            <Search size={18} className="text-gray-400" />

            <input
              type="text"
              placeholder="Search products..."
              className="ml-2 w-52 bg-transparent text-sm outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-4 lg:flex">
          <button className="rounded-sm p-2 transition hover:bg-gray-100">
            <ShoppingCart
              size={22}
              className="text-gray-700"
            />
          </button>

          <button className="rounded-sm p-2 transition hover:bg-gray-100">
            <User
              size={22}
              className="text-gray-700"
            />
          </button>

          <Link
            href="/login"
            className="rounded-sm border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-sm bg-gray-400 px-5 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-[#D4AF37]"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden"
        >
          {mobileOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t bg-white shadow-sm lg:hidden">
          <div className="space-y-2 px-6 py-6">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-sm py-2 text-gray-700 transition hover:text-[#D4AF37]"
              >
                {item.name}
              </Link>
            ))}

            <div className="mt-6 space-y-3">
              <Link
                href="/login"
                className="block rounded-sm border border-gray-300 px-4 py-3 text-center font-medium"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="block rounded-sm bg-gray-400 px-4 py-3 text-center font-semibold text-white transition hover:bg-[#D4AF37]"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}