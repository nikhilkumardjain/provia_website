import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/shared/PageHero";
import ProjectCard from "@/components/sections/FeaturedProjects/ProjectCard";
import { featuredProjects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main>
        <PageHero
          badge="PROJECTS"
          title="Our Projects"
          description="Explore a selection of infrastructure, technology, and public-sector partnership work delivered by Provia Group."
        />

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
