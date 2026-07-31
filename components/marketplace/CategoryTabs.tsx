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

  return (
    <section>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Browse Categories
          </h2>

          <p className="mt-1 text-gray-500">
            Quickly explore products across different categories.
          </p>
        </div>
      </div>

      {/* Scrollable Categories */}
      <div className="scrollbar-hide flex gap-4 overflow-x-auto pb-3">
        {categories.map((category) => {
          const Icon = category.icon;

          const activeTab = active === category.id;

          return (
            <button
              key={category.id}
              onClick={() => setActive(category.id)}
              className={`group min-w-[150px] rounded-xl border p-4 text-left transition-all duration-300 ${
                activeTab
                  ? "border-[#D4AF37] bg-[#FFF8E1] shadow-md"
                  : "border-gray-200 bg-white hover:border-[#D4AF37] hover:-translate-y-1 hover:shadow-md"
              }`}
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-lg ${
                  activeTab
                    ? "bg-[#D4AF37] text-white"
                    : "bg-gray-100 text-gray-600 group-hover:bg-[#D4AF37] group-hover:text-white"
                } transition`}
              >
                <Icon size={24} />
              </div>

              <h3 className="mt-4 font-semibold text-gray-900">
                {category.name}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {category.count} Products
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}