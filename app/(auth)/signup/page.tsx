"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, LockKeyhole, Mail, ShieldCheck, UserRound } from "lucide-react";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-6xl items-center justify-center px-4 py-8 sm:min-h-[calc(100vh-81px)] sm:px-6 sm:py-12 lg:px-8">
      <section className="w-full max-w-lg rounded-2xl border border-gray-100 bg-white p-5 shadow-xl shadow-[#D4AF37]/10 sm:p-9">
        <div className="text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF8E1] text-[#A67C00]"><ShieldCheck size={25} /></span>
          <p className="mt-4 text-sm font-semibold text-[#A67C00]">JOIN TRUSTMALL</p>
          <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">Create your account</h1>
          <p className="mt-3 text-gray-500">Buy and sell with confidence through protected escrow payments.</p>
        </div>

        <form className="mt-8 space-y-5" onSubmit={(event) => event.preventDefault()}>
          <label className="block text-sm font-semibold text-gray-700">Full name<span className="relative mt-2 block"><UserRound size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" /><input type="text" required autoComplete="name" placeholder="Your full name" className="h-12 w-full rounded-lg border border-gray-200 bg-gray-50 pl-11 pr-4 text-gray-900 outline-none transition focus:border-[#D4AF37] focus:bg-white focus:ring-4 focus:ring-[#D4AF37]/10" /></span></label>
          <label className="block text-sm font-semibold text-gray-700">Email address<span className="relative mt-2 block"><Mail size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" /><input type="email" required autoComplete="email" placeholder="you@example.com" className="h-12 w-full rounded-lg border border-gray-200 bg-gray-50 pl-11 pr-4 text-gray-900 outline-none transition focus:border-[#D4AF37] focus:bg-white focus:ring-4 focus:ring-[#D4AF37]/10" /></span></label>
          <label className="block text-sm font-semibold text-gray-700">Password<span className="relative mt-2 block"><LockKeyhole size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" /><input type={showPassword ? "text" : "password"} required minLength={8} autoComplete="new-password" placeholder="At least 8 characters" className="h-12 w-full rounded-lg border border-gray-200 bg-gray-50 pl-11 pr-11 text-gray-900 outline-none transition focus:border-[#D4AF37] focus:bg-white focus:ring-4 focus:ring-[#D4AF37]/10" /><button type="button" aria-label={showPassword ? "Hide password" : "Show password"} onClick={() => setShowPassword((value) => !value)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-gray-400 transition hover:text-[#A67C00]">{showPassword ? <EyeOff size={18} /> : <Eye size={18} />}</button></span></label>
          <label className="flex cursor-pointer items-start gap-3 text-sm leading-5 text-gray-600"><input type="checkbox" required className="mt-0.5 h-4 w-4 rounded border-gray-300 accent-[#D4AF37]" />I agree to the Terms of Service and Privacy Policy.</label>
          <button type="submit" className="h-12 w-full rounded-lg bg-[#D4AF37] font-bold text-white shadow-md transition hover:bg-[#BB9627] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]">Create account</button>
        </form>
        <p className="mt-7 text-center text-sm text-gray-600">Already have an account? <Link href="/login" className="font-bold text-[#A67C00] hover:text-[#D4AF37]">Sign in</Link></p>
      </section>
    </div>
  );
}
