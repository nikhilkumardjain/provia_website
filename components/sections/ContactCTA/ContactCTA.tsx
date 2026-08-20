import Link from "next/link";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function ContactCTA() {
  return (
    <Section className="bg-slate-900 text-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C8A04A]">
            OUR COMMITMENT
          </p>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Transforming Infrastructure.
            <br />
            Empowering Learning.
            <br />
            Enabling the Future.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-300">
            We continue to work closely with Government departments,
            educational institutions and implementation partners to create
            sustainable infrastructure and technology ecosystems that support
            long-term academic excellence.
          </p>

          <div className="mt-12">

            <Link
              href="/contact"
              className="inline-flex rounded-xl bg-[#C8A04A] px-8 py-4 font-semibold text-white transition hover:bg-[#B58D35]"
            >
              Contact Us
            </Link>

          </div>

        </div>
      </Container>
    </Section>
  );
}