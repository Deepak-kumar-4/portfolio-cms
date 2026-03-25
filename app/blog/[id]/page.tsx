"use client"

import { use } from "react"
import { useBlogStore } from "@/store/blogStore"

export default function BlogDetail({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)

  const blogs = useBlogStore((s) => s.blogs)
  const blog = blogs.find((b) => b.id === id)

  if (!blog) {
    return (
      <div className="py-40 text-center text-slate-500">
        Blog not found
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white">

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <p className="text-blue-600 font-medium mb-4">
          Blog Post
        </p>

        <h1 className="text-5xl font-bold leading-tight text-slate-900 mb-6">
          {blog.title}
        </h1>

        <p className="text-slate-500 text-lg">
          {new Date(blog.createdAt).toDateString()}
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-3xl mx-auto px-6 pb-32">
        <div className="bg-white shadow-lg rounded-2xl p-10 text-slate-700 leading-relaxed text-[18px] whitespace-pre-wrap">
          {blog.content}
        </div>
      </div>

    </div>
  )
}