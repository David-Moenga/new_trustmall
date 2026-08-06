import type { ReactNode } from "react";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-[#FFFCF4]">
      <header className="border-b border-[#D4AF37]/15 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="TrustMall home">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#D4AF37] text-lg font-bold text-white shadow-sm">
              T
            </span>
            <span>
            <span className="block text-lg font-bold text-gray-900 sm:text-xl">TrustMall</span>
              <span className="block text-xs font-medium text-gray-500">Trade with Confidence</span>
            </span>
          </Link>

          <div className="hidden items-center gap-2 text-sm text-gray-500 sm:flex">
            <ShieldCheck size={18} className="text-[#D4AF37]" />
            Secure escrow marketplace
          </div>
        </div>
      </header>

      {children}
    </main>
  );
}
