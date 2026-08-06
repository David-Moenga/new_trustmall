"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, LockKeyhole, Mail, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mx-auto grid min-h-[calc(100vh-64px)] max-w-6xl items-center gap-10 px-4 py-8 sm:min-h-[calc(100vh-81px)] sm:px-6 sm:py-12 lg:grid-cols-2 lg:px-8">
      <section className="hidden rounded-3xl bg-gray-900 p-12 text-white lg:block">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/15 px-4 py-2 text-sm font-semibold text-[#F5D76E]">
          <ShieldCheck size={17} /> Protected trading
        </span>
        <h1 className="mt-8 text-5xl font-bold leading-tight">Welcome back to safer trading.</h1>
        <p className="mt-6 max-w-md text-lg leading-8 text-gray-300">
          Sign in to manage your purchases, listings, and secure escrow transactions in one place.
        </p>
        <div className="mt-12 border-l-2 border-[#D4AF37] pl-5 text-sm leading-6 text-gray-300">
          Your account helps keep our marketplace transparent, verified, and trusted.
        </div>
      </section>

      <section className="mx-auto w-full max-w-md rounded-2xl border border-gray-100 bg-white p-5 shadow-xl shadow-[#D4AF37]/10 sm:p-9">
        <div>
          <p className="text-sm font-semibold text-[#A67C00]">WELCOME BACK</p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">Sign in to TrustMall</h2>
          <p className="mt-3 text-gray-500">Enter your details to continue trading securely.</p>
        </div>

        <form className="mt-8 space-y-5" onSubmit={(event) => event.preventDefault()}>
          <label className="block text-sm font-semibold text-gray-700">
            Email address
            <span className="relative mt-2 block">
              <Mail size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="email" required autoComplete="email" placeholder="you@example.com" className="h-12 w-full rounded-lg border border-gray-200 bg-gray-50 pl-11 pr-4 text-gray-900 outline-none transition focus:border-[#D4AF37] focus:bg-white focus:ring-4 focus:ring-[#D4AF37]/10" />
            </span>
          </label>

          <label className="block text-sm font-semibold text-gray-700">
            Password
            <span className="relative mt-2 block">
              <LockKeyhole size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type={showPassword ? "text" : "password"} required autoComplete="current-password" placeholder="Enter your password" className="h-12 w-full rounded-lg border border-gray-200 bg-gray-50 pl-11 pr-11 text-gray-900 outline-none transition focus:border-[#D4AF37] focus:bg-white focus:ring-4 focus:ring-[#D4AF37]/10" />
              <button type="button" aria-label={showPassword ? "Hide password" : "Show password"} onClick={() => setShowPassword((value) => !value)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-gray-400 transition hover:text-[#A67C00]">
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </span>
          </label>

          <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
            <label className="flex cursor-pointer items-center gap-2 text-gray-600"><input type="checkbox" className="h-4 w-4 rounded border-gray-300 accent-[#D4AF37]" /> Remember me</label>
            <Link href="#" className="font-semibold text-[#A67C00] hover:text-[#D4AF37]">Forgot password?</Link>
          </div>

          <button type="submit" className="h-12 w-full rounded-lg bg-[#D4AF37] font-bold text-white shadow-md transition hover:bg-[#BB9627] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]">Sign in</button>
        </form>

        <p className="mt-7 text-center text-sm text-gray-600">New to TrustMall? <Link href="/signup" className="font-bold text-[#A67C00] hover:text-[#D4AF37]">Create an account</Link></p>
      </section>
    </div>
  );
}
