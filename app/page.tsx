import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-[200vh] bg-slate-50">
        <div className="flex h-screen items-center justify-center">
          <h1 className="text-6xl font-bold">
            Home Page
          </h1>
        </div>
      </main>
    </>
  );
}