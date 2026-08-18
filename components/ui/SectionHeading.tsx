interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-16 text-center">
      {subtitle && (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
          {subtitle}
        </p>
      )}

      <h2 className="font-heading text-4xl font-bold lg:text-5xl">
        {title}
      </h2>
    </div>
  );
}