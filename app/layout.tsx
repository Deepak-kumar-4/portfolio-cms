import "./globals.css"
import Layout from "@/components/layout/Layout"

export const metadata = {
  title: "Deepak Portfolio",
  description: "Full Stack Developer Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning  className="bg-gradient-to-b from-slate-50 via-blue-50 to-blue-100 min-h-screen">
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}