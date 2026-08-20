import Image from "next/image";

interface Props {
  title: string;
  location: string;
  category: string;
  image: string;
  description: string;
}

export default function ProjectCard({
  title,
  location,
  category,
  image,
  description,
}: Props) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="relative aspect-[16/10] overflow-hidden">        

        <Image
          src={image}
          alt={title}
          fill
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute left-5 top-5 rounded-full bg-[#C8A04A] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
          {category}
        </div>

      </div>

      <div className="p-8">

        <h3 className="text-2xl font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          {description}
        </p>

        <div className="mt-8 flex items-center justify-between">

          <span className="font-medium text-slate-500">
            📍 {location}
          </span>

          <span className="font-semibold text-[#C8A04A]">
            Learn More →
          </span>

        </div>

      </div>

    </div>
  );
}