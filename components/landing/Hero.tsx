import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  BadgeCheck,
  Wallet,
  PackageCheck,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[720px] items-center overflow-hidden sm:min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 -z-0">
        <Image
          src="/images/hero/hero.jpg"
          alt="TrustMall Marketplace"
          fill
          priority
          sizes="100vw"
          className="
    object-cover
    scale-105
    brightness-[0.35]
    contrast-110
    saturate-75
  "
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 -z-20 bg-black/70" />

      {/* Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/70 to-black/30" />

      {/* Decorative Blurs */}
      <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/15 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/10 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-28 sm:px-6 sm:py-36 lg:flex-row lg:gap-20 lg:px-8">
        {/* LEFT */}
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/15 px-5 py-2 text-sm font-semibold text-[#F5D76E] backdrop-blur">
            <ShieldCheck size={16} />
            Trusted Escrow Marketplace
          </div>

          <h1 className="mt-7 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:mt-8 lg:text-7xl">
            Trade with Confidence,
            <span className="block text-orange-400">Powered by Trust.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-200 sm:mt-8 sm:text-lg sm:leading-8">
            TrustMall connects buyers and sellers through a decentralized escrow
            system that keeps every transaction transparent and secure. Funds
            are only released after successful delivery, giving both parties
            complete peace of mind.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-5">
            <Link
              href="/marketplace"
              className="flex items-center justify-center gap-2 rounded-md bg-[#D4AF37] px-8 py-4 font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#BB9627]"
            >
              Explore Marketplace
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/seller"
              className="rounded-md border border-white/30 bg-white/10 px-8 py-4 text-center font-semibold text-white backdrop-blur transition hover:bg-white hover:text-black"
            >
              Become a Seller
            </Link>
          </div>

          {/* Statistics */}
          <div className="mt-12 grid max-w-xl grid-cols-3 gap-3 sm:mt-16 sm:gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[#D4AF37] sm:text-3xl">10K+</h3>
              <p className="mt-1 text-sm text-gray-300 sm:text-base">Products</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#D4AF37] sm:text-3xl">2K+</h3>
              <p className="mt-1 text-sm text-gray-300 sm:text-base">Verified Sellers</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#D4AF37] sm:text-3xl">100%</h3>
              <p className="mt-1 text-sm text-gray-300 sm:text-base">Escrow Protected</p>
            </div>
          </div>

          {/* Features */}
          <div className="mt-10 flex flex-col gap-4 sm:mt-14 sm:flex-row sm:flex-wrap sm:gap-8">
            {[
              {
                icon: ShieldCheck,
                text: "Escrow Protected",
              },
              {
                icon: BadgeCheck,
                text: "Verified Sellers",
              },
              {
                icon: Wallet,
                text: "Secure Payments",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.text}
                  className="flex items-center gap-3 transition hover:scale-105"
                >
                  <Icon size={24} className="text-[#D4AF37]" />

                  <span className="font-semibold text-white">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-1 justify-center">
          <div className="relative w-full max-w-lg rounded-2xl border border-white/20 bg-white/90 p-5 shadow-2xl backdrop-blur-xl sm:p-8">
            <h3 className="mb-7 text-center text-xl font-bold sm:mb-10 sm:text-2xl">
              Secure Transaction Flow
            </h3>

            <div className="absolute left-9 top-24 h-[340px] w-0.5 bg-[#D4AF37]/30 sm:left-12 sm:top-28" />

            <div className="space-y-5 sm:space-y-8">
              {[
                "Buyer Places Order",
                "Payment Locked in Escrow",
                "Seller Ships Product",
                "Courier Delivers",
                "Buyer Confirms Delivery",
                "Funds Released",
              ].map((step, index) => (
                <div key={step} className="relative flex items-center gap-3 sm:gap-4">
                  <div className="z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#D4AF37] font-bold text-white">
                    {index + 1}
                  </div>

                  <div className="flex-1 rounded-lg bg-gray-50 px-4 py-3 text-sm shadow-sm sm:px-5 sm:py-4 sm:text-base">
                    {step}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-xl bg-[#FFF8E1] p-5">
              <div className="flex items-start gap-3">
                <PackageCheck className="mt-1 text-[#D4AF37]" size={26} />

                <p className="leading-7 text-gray-700">
                  Payments stay protected until the buyer confirms successful
                  delivery, ensuring fairness for both buyers and sellers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
