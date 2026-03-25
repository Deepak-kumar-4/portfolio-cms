"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  const links = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Admin", href: "/admin/login" },
  ]

  return (
    <nav className="w-full border-b border-slate-200 bg-white/70 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
          Deepak Kumar B
        </h1>

        {/* Links */}
        <div className="flex items-center gap-10 text-[16px] font-medium">
          {links.map((link) => {
            const active = pathname === link.href

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative transition ${
                  active
                    ? "text-blue-600"
                    : "text-slate-600 hover:text-blue-900"
                }`}
              >
                {link.name}

                {/* active underline */}
                {active && (
                  <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-blue-500 rounded-full" />
                )}
              </Link>
            )
          })}
        </div>

      </div>
    </nav>
  )
}