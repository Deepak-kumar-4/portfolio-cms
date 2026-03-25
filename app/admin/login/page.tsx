"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function AdminLogin() {
  const router = useRouter()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("admin-auth", "true")
      router.push("/admin/dashboard")
    } else {
      setError("Invalid credentials")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">

      {/* soft glow blobs */}
      <div className="absolute w-[500px] h-[500px] bg-green-200 opacity-30 blur-3xl top-[-200px] left-[-200px]" />
      <div className="absolute w-[500px] h-[500px] bg-emerald-200 opacity-30 blur-3xl bottom-[-200px] right-[-200px]" />

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 bg-white/70 backdrop-blur-xl border border-white shadow-2xl rounded-3xl p-12 w-full max-w-md"
      >
        <h1 className="text-4xl font-bold text-slate-900 mb-10 text-center">
          Admin Portal
        </h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-5 p-4 rounded-xl border border-gray-200 focus:border-emerald-500 outline-none transition bg-white"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-5 p-4 rounded-xl border border-gray-200 focus:border-emerald-500 outline-none transition bg-white"
        />

        {error && (
          <p className="text-red-500 mb-4">{error}</p>
        )}

        <button
          onClick={handleLogin}
          className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold shadow-lg hover:scale-[1.02] transition"
        >
          Login
        </button>
      </motion.div>
    </div>
  )
}