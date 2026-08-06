import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

import SearchBar from "@/components/marketplace/SearchBar";
import CategoryTabs from "@/components/marketplace/CategoryTabs";
import FilterSidebar from "@/components/marketplace/FilterSidebar";
import ProductGrid from "@/components/marketplace/ProductGrid";

export default function Marketplace() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 pt-16 sm:pt-20">
        {/* Hero */}
        <section className="border-b border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
            <span className="rounded-full bg-[#FFF8E1] px-4 py-2 text-sm font-semibold text-[#A67C00]">
              Marketplace
            </span>

            <h1 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              Discover Products From
              <span className="block text-[#D4AF37]">
                Trusted Sellers
              </span>
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
              Browse thousands of products from verified sellers. Every
              transaction is protected through TrustMall&apos;s escrow system,
              ensuring safe and transparent trading.
            </p>

            <div className="mt-8 sm:mt-10">
              <SearchBar />
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
            <CategoryTabs />
          </div>
        </section>

        {/* Marketplace Content */}
        <section className="py-6 sm:py-10">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
            {/* Sidebar */}
            <aside className="lg:col-span-3">
              <FilterSidebar />
            </aside>

            {/* Products */}
            <section className="lg:col-span-9">
              {/* Top Bar */}
              <div className="mb-5 flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:mb-6 sm:p-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Featured Products
                  </h2>

                  <p className="text-sm text-gray-500">
                    Showing 1 – 24 of 2,450 products
                  </p>
                </div>

                <select aria-label="Sort products" className="w-full rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#D4AF37] md:w-auto">
                  <option>Newest First</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Most Popular</option>
                  <option>Highest Rated</option>
                </select>
              </div>

              <ProductGrid />
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
