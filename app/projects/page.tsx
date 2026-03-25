import { projects } from "@/data/projects"
import ProjectCard from "@/components/projects/ProjectCard"
import PageWrapper from "@/components/layout/PageWrapper"

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <section className="relative py-28 overflow-hidden">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-blue-50/60 to-white -z-20" />

        <div className="max-w-7xl mx-auto px-6">

          {/* Title */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900">
              Featured{" "}
              <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
              A selection of academic and real-world projects showcasing my experience in full-stack development, AI integration, and practical software solutions.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>

        </div>
      </section>
    </PageWrapper>
  )
}