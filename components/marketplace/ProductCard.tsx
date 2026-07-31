"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  MapPin,
  ShieldCheck,
  Star,
  BadgeCheck,
  Eye,
} from "lucide-react";

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
  seller: string;
  location: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  verified?: boolean;
}

export default function ProductCard({
  id,
  image,
  title,
  description,
  category,
  seller,
  location,
  price,
  oldPrice,
  rating,
  reviews,
  verified = false,
}: ProductCardProps) {
  const discount =
    oldPrice && oldPrice > price
      ? Math.round(((oldPrice - price) / oldPrice) * 100)
      : null;

  return (
    <article className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Wishlist */}
        <button className="absolute right-4 top-4 rounded-full bg-white/95 p-2 shadow transition hover:bg-[#D4AF37] hover:text-white">
          <Heart size={18} />
        </button>

        {/* Discount */}
        {discount && (
          <div className="absolute left-4 top-4 rounded-md bg-red-500 px-3 py-1 text-xs font-bold text-white">
            -{discount}%
          </div>
        )}

        {/* Escrow */}
        <div className="absolute bottom-4 left-4 rounded-full bg-[#D4AF37] px-3 py-1 text-xs font-semibold text-white shadow">
          Escrow Protected
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        {/* Category */}
        <span className="rounded-full bg-[#FFF8E1] px-3 py-1 text-xs font-semibold text-[#A67C00]">
          {category}
        </span>

        {/* Title */}
        <h3 className="mt-4 line-clamp-2 text-xl font-bold text-gray-900">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
          {description}
        </p>

        {/* Price */}
        <div className="mt-5 flex items-center gap-3">
          <span className="text-2xl font-bold text-[#D4AF37]">
            KSh {price.toLocaleString()}
          </span>

          {oldPrice && (
            <span className="text-gray-400 line-through">
              KSh {oldPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Seller */}
        <div className="mt-6 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1">
              <p className="font-semibold text-gray-800">
                {seller}
              </p>

              {verified && (
                <BadgeCheck
                  size={18}
                  className="text-[#D4AF37]"
                />
              )}
            </div>

            <div className="mt-1 flex items-center gap-1 text-sm text-gray-500">
              <MapPin size={14} />
              {location}
            </div>
          </div>

          <div className="text-right">
            <div className="flex items-center justify-end gap-1">
              <Star
                size={15}
                className="fill-yellow-400 text-yellow-400"
              />

              <span className="font-semibold">
                {rating}
              </span>
            </div>

            <p className="text-xs text-gray-500">
              ({reviews} reviews)
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-200" />

        {/* Bottom */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-[#A67C00]">
            <ShieldCheck size={18} />
            Protected Trade
          </div>

          <Link
            href={`/marketplace/${id}`}
            className="flex items-center gap-2 rounded-lg bg-[#D4AF37] px-5 py-2.5 font-semibold text-white transition hover:bg-[#BB9627]"
          >
            <Eye size={17} />
            View
          </Link>
        </div>
      </div>
    </article>
  );
}