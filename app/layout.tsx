import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "PDF Page Studio — Save the web as clean PDFs",
  description:
    "A tiny Chrome extension to save any web page as a clean PDF, print it, take a full-page screenshot, or annotate local PDFs.",
  icons: { icon: "/favicon.png" },
};

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <Image
        src="/logo.png"
        alt="PDF Page Studio logo"
        width={36}
        height={36}
        className="rounded-lg shadow-sm"
      />
      <span className="font-bold text-[15px] tracking-tight text-gray-900">
        PDF Page Studio
      </span>
    </Link>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/75 border-b border-gray-200/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />
        <nav className="flex items-center gap-1 sm:gap-2 text-sm font-medium text-gray-700">
          <Link
            href="/"
            className="px-3 py-1.5 rounded-md hover:bg-gray-100 transition"
          >
            Home
          </Link>
          <Link
            href="/support"
            className="px-3 py-1.5 rounded-md hover:bg-gray-100 transition"
          >
            Support
          </Link>
          <Link
            href="/privacy"
            className="px-3 py-1.5 rounded-md hover:bg-gray-100 transition"
          >
            Privacy
          </Link>
          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            rel="noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 brand-gradient-bg text-white px-3.5 py-1.5 rounded-md text-sm font-semibold shadow-sm hover:shadow-md transition"
          >
            Add to Chrome
          </a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-200/60 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 text-sm text-gray-600">
          <Image
            src="/logo.png"
            alt=""
            width={24}
            height={24}
            className="rounded-md opacity-80"
          />
          <span>
            © {new Date().getFullYear()} PDF Page Studio. All rights reserved.
          </span>
        </div>
        <div className="flex items-center gap-5 text-sm text-gray-600">
          <Link href="/support" className="hover:text-brand transition">
            Support
          </Link>
          <Link href="/privacy" className="hover:text-brand transition">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="max-w-6xl mx-auto px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
