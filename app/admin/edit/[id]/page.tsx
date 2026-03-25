"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"
import { useBlogStore } from "@/store/blogStore"

export default function EditBlog() {
  const router = useRouter()
  const params = useParams()

  const id = params.id as string

  const blogs = useBlogStore((s) => s.blogs)
  const updateBlog = useBlogStore((s) => s.updateBlog)

  const blog = blogs.find((b) => b.id === id)

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [status, setStatus] = useState<"draft" | "published">("draft")

  useEffect(() => {
    if (blog) {
      setTitle(blog.title)
      setContent(blog.content)
      setStatus(blog.status)
    }
  }, [blog])

  const handleSubmit = () => {
    if (!blog) return

    updateBlog({
      ...blog,
      title,
      content,
      status,
    })

    router.push("/admin/dashboard")
  }

  if (!blog) return <div>Blog not found</div>

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 p-10">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold mb-8">Edit Blog</h1>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-4 rounded-lg mb-6"
        />

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border p-4 rounded-lg mb-6 h-60"
        />

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value as "draft" | "published")
          }
          className="border p-3 rounded-lg mb-6"
        >
          <option value="draft">Draft</option>
          <option value="published">Publish</option>
        </select>

        <div className="flex gap-4">
          <button
            onClick={handleSubmit}
            className="bg-emerald-500 text-white px-6 py-3 rounded-lg cursor-pointer"
          >
            Update
          </button>

          <button
            onClick={() => router.push("/admin/dashboard")}
            className="border px-6 py-3 rounded-lg cursor-pointer"
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  )
}