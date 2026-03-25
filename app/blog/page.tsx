"use client"

import { useBlogStore } from "@/store/blogStore"
import Link from "next/link"
import { motion } from "framer-motion"

export default function BlogPage() {
  const blogs = useBlogStore((s) => s.blogs)
  const publishedBlogs = blogs.filter((b) => b.status === "published")

  if (publishedBlogs.length === 0) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-50 via-white to-white">
        <h1 className="text-5xl font-bold mb-4 text-slate-900">
          Blog
        </h1>
        <p className="text-slate-500">
          No blog posts published yet.
        </p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white py-24">

      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-6xl font-bold mb-20 text-slate-900">
          Blog
        </h1>

        <div className="space-y-10">

          {publishedBlogs.map((b, i) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link href={`/blog/${b.id}`}>
                <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer border border-transparent hover:border-blue-200">

                  <h2 className="text-3xl font-bold text-slate-900 group-hover:text-blue-600 transition">
                    {b.title}
                  </h2>

                  <p className="text-slate-500 mt-3">
                    {new Date(b.createdAt).toDateString()}
                  </p>

                  <div className="mt-6 text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition">
                    Read Article →
                  </div>

                </div>
              </Link>
            </motion.div>
          ))}

        </div>

      </div>
    </div>
  )
}