"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    image: "/images/products/iphone.jpg",
    title: "Apple iPhone 15 Pro Max",
    description:
      "Brand new iPhone 15 Pro Max with 256GB storage and official warranty.",
    category: "Electronics",
    seller: "Tech Hub Kenya",
    location: "Nairobi",
    price: 165000,
    oldPrice: 179000,
    rating: 4.9,
    reviews: 241,
    verified: true,
  },
  {
    id: 2,
    image: "/images/products/toyota.jpg",
    title: "Toyota Land Cruiser Prado",
    description:
      "2018 model, excellent condition, low mileage, accident free.",
    category: "Automotive",
    seller: "Prime Motors",
    location: "Mombasa",
    price: 4500000,
    oldPrice: 4800000,
    rating: 4.8,
    reviews: 95,
    verified: true,
  },
  {
    id: 3,
    image: "/images/products/laptop.jpg",
    title: "MacBook Pro M3",
    description:
      "Apple MacBook Pro with M3 chip, 16GB RAM, 512GB SSD.",
    category: "Electronics",
    seller: "Apple Store KE",
    location: "Nakuru",
    price: 245000,
    oldPrice: 259000,
    rating: 5,
    reviews: 112,
    verified: true,
  },
  {
    id: 4,
    image: "/images/products/tractor.jpg",
    title: "Massey Ferguson Tractor",
    description:
      "Reliable farming tractor suitable for medium and large farms.",
    category: "Agriculture",
    seller: "Agri Solutions",
    location: "Eldoret",
    price: 1850000,
    rating: 4.7,
    reviews: 48,
    verified: true,
  },
  {
    id: 5,
    image: "/images/products/house.jpg",
    title: "3 Bedroom Modern House",
    description:
      "Spacious modern home located in a secure gated community.",
    category: "Real Estate",
    seller: "Home Kenya",
    location: "Kiambu",
    price: 14500000,
    rating: 4.9,
    reviews: 28,
    verified: true,
  },
  {
    id: 6,
    image: "/images/products/sofa.jpg",
    title: "Luxury L-Shaped Sofa",
    description:
      "Premium leather sofa designed for modern living rooms.",
    category: "Home & Living",
    seller: "Urban Furniture",
    location: "Nairobi",
    price: 85000,
    oldPrice: 96000,
    rating: 4.8,
    reviews: 67,
    verified: true,
  },
  {
    id: 7,
    image: "/images/products/shoes.jpg",
    title: "Nike Air Max",
    description:
      "Comfortable original Nike sneakers for everyday wear.",
    category: "Fashion",
    seller: "Sneaker World",
    location: "Kisumu",
    price: 12500,
    oldPrice: 15000,
    rating: 4.6,
    reviews: 132,
    verified: true,
  },
  {
    id: 8,
    image: "/images/products/watch.jpg",
    title: "Samsung Galaxy Watch",
    description:
      "Smartwatch with health tracking and Bluetooth connectivity.",
    category: "Electronics",
    seller: "Smart Tech",
    location: "Nairobi",
    price: 35000,
    rating: 4.7,
    reviews: 75,
    verified: false,
  },
];

export default function ProductGrid() {
  const [visible, setVisible] = useState(8);

  const displayedProducts = products.slice(0, visible);

  return (
    <section>
      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {displayedProducts.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}
      </div>

      {/* Empty State */}
      {displayedProducts.length === 0 && (
        <div className="rounded-xl border border-dashed border-gray-300 bg-white py-24 text-center">
          <h3 className="text-2xl font-bold text-gray-800">
            No Products Found
          </h3>

          <p className="mt-3 text-gray-500">
            Try adjusting your search or filters.
          </p>
        </div>
      )}

      {/* Load More */}
      {visible < products.length && (
        <div className="mt-14 flex justify-center">
          <button
            onClick={() => setVisible((prev) => prev + 6)}
            className="rounded-lg bg-[#D4AF37] px-8 py-4 font-semibold text-white transition duration-300 hover:bg-[#BB9627]"
          >
            Load More Products
          </button>
        </div>
      )}
    </section>
  );
}