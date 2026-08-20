interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-20 max-w-3xl text-center">

      <div className="mb-6 flex items-center justify-center gap-4">

        <div className="h-px w-14 bg-[#C8A04A]" />

        <span className="text-sm font-bold uppercase tracking-[0.35em] text-[#C8A04A]">
          {eyebrow}
        </span>

        <div className="h-px w-14 bg-[#C8A04A]" />

      </div>

      <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-slate-600">
          {description}
        </p>
      )}

    </div>
  );
}