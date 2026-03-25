import { projects } from "@/data/projects"

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return <div className="py-20 text-center text-2xl">Project not found</div>
  }

  return (
    <div className="py-20 max-w-5xl mx-auto px-4">

      {/* HERO */}
      <div className="mb-16">
        <h1 className="text-5xl font-bold mb-4 text-slate-900">
          {project.title}
        </h1>

        <p className="text-lg text-slate-600 mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3">
          {project.tech.map((t) => (
            <span
              key={t}
              className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* PROBLEM */}
      <div className="bg-white shadow-md rounded-2xl p-8 mb-10 hover:shadow-lg transition">
        <h2 className="text-2xl font-bold mb-3">Problem</h2>
        <p className="text-slate-600 leading-relaxed">
          {project.problem}
        </p>
      </div>

      {/* SOLUTION */}
      <div className="bg-white shadow-md rounded-2xl p-8 mb-10 hover:shadow-lg transition">
        <h2 className="text-2xl font-bold mb-3">Solution</h2>
        <p className="text-slate-600 leading-relaxed">
          {project.solution}
        </p>
      </div>

      {/* FEATURES */}
      <div className="bg-white shadow-md rounded-2xl p-8 mb-10 hover:shadow-lg transition">
        <h2 className="text-2xl font-bold mb-5">Key Features</h2>

        <div className="grid md:grid-cols-2 gap-5">
          {project.features.map((f) => (
            <div
              key={f}
              className="bg-indigo-50 p-5 rounded-xl text-slate-700"
            >
              {f}
            </div>
          ))}
        </div>
      </div>

      {/* GITHUB CTA */}
      <div className="text-center mt-16">
        <a
          href={project.github}
          target="_blank"
          className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-xl shadow hover:scale-105 transition"
        >
          View Source Code
        </a>
      </div>

    </div>
  )
}