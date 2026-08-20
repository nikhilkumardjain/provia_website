import { CheckCircle2 } from "lucide-react";

interface BenefitCardProps {
  title: string;
  description: string;
}

export default function BenefitCard({
  title,
  description,
}: BenefitCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="mb-6">

        <CheckCircle2
          size={40}
          className="text-[#C8A04A]"
        />

      </div>

      <h3 className="mb-4 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="leading-8 text-slate-600">
        {description}
      </p>

    </div>
  );
}