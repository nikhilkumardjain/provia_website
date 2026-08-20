import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHero
          badge="SERVICES"
          title="Our Services"
          description="End-to-end government infrastructure, educational technology, digital infrastructure, and turnkey project implementation services."
        />

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold">
                Government Infrastructure
              </h3>
              <p className="text-slate-600">
                Planning and execution of government infrastructure projects
                with quality, compliance, and timely delivery.
              </p>
            </div>

            <div className="rounded-2xl border p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold">
                Educational Infrastructure
              </h3>
              <p className="text-slate-600">
                Smart classrooms, computer labs, networking, and digital
                learning solutions.
              </p>
            </div>

            <div className="rounded-2xl border p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold">
                Digital Infrastructure
              </h3>
              <p className="text-slate-600">
                Network infrastructure, surveillance systems, connectivity,
                and IT modernization.
              </p>
            </div>

            <div className="rounded-2xl border p-8 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold">
                Turnkey Execution
              </h3>
              <p className="text-slate-600">
                Complete project execution from planning and procurement to
                implementation and support.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}