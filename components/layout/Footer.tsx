import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-slate-900 text-white">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2">
          {/* Company */}

          <div>
            <h2 className="mb-4 text-2xl font-bold">
              PROVIA GROUP
            </h2>

            <p className="max-w-md leading-7 text-slate-400">
              Building Tomorrow&apos;s Infrastructure through
              Government, Educational and Digital Solutions.
            </p>
          </div>

          {/* Contact */}

          <div className="md:text-right">
            <h3 className="mb-4 font-semibold">
              Contact
            </h3>

            <div className="space-y-2">
              <p className="text-slate-400">
                Bangalore, Karnataka
              </p>

              <a
                href="mailto:info@proviagroupindia.com"
                className="text-slate-400 transition-colors hover:text-white"
              >
                info@proviagroupindia.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 py-6 text-center text-sm text-slate-500">
          © 2026 Provia Group. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}