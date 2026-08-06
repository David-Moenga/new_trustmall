"use client";

import { useState } from "react";
import {
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
  RotateCcw,
} from "lucide-react";

const conditions = ["New", "Used", "Refurbished"];

const locations = [
  "Nairobi",
  "Mombasa",
  "Kisumu",
  "Nakuru",
  "Eldoret",
];

export default function FilterSidebar() {
  const [price, setPrice] = useState(500000);

  const [expanded, setExpanded] = useState({
    price: true,
    condition: true,
    location: true,
    rating: true,
  });

  const toggle = (section: keyof typeof expanded) => {
    setExpanded((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <aside className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6 lg:sticky lg:top-28">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between sm:mb-8">
        <div className="flex items-center gap-2">
          <SlidersHorizontal
            className="text-[#D4AF37]"
            size={20}
          />

          <h2 className="text-lg font-bold text-gray-900">
            Filters
          </h2>
        </div>

        <button className="flex items-center gap-1 text-sm font-medium text-[#A67C00] hover:underline">
          <RotateCcw size={15} />
          Reset
        </button>
      </div>

      {/* PRICE */}
      <div className="border-b border-gray-200 pb-6">
        <button
          onClick={() => toggle("price")}
          className="flex w-full items-center justify-between"
        >
          <h3 className="font-semibold">Price</h3>

          {expanded.price ? (
            <ChevronUp size={18} />
          ) : (
            <ChevronDown size={18} />
          )}
        </button>

        {expanded.price && (
          <div className="mt-5">
            <input
              type="range"
              min="0"
              max="500000"
              value={price}
              onChange={(e) =>
                setPrice(Number(e.target.value))
              }
              className="w-full accent-[#D4AF37]"
            />

            <div className="mt-4 flex justify-between text-sm text-gray-500">
              <span>KSh 0</span>
              <span className="font-semibold text-[#A67C00]">
                KSh {price.toLocaleString()}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* CONDITION */}
      <div className="border-b border-gray-200 py-6">
        <button
          onClick={() => toggle("condition")}
          className="flex w-full items-center justify-between"
        >
          <h3 className="font-semibold">Condition</h3>

          {expanded.condition ? (
            <ChevronUp size={18} />
          ) : (
            <ChevronDown size={18} />
          )}
        </button>

        {expanded.condition && (
          <div className="mt-5 space-y-3">
            {conditions.map((condition) => (
              <label
                key={condition}
                className="flex cursor-pointer items-center gap-3"
              >
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-[#D4AF37]"
                />

                <span className="text-gray-700">
                  {condition}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* LOCATION */}
      <div className="border-b border-gray-200 py-6">
        <button
          onClick={() => toggle("location")}
          className="flex w-full items-center justify-between"
        >
          <h3 className="font-semibold">Location</h3>

          {expanded.location ? (
            <ChevronUp size={18} />
          ) : (
            <ChevronDown size={18} />
          )}
        </button>

        {expanded.location && (
          <div className="mt-5 space-y-3">
            {locations.map((location) => (
              <label
                key={location}
                className="flex cursor-pointer items-center gap-3"
              >
                <input
                  type="checkbox"
                  className="accent-[#D4AF37]"
                />

                <span>{location}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* SELLER RATING */}
      <div className="py-6">
        <button
          onClick={() => toggle("rating")}
          className="flex w-full items-center justify-between"
        >
          <h3 className="font-semibold">
            Seller Rating
          </h3>

          {expanded.rating ? (
            <ChevronUp size={18} />
          ) : (
            <ChevronDown size={18} />
          )}
        </button>

        {expanded.rating && (
          <div className="mt-5 space-y-3">
            {[5, 4, 3].map((rating) => (
              <label
                key={rating}
                className="flex cursor-pointer items-center gap-3"
              >
                <input
                  type="radio"
                  name="rating"
                  className="accent-[#D4AF37]"
                />

                <span>
                  {"★".repeat(rating)}
                  {"☆".repeat(5 - rating)} & Up
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* APPLY BUTTON */}
      <button className="mt-6 w-full rounded-lg bg-[#D4AF37] py-3 font-semibold text-white transition hover:bg-[#BB9627]">
        Apply Filters
      </button>
    </aside>
  );
}
