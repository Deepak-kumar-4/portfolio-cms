"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useBlogStore } from "@/store/blogStore"

export default function CreateBlog() {
  const router = useRouter()
  const addBlog = useBlogStore((s) => s.addBlog)

  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [status, setStatus] = useState<"draft" | "published">("draft")

  const handleSubmit = () => {
    if (!title || !content) return

    addBlog({
      id: Date.now().toString(),
      title,
      content,
      status,
      createdAt: new Date().toISOString(),
    })

    router.push("/admin/dashboard")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 p-10">

      <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-lg">

        <h1 className="text-3xl font-bold mb-8">Create Blog</h1>

        <input
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-4 rounded-lg mb-6"
        />

        <textarea
          placeholder="Blog Content"
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
            className="bg-emerald-500 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-emerald-600 transition"
          >
            Save
          </button>

          <button
            onClick={() => router.push("/admin/dashboard")}
            className="border px-6 py-3 rounded-lg cursor-pointer hover:bg-gray-100 transition"
          >
            Cancel
          </button>
        </div>

      </div>

    </div>
  )
}