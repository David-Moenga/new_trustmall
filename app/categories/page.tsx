import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Car,
  Shirt,
  Smartphone,
  Sofa,
  Tractor,
  Wrench,
} from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const categories = [
  { name: "Automotive", description: "Cars, parts & accessories", image: "/images/categories/automotive.jpeg", icon: Car, count: "2.5k+" },
  { name: "Agriculture", description: "Farm produce & equipment", image: "/images/categories/agriculture.jpeg", icon: Tractor, count: "1.2k+" },
  { name: "Electronics", description: "Phones, laptops & gadgets", image: "/images/categories/electronics.jpeg", icon: Smartphone, count: "8.7k+" },
  { name: "Fashion", description: "Clothing & accessories", image: "/images/categories/fashion.jpeg", icon: Shirt, count: "5.4k+" },
  { name: "Home & Living", description: "Furniture & decor", image: "/images/categories/home.png", icon: Sofa, count: "3.1k+" },
  { name: "Real Estate", description: "Land, houses & rentals", image: "/images/categories/real-estate.jpg", icon: Building2, count: "900+" },
  { name: "Jobs", description: "Employment opportunities", image: "/images/categories/jobs.jpg", icon: Briefcase, count: "650+" },
  { name: "Services", description: "Professional services", image: "/images/categories/services.jpg", icon: Wrench, count: "1.8k+" },
];

export default function CategoriesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-16 sm:pt-20">
        <section className="relative overflow-hidden bg-gray-900 py-16 sm:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#D4AF37_0%,transparent_35%)] opacity-30" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/15 px-4 py-2 text-sm font-semibold text-[#F5D76E]">Marketplace categories</span>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">Find exactly what you need.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">Explore products, opportunities and services from verified sellers—every transaction protected by escrow.</p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Explore all categories</h2>
              <p className="mt-2 text-gray-600">More than 24,000 listings from trusted sellers.</p>
            </div>
            <Link href="/marketplace" className="inline-flex items-center gap-2 font-semibold text-[#A67C00] hover:text-[#D4AF37]">View all listings <ArrowRight size={18} /></Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map(({ name, description, image, icon: Icon, count }) => (
              <Link key={name} href={`/marketplace?category=${encodeURIComponent(name.toLowerCase())}`} className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#D4AF37] hover:shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <Image src={image} alt={name} fill className="object-cover transition duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-lg bg-white/90 p-3 text-[#A67C00]"><Icon size={22} /></div>
                  <span className="absolute right-4 top-4 rounded-full bg-[#D4AF37] px-3 py-1 text-xs font-bold text-white">{count}</span>
                  <h3 className="absolute bottom-4 left-5 text-2xl font-bold text-white">{name}</h3>
                </div>
                <div className="flex items-center justify-between p-5"><p className="text-gray-600">{description}</p><ArrowRight className="text-[#D4AF37] transition group-hover:translate-x-1" size={19} /></div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
