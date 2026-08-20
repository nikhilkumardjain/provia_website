import Image from "next/image";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}

        <Section className="border-b border-slate-200 bg-slate-50">
          <Container>
            <div className="max-w-4xl py-12">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#C8A04A]">
                ABOUT PROVIA GROUP
              </p>

              <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
                Building Modern Infrastructure
                <br />
                for Future-Ready Learning
              </h1>

              <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
                Government Infrastructure • Educational Technology • Digital
                Learning Solutions
              </p>
            </div>
          </Container>
        </Section>

        {/* Company Overview */}

        <Section className="pt-16">
          <Container>
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <Image
                src="/logos/provia-logo.png"
                alt="Provia Group logo"
                width={500}
                height={500}
                className="h-auto w-full rounded-3xl shadow-xl"
              />

              <div>
                <SectionHeading
                  eyebrow="WHO WE ARE"
                  title="About PROVIA GROUP"
                />

                <p className="mt-8 leading-8 text-slate-600">
                  PROVIA GROUP is a Bengaluru-based company specializing in
                  Government Infrastructure, Educational Technology and
                  Digital Learning Solutions.
                </p>

                <p className="mt-6 leading-8 text-slate-600">
                  Our integrated approach combines infrastructure development,
                  educational technologies, networking, AI-enabled learning
                  environments, installation, training and long-term technical
                  support to deliver modern learning ecosystems for Government
                  institutions and educational organizations.
                </p>

                <div className="mt-10 border-t border-slate-200 pt-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C8A04A]">
                    OUR COMMITMENT
                  </p>

                  <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900">
                    Creating Sustainable Infrastructure &amp; Technology
                    Ecosystems
                  </h2>

                  <p className="mt-5 leading-8 text-slate-600">
                    We work closely with Government departments, educational
                    institutions, and implementation partners to create
                    sustainable infrastructure and technology ecosystems that
                    support long-term academic excellence.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Leadership */}

        <Section className="bg-slate-50">
          <Container>
            <div className="mx-auto max-w-6xl">
              <div className="mb-12 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C8A04A]">
                  OUR LEADERSHIP
                </p>

                <h2 className="mt-4 text-4xl font-bold text-slate-900">
                  Leadership Team
                </h2>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                {/* Vikas Jain */}

                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                  <div className="h-[420px] overflow-hidden bg-slate-100">
                    <Image
                      src="/images/about/vikas-jain.png"
                      alt="Vikas Jain, Director"
                      width={500}
                      height={600}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>

                  <div className="p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C8A04A]">
                      DIRECTOR
                    </p>

                    <h3 className="mt-2 text-3xl font-bold text-slate-900">
                      Vikas Jain
                    </h3>

                    <p className="mt-5 leading-7 text-slate-600">
                      Vikas Jain, Director, is responsible for operation
                      management and workforce coordination, government
                      stakeholder management, and project approvals and
                      compliance. His expertise includes public sector project
                      management, contract administration, and client
                      relations.
                    </p>
                  </div>
                </div>

                {/* Bharat Jain */}

                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                  <div className="h-[420px] overflow-hidden bg-slate-100">
                    <Image
                      src="/images/about/bharat-jain.png"
                      alt="Bharat Jain, Director"
                      width={500}
                      height={600}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>

                  <div className="p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C8A04A]">
                      DIRECTOR
                    </p>

                    <h3 className="mt-2 text-3xl font-bold text-slate-900">
                      Bharat Jain
                    </h3>

                    <p className="mt-5 leading-7 text-slate-600">
                      Bharat Jain, Director, is responsible for strategic
                      planning and business growth, cost and schedule
                      monitoring, and future expansion initiatives. His
                      expertise includes civil construction management,
                      infrastructure execution, and resource optimization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}