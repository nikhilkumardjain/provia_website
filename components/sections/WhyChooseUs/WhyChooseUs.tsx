import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import BenefitCard from "./BenefitCard";

import { benefits } from "@/data/benefits";

export default function WhyChooseUs() {
  return (
    <Section className="bg-slate-50">
      <Container>

        <SectionHeading
          eyebrow="WHY PROVIA"
          title="Why Choose Provia"
          description="We combine engineering excellence, educational technology expertise and turnkey execution to deliver reliable infrastructure solutions."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {benefits.map((benefit) => (
            <BenefitCard
              key={benefit.id}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>

      </Container>
    </Section>
  );
}