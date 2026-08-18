import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { hero } from "@/data/hero";

export default function Hero() {
  return (
    <Section className="py-32">
      <Container>
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">
            {hero.badge}
          </p>

          <h1 className="mb-8 text-5xl font-bold leading-tight md:text-7xl">
            {hero.title}
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-8 text-slate-600">
            {hero.description}
          </p>

          <div className="flex gap-4">
           <Button variant="secondary">
            {hero.primaryButton.text}
           </Button>

          <Button variant="secondary">
          {hero.secondaryButton.text}
         </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}