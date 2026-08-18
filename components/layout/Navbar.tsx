"use client";

import Link from "next/link";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

import { company } from "@/data/company";
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
          ? "border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-lg"
          : "bg-white"
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight"
          >
            {company.name}
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-black"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Button>
            Get Quote
          </Button>
        </div>
      </Container>
    </header>
  );
}