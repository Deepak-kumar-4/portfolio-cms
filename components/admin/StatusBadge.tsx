type Props = {
  status: "draft" | "published"
}

export default function StatusBadge({ status }: Props) {
  if (status === "published") {
    return (
      <span className="px-3 py-1 text-sm rounded-full bg-emerald-100 text-emerald-700 font-medium">
        Published
      </span>
    )
  }

  return (
    <span className="px-3 py-1 text-sm rounded-full bg-yellow-100 text-yellow-700 font-medium">
      Draft
    </span>
  )
}