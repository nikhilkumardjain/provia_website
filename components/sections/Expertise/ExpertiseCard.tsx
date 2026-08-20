import { LucideIcon } from "lucide-react";

interface ExpertiseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ExpertiseCard({
  icon: Icon,
  title,
  description,
}: ExpertiseCardProps) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C8A04A]/10 transition group-hover:bg-[#C8A04A]">

        <Icon
          size={30}
          className="text-[#C8A04A] transition group-hover:text-white"
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