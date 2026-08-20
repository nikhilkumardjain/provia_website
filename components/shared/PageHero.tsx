import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

interface PageHeroProps {
  badge?: string;
  title: string;
  description: string;
}

export default function PageHero({
  badge,
  title,
  description,
}: PageHeroProps) {
  return (
    <Section className="bg-slate-50 border-b border-slate-200">
      <Container>
        <div className="max-w-3xl">
          {badge && (
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">
              {badge}
            </p>
          )}

          <h1 className="mb-6 text-5xl font-bold">
            {title}
          </h1>

          <p className="text-xl leading-8 text-slate-600">
            {description}
          </p>
        </div>
      </Container>
    </Section>
  );
}