import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const quickLinks = [
  { name: "Marketplace", href: "/marketplace" },
  { name: "Categories", href: "/categories" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Start Selling", href: "/seller" },
];

const socialLinks = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaXTwitter, href: "#", label: "X" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-[#D4AF37] text-xl font-bold text-white">
                T
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  TrustMall
                </h2>

                <p className="text-sm text-gray-500">
                  Trade with Confidence
                </p>
              </div>
            </div>

            <p className="mt-5 text-gray-600 leading-7">
              A decentralized escrow-powered marketplace designed to make
              online buying and selling safer through secure payments,
              verified users, and transparent transactions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-gray-900">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 transition hover:text-[#D4AF37]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-gray-900">
              Contact
            </h3>

            <div className="space-y-4">
              <Link
                href="mailto:hello@trustmall.com"
                className="flex items-center gap-3 text-gray-600 hover:text-[#D4AF37]"
              >
                <Mail size={18} className="text-[#D4AF37]" />
                hello@trustmall.com
              </Link>

              <Link
                href="tel:+254700000000"
                className="flex items-center gap-3 text-gray-600 hover:text-[#D4AF37]"
              >
                <Phone size={18} className="text-[#D4AF37]" />
                +254 XXX XXX XXX
              </Link>

              <div className="flex items-center gap-3 text-gray-600">
                <MapPin size={18} className="text-[#D4AF37]" />
                Nairobi, Kenya
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-sm border border-gray-300 transition hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-white"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} TrustMall. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
