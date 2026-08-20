import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHero
          badge="GALLERY"
          title="Project Gallery"
          description="A visual showcase of our completed infrastructure and technology projects."
        />

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="flex h-72 items-center justify-center rounded-2xl bg-slate-200"
              >
                Image {index + 1}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}