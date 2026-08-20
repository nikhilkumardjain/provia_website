import Image from "next/image";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import { heroData } from "@/data/hero";

export default function Hero() {
  return (
    <Section className="overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <span className="inline-flex rounded-full bg-[#C8A04A]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#C8A04A]">
              {heroData.badge}
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
              {heroData.title}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-600">
              {heroData.subtitle}
            </p>

            {/* Primary CTA */}

            <div className="mt-10">

              <Link
                href={heroData.primaryButton.link}
                className="inline-flex rounded-xl bg-[#C8A04A] px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#B58D35]"
              >
                {heroData.primaryButton.text}
              </Link>

            </div>

          </div>

          {/* Brand mark */}

          <div className="flex justify-center lg:justify-end">

            <div className="relative w-full max-w-md">

              <div className="absolute inset-12 rounded-full bg-[#C8A04A]/10 blur-3xl" />

              <Image
                src="/logos/provia-logo.png"
                alt="Provia Group logo"
                width={500}
                height={500}
                priority
                className="relative h-auto w-full object-contain"
              />

            </div>

          </div>

        </div>
      </Container>
    </Section>
  );
}
