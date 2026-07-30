import Link from "next/link";
import { ArrowRight, Globe, ShieldCheck, Truck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#FFFBF2] to-[#FDF6E3] pt-32 pb-24">
      {/* Background Blur */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-20 px-6 lg:flex-row lg:px-8">
        {/* Left Content */}
        <div className="flex-1">
          <span className="inline-flex items-center rounded-sm border border-[#D4AF37]/30 bg-[#FFF8E1] px-4 py-2 text-sm font-medium text-[#A67C00]">
            Secure Escrow • Cross-Border Commerce
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-gray-900 lg:text-7xl">
            Secure Cross-Border
            <span className="block text-[#D4AF37]">Commerce Built on Trust.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
            Buy and sell confidently across borders using escrow-protected
            payments, trusted logistics partners, and verified sellers.
            Every transaction is designed to protect both buyers and sellers
            from fraud.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/marketplace"
              className="flex items-center gap-2 rounded-sm bg-gray-400 px-8 py-4 font-semibold text-white transition hover:bg-[#D4AF37]"
            >
              Explore Marketplace
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/register"
              className="rounded-sm border border-[#D4AF37] px-8 py-4 font-semibold text-[#A67C00] transition hover:bg-[#D4AF37] hover:text-white"
            >
              Become a Seller
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-[#D4AF37]" size={24} />
              <span className="text-gray-700">Escrow Protected</span>
            </div>

            <div className="flex items-center gap-3">
              <Truck className="text-[#D4AF37]" size={24} />
              <span className="text-gray-700">Trusted Logistics</span>
            </div>

            <div className="flex items-center gap-3">
              <Globe className="text-[#D4AF37]" size={24} />
              <span className="text-gray-700">Cross-Border Trading</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-1 justify-center">
          <div className="relative w-full max-w-lg rounded-sm border border-gray-200 bg-white p-8 shadow-lg">
            <h3 className="mb-8 text-center text-2xl font-bold text-gray-900">
              TrustMall Escrow Flow
            </h3>

            <div className="space-y-6">
              {[
                "Buyer Places Order",
                "Funds Secured in Escrow",
                "Seller Ships Product",
                "Track Shipment",
                "Buyer Confirms Delivery",
                "Payment Released",
              ].map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37] font-bold text-white">
                    {index + 1}
                  </div>

                  <div className="flex-1 rounded-sm border border-gray-200 bg-gray-50 px-4 py-3">
                    <p className="font-medium text-gray-700">{step}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-sm bg-[#FFF8E1] p-4 text-center">
              <p className="font-semibold text-[#A67C00]">
                Funds are released only after successful delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}