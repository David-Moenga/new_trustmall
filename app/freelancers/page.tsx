"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Clock3,
  Filter,
  MapPin,
  Search,
  ShieldCheck,
  Star,
  UsersRound,
  X,
} from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const skills = ["All skills", "Design", "Development", "Writing", "Marketing", "Business", "Video & Animation"];

const freelancers = [
  { name: "Amina Wanjiku", role: "Product & UI/UX Designer", initials: "AW", color: "bg-rose-100 text-rose-700", rating: "5.0", reviews: 42, rate: "$28/hr", location: "Nairobi, Kenya", jobs: 67, skills: ["Figma", "Web Design", "Branding"], available: true },
  { name: "David Otieno", role: "Full-stack Web Developer", initials: "DO", color: "bg-blue-100 text-blue-700", rating: "4.9", reviews: 38, rate: "$35/hr", location: "Mombasa, Kenya", jobs: 54, skills: ["React", "Node.js", "TypeScript"], available: true },
  { name: "Lilian Mwende", role: "Content Writer & Strategist", initials: "LM", color: "bg-violet-100 text-violet-700", rating: "5.0", reviews: 29, rate: "$20/hr", location: "Nairobi, Kenya", jobs: 81, skills: ["SEO Writing", "Copywriting", "Research"], available: false },
  { name: "Brian Kiplagat", role: "Digital Marketing Specialist", initials: "BK", color: "bg-emerald-100 text-emerald-700", rating: "4.8", reviews: 51, rate: "$25/hr", location: "Eldoret, Kenya", jobs: 72, skills: ["Google Ads", "Social Media", "Analytics"], available: true },
  { name: "Faith Njeri", role: "Video Editor & Motion Designer", initials: "FN", color: "bg-amber-100 text-amber-700", rating: "4.9", reviews: 34, rate: "$30/hr", location: "Remote", jobs: 46, skills: ["Premiere Pro", "After Effects", "Reels"], available: true },
  { name: "Kevin Mwangi", role: "Business & Finance Consultant", initials: "KM", color: "bg-cyan-100 text-cyan-700", rating: "4.9", reviews: 24, rate: "$40/hr", location: "Nairobi, Kenya", jobs: 39, skills: ["Financial Models", "Strategy", "Excel"], available: false },
];

export default function FreelancersPage() {
  const [query, setQuery] = useState("");
  const [activeSkill, setActiveSkill] = useState("All skills");
  const [availableOnly, setAvailableOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const visibleFreelancers = useMemo(() => {
    const needle = query.toLowerCase().trim();
    return freelancers.filter((freelancer) => {
      const matchesSearch = !needle || [freelancer.name, freelancer.role, freelancer.location, ...freelancer.skills].join(" ").toLowerCase().includes(needle);
      const matchesSkill = activeSkill === "All skills" || freelancer.role.includes(activeSkill) || freelancer.skills.some((skill) => skill.toLowerCase().includes(activeSkill.toLowerCase()));
      return matchesSearch && matchesSkill && (!availableOnly || freelancer.available);
    });
  }, [query, activeSkill, availableOnly]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-16 sm:pt-20">
        <section className="relative overflow-hidden bg-gray-900 py-14 sm:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_20%,#D4AF37_0%,transparent_26%),radial-gradient(circle_at_10%_100%,#5b4210_0%,transparent_38%)] opacity-70" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/15 px-4 py-2 text-sm font-semibold text-[#f6d874]"><BriefcaseBusiness size={16} /> TrustMall Talent</span>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">Hire skilled freelancers you can trust.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">Find verified independent professionals for your next project. Agree on the work, fund escrow, and release payment only when you&apos;re satisfied.</p>
            <div className="mt-8 flex flex-wrap gap-5 text-sm text-gray-200">
              <span className="flex items-center gap-2"><BadgeCheck className="text-[#f6d874]" size={19} /> Verified talent</span>
              <span className="flex items-center gap-2"><ShieldCheck className="text-[#f6d874]" size={19} /> Escrow-protected payments</span>
              <span className="flex items-center gap-2"><UsersRound className="text-[#f6d874]" size={19} /> 2,400+ professionals</span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
            <div className="flex flex-col gap-3 md:flex-row">
              <label className="flex flex-1 items-center gap-3 rounded-lg border border-gray-300 px-4 py-3 focus-within:border-[#D4AF37] focus-within:ring-2 focus-within:ring-[#D4AF37]/20"><Search className="text-gray-400" size={21} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by skill, name, or service" className="w-full outline-none placeholder:text-gray-400" /></label>
              <button onClick={() => setShowFilters(!showFilters)} className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-700 transition hover:border-[#D4AF37] hover:text-[#A67C00]"><Filter size={18} /> Filters</button>
              <Link href="/signup" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#D4AF37] px-5 py-3 font-bold text-white transition hover:bg-[#BB9627]">Post a project <ArrowRight size={17} /></Link>
            </div>
            {showFilters && <div className="mt-4 flex flex-col gap-4 border-t border-gray-100 pt-4 sm:flex-row sm:items-center"><span className="text-sm font-semibold text-gray-700">Availability</span><button onClick={() => setAvailableOnly(!availableOnly)} className={`w-fit rounded-full px-4 py-2 text-sm font-semibold transition ${availableOnly ? "bg-[#FFF3C4] text-[#8a6500]" : "bg-gray-100 text-gray-600"}`}>{availableOnly ? "Available now only" : "Show available now"}</button><button onClick={() => { setAvailableOnly(false); setActiveSkill("All skills"); setQuery(""); }} className="inline-flex w-fit items-center gap-1 text-sm text-gray-500 hover:text-gray-900"><X size={15} /> Clear filters</button></div>}
          </div>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="text-sm font-semibold uppercase tracking-wider text-[#A67C00]">Find your expert</p><h2 className="mt-1 text-3xl font-bold text-gray-900">Featured freelancers</h2></div>
            <p className="text-sm text-gray-500">{visibleFreelancers.length} professionals found</p>
          </div>
          <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
            {skills.map((skill) => <button key={skill} onClick={() => setActiveSkill(skill)} className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${activeSkill === skill ? "bg-gray-900 text-white" : "border border-gray-200 bg-white text-gray-600 hover:border-[#D4AF37]"}`}>{skill}</button>)}
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visibleFreelancers.map((freelancer) => <article key={freelancer.name} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#D4AF37] hover:shadow-lg">
              <div className="flex items-start justify-between gap-3"><div className="flex items-center gap-3"><div className={`flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold ${freelancer.color}`}>{freelancer.initials}</div><div><h3 className="font-bold text-gray-900">{freelancer.name}</h3><p className="mt-0.5 flex items-center gap-1 text-xs font-medium text-[#A67C00]"><BadgeCheck size={14} /> Identity verified</p></div></div>{freelancer.available && <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">Available</span>}</div>
              <p className="mt-5 text-lg font-bold text-gray-900">{freelancer.role}</p>
              <div className="mt-3 flex items-center gap-4 text-sm text-gray-600"><span className="flex items-center gap-1 text-[#A67C00]"><Star size={16} fill="currentColor" /> {freelancer.rating} <span className="text-gray-400">({freelancer.reviews})</span></span><span>{freelancer.jobs} jobs done</span></div>
              <p className="mt-3 flex items-center gap-1.5 text-sm text-gray-500"><MapPin size={15} /> {freelancer.location}</p>
              <div className="mt-4 flex flex-wrap gap-2">{freelancer.skills.map((skill) => <span key={skill} className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">{skill}</span>)}</div>
              <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4"><span className="text-sm text-gray-500">Starting at <strong className="text-base text-gray-900">{freelancer.rate}</strong></span><Link href="/signup" className="text-sm font-bold text-[#A67C00] hover:text-[#D4AF37]">View profile</Link></div>
            </article>)}
          </div>
          {visibleFreelancers.length === 0 && <div className="mt-7 rounded-xl border border-dashed border-gray-300 bg-white py-14 text-center"><Search className="mx-auto text-gray-300" size={32} /><h3 className="mt-3 text-lg font-bold text-gray-900">No freelancers found</h3><p className="mt-1 text-gray-500">Try a different search or clear your filters.</p></div>}
        </section>

        <section className="border-y border-[#EEDB98] bg-[#FFF8E1]"><div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6 lg:px-8"><div className="flex gap-3"><ShieldCheck className="mt-1 shrink-0 text-[#A67C00]" /><div><h3 className="font-bold text-gray-900">Fund with confidence</h3><p className="mt-1 text-sm leading-6 text-gray-600">Your project funds stay in escrow until work is approved.</p></div></div><div className="flex gap-3"><Clock3 className="mt-1 shrink-0 text-[#A67C00]" /><div><h3 className="font-bold text-gray-900">Hire on your timeline</h3><p className="mt-1 text-sm leading-6 text-gray-600">Set milestones and keep every step of your project clear.</p></div></div><div className="flex gap-3"><BadgeCheck className="mt-1 shrink-0 text-[#A67C00]" /><div><h3 className="font-bold text-gray-900">Work with verified talent</h3><p className="mt-1 text-sm leading-6 text-gray-600">Build your team from trusted, reviewed professionals.</p></div></div></div></section>
      </main>
      <Footer />
    </>
  );
}
