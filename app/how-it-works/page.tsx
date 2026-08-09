import Link from "next/link";
import { ArrowRight, BadgeCheck, CheckCircle2, PackageCheck, ShieldCheck, Wallet } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const steps = [
  { title: "Find a verified seller", text: "Browse listings and choose a seller with a verified profile and transparent ratings.", icon: BadgeCheck },
  { title: "Pay securely into escrow", text: "Your payment is held safely by TrustMall instead of being sent directly to the seller.", icon: Wallet },
  { title: "Receive your order", text: "The seller ships the item and you track delivery through the transaction.", icon: PackageCheck },
  { title: "Confirm and release payment", text: "Once your order arrives as expected, confirm delivery and the funds are released to the seller.", icon: CheckCircle2 },
];

export default function HowItWorksPage() {
  return (
    <><Navbar /><main className="min-h-screen pt-16 sm:pt-20">
      <section className="bg-[#FFF8E1] py-16 sm:py-20"><div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#A67C00]"><ShieldCheck size={16} /> Protected trading</span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">A safer way to buy and sell online.</h1>
        <p className="mt-5 text-lg leading-8 text-gray-600">TrustMall uses escrow to make sure money only moves when both sides have met their part of the deal.</p>
      </div></section>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24"><div className="grid gap-8 md:grid-cols-2">
        {steps.map(({ title, text, icon: Icon }, index) => <article key={title} className="relative rounded-2xl border border-gray-200 bg-white p-7 shadow-sm sm:p-8"><span className="absolute right-7 top-7 text-5xl font-bold text-gray-100">0{index + 1}</span><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF8E1] text-[#A67C00]"><Icon size={25} /></div><h2 className="mt-6 text-xl font-bold text-gray-900">{title}</h2><p className="mt-3 max-w-sm leading-7 text-gray-600">{text}</p></article>)}
      </div></section>
      <section className="bg-gray-900 px-4 py-16 text-center sm:px-6"><h2 className="text-3xl font-bold text-white">Ready to trade with confidence?</h2><p className="mx-auto mt-4 max-w-xl text-gray-300">Join a marketplace where buyers and sellers are protected at every step.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/marketplace" className="inline-flex items-center justify-center gap-2 rounded-md bg-[#D4AF37] px-6 py-3 font-semibold text-white hover:bg-[#BB9627]">Explore marketplace <ArrowRight size={18} /></Link><Link href="/seller" className="rounded-md border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white hover:text-gray-900">Start selling</Link></div></section>
    </main><Footer /></>
  );
}
