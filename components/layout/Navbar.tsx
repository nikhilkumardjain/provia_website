"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import Container from "@/components/ui/Container";

import { navigation } from "@/data/navigation";

import useScrolled from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const scrolled = useScrolled();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl"
          : "bg-white"
      )}
    >
      <Container>
        <div className="flex h-24 items-center justify-between">

          {/* Logo */}

          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-4 transition-transform duration-300 hover:scale-[1.02]"
          >
            <Image
              src="/logos/provia-logo.png"
              alt="Provia Group"
              width={58}
              height={58}
              priority
            />

            <div className="leading-none">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
                PROVIA
              </h1>

              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.42em] text-[#C8A04A]">
                GROUP
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-10 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="
                  relative
                  text-sm
                  font-semibold
                  text-slate-700
                  transition-all
                  duration-300
                  hover:text-[#C8A04A]
                  after:absolute
                  after:-bottom-2
                  after:left-0
                  after:h-[2px]
                  after:w-0
                  after:bg-[#C8A04A]
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-800 transition hover:border-[#C8A04A] hover:text-[#C8A04A] lg:hidden"
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

        </div>

        {/* Mobile Navigation */}

        {mobileMenuOpen && (
          <div className="border-t border-slate-200 py-4 lg:hidden">
            <nav className="flex flex-col">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="border-b border-slate-100 px-2 py-4 text-base font-semibold text-slate-700 transition-colors hover:text-[#C8A04A]"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}

      </Container>
    </header>
  );
}