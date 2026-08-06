"use client";

import { useState } from "react";
import {
  LayoutGrid,
  Car,
  Tractor,
  Smartphone,
  Shirt,
  Sofa,
  Building2,
  Briefcase,
  Wrench,
  BookOpen,
  HeartPulse,
  Dumbbell,
  PawPrint,
} from "lucide-react";

const categories = [
  {
    id: "all",
    name: "All",
    icon: LayoutGrid,
    count: 2450,
  },
  {
    id: "automotive",
    name: "Automotive",
    icon: Car,
    count: 421,
  },
  {
    id: "agriculture",
    name: "Agriculture",
    icon: Tractor,
    count: 180,
  },
  {
    id: "electronics",
    name: "Electronics",
    icon: Smartphone,
    count: 645,
  },
  {
    id: "fashion",
    name: "Fashion",
    icon: Shirt,
    count: 302,
  },
  {
    id: "home",
    name: "Home",
    icon: Sofa,
    count: 215,
  },
  {
    id: "real-estate",
    name: "Real Estate",
    icon: Building2,
    count: 87,
  },
  {
    id: "jobs",
    name: "Jobs",
    icon: Briefcase,
    count: 58,
  },
  {
    id: "services",
    name: "Services",
    icon: Wrench,
    count: 190,
  },
  {
    id: "education",
    name: "Education",
    icon: BookOpen,
    count: 96,
  },
  {
    id: "health",
    name: "Health",
    icon: HeartPulse,
    count: 145,
  },
  {
    id: "sports",
    name: "Sports",
    icon: Dumbbell,
    count: 112,
  },
  {
    id: "pets",
    name: "Pets",
    icon: PawPrint,
    count: 45,
  },
];

export default function CategoryTabs() {
  const [active, setActive] = useState("all");
  const activeCategory = categories.find((category) => category.id === active);

  return (
    <section className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-[#FFFCF2] p-5 shadow-sm sm:p-6">
      {/* Header */}
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#A67C00]">
              Explore
            </span>
          </div>
          <h2 id="category-tabs-heading" className="text-xl font-bold text-gray-900 sm:text-2xl">
            Browse Categories
          </h2>

          <p className="mt-1 text-sm text-gray-500 sm:text-base">
            Quickly explore products across different categories.
          </p>
        </div>

        <span className="hidden shrink-0 rounded-full border border-[#D4AF37]/20 bg-white px-3 py-1.5 text-sm font-semibold text-[#A67C00] sm:inline-flex">
          {activeCategory?.count.toLocaleString()} listings
        </span>
      </div>

      {/* Scrollable Categories */}
      <div
        role="tablist"
        aria-labelledby="category-tabs-heading"
        className="scrollbar-hide -mx-1 flex gap-3 overflow-x-auto px-1 pb-2 pt-1"
      >
        {categories.map((category) => {
          const Icon = category.icon;

          const activeTab = active === category.id;

          return (
            <button
              key={category.id}
              onClick={() => setActive(category.id)}
              role="tab"
              aria-selected={activeTab}
              className={`group min-w-[136px] rounded-xl border p-3.5 text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37] ${
                activeTab
                  ? "border-[#D4AF37] bg-[#FFF8E1] shadow-[0_8px_20px_rgba(212,175,55,0.18)]"
                  : "border-gray-100 bg-white/90 hover:-translate-y-0.5 hover:border-[#D4AF37]/60 hover:shadow-md"
              }`}
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors ${
                  activeTab
                    ? "bg-[#D4AF37] text-white"
                    : "bg-gray-100 text-gray-600 group-hover:bg-[#FFF8E1] group-hover:text-[#A67C00]"
                }`}
              >
                <Icon size={20} />
              </div>

              <h3 className="mt-3 font-semibold text-gray-900">
                {category.name}
              </h3>

              <p className={`mt-1 text-xs font-medium ${activeTab ? "text-[#A67C00]" : "text-gray-500"}`}>
                {category.count.toLocaleString()} products
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}
