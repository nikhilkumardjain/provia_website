import { statistics } from "@/data/statistics";

export default function HeroStats() {
  return (
    <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
      {statistics.map((item) => (
        <div key={item.label}>
          <h3 className="text-4xl font-bold text-amber-600">
            {item.value}
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}