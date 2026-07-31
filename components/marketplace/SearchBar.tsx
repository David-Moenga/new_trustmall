"use client";

import { useState } from "react";
import {
  Search,
  MapPin,
  SlidersHorizontal,
  X,
} from "lucide-react";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="w-full">
      {/* Search Container */}
      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-md">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products, brands or categories..."
              className="h-14 w-full rounded-lg border border-gray-200 bg-gray-50 pl-12 pr-10 text-gray-700 outline-none transition focus:border-[#D4AF37] focus:bg-white"
            />

            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                <X
                  size={18}
                  className="text-gray-400 hover:text-gray-700"
                />
              </button>
            )}
          </div>

          {/* Location */}
          <div className="relative w-full lg:w-72">
            <MapPin
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              className="h-14 w-full rounded-lg border border-gray-200 bg-gray-50 pl-12 pr-4 text-gray-700 outline-none transition focus:border-[#D4AF37] focus:bg-white"
            />
          </div>

          {/* Filter */}
          <button className="flex h-14 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 font-medium text-gray-700 transition hover:border-[#D4AF37] hover:text-[#A67C00]">
            <SlidersHorizontal size={20} />
            Filters
          </button>

          {/* Search Button */}
          <button className="h-14 rounded-lg bg-[#D4AF37] px-8 font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#BB9627] hover:shadow-lg">
            Search
          </button>
        </div>
      </div>

      {/* Popular Searches */}
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <span className="text-sm font-medium text-gray-500">
          Popular:
        </span>

        {[
          "iPhone",
          "Toyota",
          "Laptops",
          "Furniture",
          "Land",
          "Apartments",
          "Tractors",
          "Generators",
        ].map((item) => (
          <button
            key={item}
            className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 transition hover:border-[#D4AF37] hover:bg-[#FFF8E1] hover:text-[#A67C00]"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}