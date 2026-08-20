import { CheckCircle2 } from "lucide-react";

import { features } from "@/data/features";

export default function HeroFeatures() {
  return (
    <div className="mb-10 flex flex-wrap gap-3">
      {features.map((feature) => (
        <div
          key={feature}
          className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm"
        >
          <CheckCircle2
            size={18}
            className="text-amber-600"
          />

          <span className="text-sm font-medium">
            {feature}
          </span>
        </div>
      ))}
    </div>
  );
}