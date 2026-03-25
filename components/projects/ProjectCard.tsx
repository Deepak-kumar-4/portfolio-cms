"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function ProjectCard({ project }: any) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="relative group"
    >
      {/* Glow Layer */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-blue-400 opacity-0 group-hover:opacity-20 blur-2xl transition rounded-3xl" />

      {/* Glass Card */}
      <div className="relative bg-white/70 backdrop-blur border border-slate-200 shadow-xl rounded-3xl p-8 flex flex-col h-full transition">

        {/* Title */}
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-6">
          {project.tech.map((t: string) => (
            <span
              key={t}
              className="px-3 py-1 text-sm bg-indigo-50 text-indigo-600 rounded-full font-medium"
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={`/projects/${project.slug}`}
          className="mt-8 inline-flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700 transition"
        >
          View Details
          <span className="ml-2 group-hover:translate-x-1 transition">→</span>
        </Link>

      </div>
    </motion.div>
  )
}