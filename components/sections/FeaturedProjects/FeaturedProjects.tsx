import Link from "next/link";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

import { featuredProjects } from "@/data/projects";

import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  return (
    <Section className="bg-white">
      <Container>

        <SectionHeading
          eyebrow="OUR PROJECTS"
          title="Featured Projects"
          description="A selection of recent work across infrastructure, educational technology, and public-sector partnerships."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {featuredProjects.map((project) => (

            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              description={project.description}
              image={project.image}
              location={project.location}
            />

          ))}

        </div>

        <div className="mt-16 text-center">

          <Link
            href="/projects"
            className="inline-flex items-center rounded-xl bg-[#C8A04A] px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#B58D35]"
          >
            View All Projects
          </Link>

        </div>

      </Container>
    </Section>
  );
}
