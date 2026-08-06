import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TrustMall | Trusted Escrow Marketplace",
  description:
    "A trusted marketplace connecting buyers and sellers through secure escrow payments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
