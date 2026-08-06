"use client";

import Link from "next/link";
import {
  Car,
  Tractor,
  Smartphone,
  Shirt,
  Sofa,
  Building2,
  Briefcase,
  Wrench,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  BadgeCheck,
  Truck,
} from "lucide-react";
import Image from "next/image";

const categories = [
  {
    name: "Automotive",
    description: "Cars, parts & accessories",
    icon: Car,
    image: "/images/categories/automotive.jpeg",
    href: "/marketplace?category=automotive",
    count: 2500,
  },
  {
    name: "Agriculture",
    description: "Farm produce & equipment",
    icon: Tractor,
    image: "/images/categories/agriculture.jpeg",
    href: "/marketplace?category=agriculture",
    count: 1200,
  },
  {
    name: "Electronics",
    description: "Phones, laptops & gadgets",
    icon: Smartphone,
    image: "/images/categories/electronics.jpeg",
    href: "/marketplace?category=electronics",
    count: 8700,
  },
  {
    name: "Fashion",
    description: "Clothing & accessories",
    icon: Shirt,
    image: "/images/categories/fashion.jpeg",
    href: "/marketplace?category=fashion",
    count: 5400,
  },
  {
    name: "Home & Living",
    description: "Furniture & décor",
    icon: Sofa,
    image: "/images/categories/home.png",
    href: "/marketplace?category=home",
    count: 3100,
  },
  {
    name: "Real Estate",
    description: "Land, houses & rentals",
    icon: Building2,
    image: "/images/categories/real-estate.jpg",
    href: "/marketplace?category=real-estate",
    count: 900,
  },
  {
    name: "Jobs",
    description: "Employment opportunities",
    icon: Briefcase,
    image: "/images/categories/jobs.jpg",
    href: "/marketplace?category=jobs",
    count: 650,
  },
  {
    name: "Services",
    description: "Professional services",
    icon: Wrench,
    image: "/images/categories/services.jpg",
    href: "/marketplace?category=services",
    count: 1800,
  },
];

const totalListings = categories.reduce((sum, c) => sum + c.count, 0);

const formatCount = (n: number) =>
  n >= 1000 ? `${(n / 1000).toFixed(1).replace(".0", "")}k+` : `${n}+`;

export default function Categories() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top,#FFF8E1,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-[#FFF8E1] px-4 py-2 text-sm font-medium text-[#A67C00]">
              Browse Categories
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:mt-6 sm:text-4xl lg:text-5xl">
              Discover Everything in One Marketplace
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Explore
              products and services from verified sellers across trusted
              marketplace categories.
            </p>
          </div>

          <Link
            href="/marketplace"
            className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-gray-300 px-6 py-3 font-semibold transition hover:border-[#D4AF37] hover:bg-[#FFF8E1] sm:w-auto"
          >
            Explore Marketplace
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Categories */}

        <div className="mt-10 grid gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {categories.map((category) => {
            return (
              <Link
                key={category.name}
                href={category.href}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Icon */}
                  <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-lg bg-white/90 backdrop-blur">
                    <category.icon size={24} className="text-[#D4AF37]" />
                  </div>

                  {/* Listings */}
                  <div className="absolute right-5 top-5 rounded-full bg-[#D4AF37] px-3 py-1 text-xs font-semibold text-white">
                    {formatCount(category.count)}
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-5 left-5">
                    <h3 className="text-2xl font-bold text-white">
                      {category.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="leading-7 text-gray-600">
                    {category.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="font-semibold text-[#D4AF37]">
                      Browse Category
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Statistics */}

        <div className="mt-14 grid grid-cols-2 gap-5 rounded-xl border border-[#D4AF37]/20 bg-gray-300 p-5 sm:mt-20 sm:gap-6 sm:p-8 md:grid-cols-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#D4AF37] sm:text-3xl">
              {formatCount(totalListings)}
            </h3>
            <p className="mt-2 text-gray-600">Marketplace Listings</p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#D4AF37] sm:text-3xl">2k+</h3>
            <p className="mt-2 text-gray-600">Verified Sellers</p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#D4AF37] sm:text-3xl">100%</h3>
            <p className="mt-2 text-gray-600">Escrow Protected</p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#D4AF37] sm:text-3xl">24/7</h3>
            <p className="mt-2 text-gray-600">Customer Support</p>
          </div>
        </div>

        {/* Trust Section */}

        <div className="mt-14 rounded-xl border border-[#D4AF37]/20 bg-gray-300 p-6 sm:mt-20 sm:p-10">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <ShieldCheck className="text-[#D4AF37]" size={34} />

              <h3 className="mt-5 text-xl font-semibold">Escrow Protection</h3>

              <p className="mt-3 text-gray-600 leading-7">
                Payments remain secure until buyers confirm successful delivery.
              </p>
            </div>

            <div>
              <BadgeCheck className="text-[#D4AF37]" size={34} />

              <h3 className="mt-5 text-xl font-semibold">Verified Sellers</h3>

              <p className="mt-3 text-gray-600 leading-7">
                Every verified seller builds credibility through identity
                verification and transparent ratings.
              </p>
            </div>

            <div>
              <Truck className="text-[#D4AF37]" size={34} />

              <h3 className="mt-5 text-xl font-semibold">Trusted Delivery</h3>

              <p className="mt-3 text-gray-600 leading-7">
                Reliable courier partners ensure products reach buyers safely
                and on time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
