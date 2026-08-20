import Button from "@/components/ui/Button";
import { about } from "@/data/about";

export default function AboutContent() {
  return (
    <div>
      {/* Badge */}
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">
        {about.badge}
      </p>

      {/* Heading */}
      <h2 className="mb-6 text-4xl font-bold leading-tight lg:text-5xl">
        {about.title}
      </h2>

      {/* Description */}
      <p className="mb-8 text-lg leading-8 text-slate-600">
        {about.description}
      </p>

      {/* Button */}
      <Button>
        {about.button}
      </Button>
    </div>
  );
}
