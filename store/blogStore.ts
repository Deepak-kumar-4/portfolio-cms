import { create } from "zustand"
import { persist } from "zustand/middleware"

type Blog = {
  id: string
  title: string
  content: string
  status: "draft" | "published"
  createdAt: string
}

type BlogStore = {
  blogs: Blog[]
  addBlog: (blog: Blog) => void
  deleteBlog: (id: string) => void
  updateBlog: (blog: Blog) => void
}

export const useBlogStore = create<BlogStore>()(
  persist(
    (set) => ({
      blogs: [],

      addBlog: (blog) =>
        set((state) => ({
          blogs: [...state.blogs, blog],
        })),

      deleteBlog: (id) =>
        set((state) => ({
          blogs: state.blogs.filter((b) => b.id !== id),
        })),

      updateBlog: (blog) =>
        set((state) => ({
          blogs: state.blogs.map((b) =>
            b.id === blog.id ? blog : b
          ),
        })),
    }),
    {
      name: "blog-storage",
    }
  )
)