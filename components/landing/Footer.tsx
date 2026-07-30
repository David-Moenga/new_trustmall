import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const company = [
  { name: "About Us", href: "/about" },
  { name: "Our Story", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const marketplace = [
  { name: "Marketplace", href: "/marketplace" },
  { name: "Categories", href: "/categories" },
  { name: "Become a Seller", href: "/seller" },
  { name: "How It Works", href: "/how-it-works" },
];

const support = [
  { name: "Help Center", href: "/help" },
  { name: "Buyer Protection", href: "/buyer-protection" },
  { name: "Escrow Policy", href: "/escrow-policy" },
  { name: "Shipping Guide", href: "/shipping" },
];

const legal = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Cookie Policy", href: "/cookies" },
  { name: "Refund Policy", href: "/refund-policy" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-[#D4AF37] text-xl font-bold text-white">
                T
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  TrustMall
                </h2>

                <p className="text-sm text-gray-500">
                  Secure Cross-Border Commerce
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-md leading-7 text-gray-600">
              TrustMall is a decentralized escrow-powered marketplace
              enabling buyers and sellers to trade confidently across borders
              through secure payments, trusted logistics partners, and
              transparent transactions.
            </p>

            <div className="mt-8 space-y-3 text-gray-600">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#D4AF37]" />
                hello@trustmall.com
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#D4AF37]" />
                +254 XXX XXX XXX
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#D4AF37]" />
                Nairobi, Kenya
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin, Github].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="rounded-sm border border-gray-300 p-2 transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-gray-900">
              Company
            </h3>

            <ul className="space-y-4">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-gray-600 transition hover:text-[#D4AF37]"
                  >
                    {item.name}
                    <ArrowUpRight size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Marketplace */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-gray-900">
              Marketplace
            </h3>

            <ul className="space-y-4">
              {marketplace.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-gray-600 transition hover:text-[#D4AF37]"
                  >
                    {item.name}
                    <ArrowUpRight size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support + Legal */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-gray-900">
              Support
            </h3>

            <ul className="space-y-4">
              {support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-gray-600 transition hover:text-[#D4AF37]"
                  >
                    {item.name}
                    <ArrowUpRight size={14} />
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mb-6 mt-10 text-lg font-semibold text-gray-900">
              Legal
            </h3>

            <ul className="space-y-4">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-gray-600 transition hover:text-[#D4AF37]"
                  >
                    {item.name}
                    <ArrowUpRight size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 text-sm text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} TrustMall. All rights reserved.
          </p>

          <p>
            Building the future of secure cross-border commerce.
          </p>
        </div>
      </div>
    </footer>
  );
}