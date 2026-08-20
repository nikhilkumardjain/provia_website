import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

import ExpertiseCard from "./ExpertiseCard";

import { expertise } from "@/data/expertise";

export default function Expertise() {
  return (
    <Section id="services">
      <Container>
        <div className="mb-16 text-center">
          <p className="mb-4 font-semibold uppercase tracking-[0.25em] text-amber-600">
            OUR EXPERTISE
          </p>

          <h2 className="text-5xl font-bold">
            What We Build
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item) => (
            <ExpertiseCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}