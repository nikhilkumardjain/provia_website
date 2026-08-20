import Container from "@/components/ui/Container";

const items = [
  {
    id: "projects",
    title: "300+",
    subtitle: "Projects Delivered",
  },
  {
    id: "government",
    title: "Government",
    subtitle: "Infrastructure",
  },
  {
    id: "digital",
    title: "Digital",
    subtitle: "Infrastructure",
  },
  {
    id: "turnkey",
    title: "Turnkey",
    subtitle: "Execution",
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-slate-200 bg-white py-10">
      <Container>
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {items.map((item) => (
            <div key={item.id}>
              <h3 className="text-3xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}