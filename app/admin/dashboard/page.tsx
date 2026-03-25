"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useBlogStore } from "@/store/blogStore"
import DeleteModal from "@/components/admin/DeleteModal"
import StatusBadge from "@/components/admin/StatusBadge"

export default function AdminDashboard() {
  const router = useRouter()
  const blogs = useBlogStore((s) => s.blogs)
  const deleteBlog = useBlogStore((s) => s.deleteBlog)
  const updateBlog = useBlogStore((s) => s.updateBlog)
  const [deleteId, setDeleteId] = useState<string | null>(null)

  useEffect(() => {
    const auth = localStorage.getItem("admin-auth")
    if (!auth) {
      router.push("/admin/login")
    }
  }, [])

  const toggleStatus = (blog: any) => {
    updateBlog({
      ...blog,
      status: blog.status === "draft" ? "published" : "draft",
    })
  }

  const logout = () => {
    localStorage.removeItem("admin-auth")
    router.push("/admin/login")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 p-10">

      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900">
          Blog Dashboard
        </h1>

        <div className="flex gap-4">
          <button
            onClick={() => router.push("/admin/create")}
            className="bg-emerald-500 text-white px-6 py-3 rounded-lg shadow hover:bg-emerald-600 cursor-pointer transition"
          >
            + New Blog
          </button>

          <button
            onClick={logout}
            className="bg-white border px-6 py-3 rounded-lg cursor-pointer transition hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Blog List */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">

      {blogs.length === 0 && (
      <div className="p-20 text-center text-slate-500">
            No blogs created yet
      </div>
      )}

      {blogs.length > 0 && (
      <table className="w-full text-left">
            <thead className="bg-slate-50 border-b">
            <tr>
            <th className="p-5 font-semibold text-slate-700">Title</th>
            <th className="p-5 font-semibold text-slate-700">Status</th>
            <th className="p-5 font-semibold text-slate-700">Date</th>
            <th className="p-5 font-semibold text-slate-700 w-[260px]">
                  Actions
            </th>
            </tr>
            </thead>

            <tbody>
            {blogs.map((b) => (
            <tr
                  key={b.id}
                  className="border-b hover:bg-slate-50 transition"
            >
                  <td className="p-5 font-medium text-slate-800">
                  {b.title}
                  </td>

                  <td className="p-5">
                  <StatusBadge status={b.status} />
                  </td>

                  <td className="p-5 text-slate-500">
                  {new Date(b.createdAt).toLocaleDateString()}
                  </td>

                  <td className="p-5">
                  <div className="flex justify-end gap-3">

                  <button
                        onClick={() =>
                        router.push(`/admin/edit/${b.id}`)
                        }
                        className="px-4 py-2 text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition cursor-pointer"
                  >
                        Edit
                  </button>

                  <button
                        onClick={() => toggleStatus(b)}
                        className="px-4 py-2 text-emerald-600 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition cursor-pointer"
                  >
                        Toggle
                  </button>

                  <button
                        onClick={() => setDeleteId(b.id)}
                        className="px-4 py-2 text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition cursor-pointer"
                  >
                        Delete
                  </button>

                  </div>
                  </td>
            </tr>
            ))}
            </tbody>
      </table>
      )}

      </div>

      <DeleteModal
        open={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={() => {
          if (deleteId) {
            deleteBlog(deleteId)
            setDeleteId(null)
          }
        }}
      />

    </div>  
  )
}