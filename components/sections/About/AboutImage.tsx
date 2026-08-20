import Image from "next/image";

export default function AboutImage() {
  return (
    <div className="flex justify-center">
      <div className="overflow-hidden rounded-3xl shadow-xl">
        <Image
          src="/logos/provia-logo.png"
          alt="Provia"
          width={500}
          height={500}
          className="object-cover"
        />
      </div>
    </div>
  );
}