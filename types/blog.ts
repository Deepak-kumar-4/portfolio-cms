export type Blog = {
  id: string
  title: string
  content: string
  status: "draft" | "published"
  createdAt: string
}