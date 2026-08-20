import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHero
          badge="CONTACT"
          title="Let's Build Together"
          description="Have a project in mind? We'd love to hear from you."
        />

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">
                Contact Information
              </h2>

              <div className="space-y-4 text-slate-600">
                <p>📍 Bangalore, Karnataka</p>
                <p>📞 +91 XXXXX XXXXX</p>
                <p>✉️ info@proviagroupindia.com</p>
              </div>
            </div>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border p-4"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border p-4"
              />

              <textarea
                rows={6}
                placeholder="Message"
                className="w-full rounded-xl border p-4"
              />

              <button className="rounded-xl bg-amber-600 px-8 py-4 font-semibold text-white hover:bg-amber-700">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}