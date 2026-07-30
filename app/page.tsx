import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
// import Statistics from "@/components/landing/Statistics";
// import HowItWorks from "@/components/landing/HowItWorks";
// import WhyTrustMall from "@/components/landing/WhyTrustMall";
// import Categories from "@/components/landing/Categories";
// import FeaturedProducts from "@/components/landing/FeaturedProducts";
// import Escrow from "@/components/landing/Escrow";
// import CrossBorder from "@/components/landing/CrossBorder";
// import Testimonials from "@/components/landing/Testimonials";
// import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Trust Statistics */}
      {/* <Statistics /> */}

      {/* How It Works */}
      {/* <HowItWorks /> */}

      {/* Why Choose TrustMall */}
      {/* <WhyTrustMall /> */}

      {/* Marketplace Categories */}
      {/* <Categories /> */}

      {/* Featured Products */}
      {/* <FeaturedProducts /> */}

      {/* Escrow Process */}
      {/* <Escrow /> */}

      {/* Cross-Border Commerce */}
      {/* <CrossBorder /> */}

      {/* Testimonials */}
      {/* <Testimonials /> */}

      {/* Call to Action */}
      {/* <CTA /> */}

      {/* Footer */}
      <Footer />
    </main>
  );
}
