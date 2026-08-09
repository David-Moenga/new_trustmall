import Link from "next/link";
import { ArrowRight, BadgeCheck, BarChart3, CheckCircle2, PackagePlus, Wallet } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const benefits = [
  { title: "Build buyer confidence", text: "Earn trust with a verified seller profile and transparent transaction history.", icon: BadgeCheck },
  { title: "Get paid securely", text: "Escrow protects every order and releases your money when delivery is confirmed.", icon: Wallet },
  { title: "Grow your business", text: "Reach buyers actively looking across TrustMall's marketplace categories.", icon: BarChart3 },
];

export default function SellerPage() {
  return (
    <><Navbar /><main className="min-h-screen pt-16 sm:pt-20">
      <section className="relative overflow-hidden bg-gray-900 py-16 sm:py-24"><div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#D4AF37]/20 blur-3xl" /><div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8"><div><span className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/15 px-4 py-2 text-sm font-semibold text-[#F5D76E]">Sell with TrustMall</span><h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">Turn what you sell into a business people trust.</h1><p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">Set up your seller profile, list your products, and trade confidently with secure escrow on every eligible order.</p><Link href="/signup" className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#D4AF37] px-6 py-3.5 font-semibold text-white transition hover:bg-[#BB9627]">Create seller account <ArrowRight size={18} /></Link></div><div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur sm:p-8"><p className="text-sm font-semibold uppercase tracking-wider text-[#F5D76E]">Your seller journey</p><ol className="mt-6 space-y-5">{["Create and verify your account", "Add your first listing", "Receive protected orders", "Ship, deliver and get paid"].map((step, i) => <li key={step} className="flex items-center gap-4 text-white"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#D4AF37] font-bold">{i + 1}</span>{step}</li>)}</ol></div></div></section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8"><div className="max-w-2xl"><h2 className="text-3xl font-bold text-gray-900">Everything you need to sell with confidence.</h2><p className="mt-4 leading-7 text-gray-600">TrustMall puts security and credibility at the centre of every sale.</p></div><div className="mt-10 grid gap-6 md:grid-cols-3">{benefits.map(({ title, text, icon: Icon }) => <div key={title} className="rounded-xl border border-gray-200 p-6"><div className="inline-flex rounded-lg bg-[#FFF8E1] p-3 text-[#A67C00]"><Icon size={24} /></div><h3 className="mt-5 text-xl font-bold text-gray-900">{title}</h3><p className="mt-3 leading-7 text-gray-600">{text}</p></div>)}</div></section>
      <section className="bg-[#FFF8E1] px-4 py-14 sm:px-6"><div className="mx-auto max-w-3xl text-center"><PackagePlus className="mx-auto text-[#A67C00]" size={34} /><h2 className="mt-4 text-3xl font-bold text-gray-900">List your first item today.</h2><p className="mt-4 text-gray-600">It only takes a few minutes to get started.</p><Link href="/signup" className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#D4AF37] px-6 py-3 font-semibold text-white hover:bg-[#BB9627]">Get started <CheckCircle2 size={18} /></Link></div></section>
    </main><Footer /></>
  );
}
