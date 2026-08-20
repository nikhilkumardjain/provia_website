"use client";

import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";

import { navigation } from "@/data/navigation";

import useScrolled from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const scrolled = useScrolled();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-sm"
          : "bg-white"
      )}
    >
      <Container>
        <div className="flex h-24 items-center justify-between">

          {/* Logo */}

          <Link
            href="/"
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

          {/* Navigation */}

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

        </div>
      </Container>
    </header>
  );
}
