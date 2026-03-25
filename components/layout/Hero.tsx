"use client"

import { motion } from "framer-motion"


export default function Hero() {

  return (
    <section className="relative flex flex-col items-center justify-center text-center pt-36 pb-28">

      {/* Glow blobs */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-32 left-10 w-80 h-80 bg-indigo-200 rounded-full blur-3xl opacity-30 -z-10"
      />

      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-30 -z-10"
      />

      <motion.img
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: [0, -8, 0] }}
        transition={{
          opacity: { duration: 0.8 },
          y: { duration: 4, repeat: Infinity },
        }}
        src="/profile.jpg"
        alt="Deepak"
        className="w-40 h-40 rounded-full mb-10 object-cover border-4 border-white shadow-xl"
      />

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 tracking-tight text-slate-800 max-w-4xl mx-auto leading-tight"
      >
        Building{" "}
        <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
          Scalable Digital Experiences
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-slate-600 max-w-2xl text-xl mb-12 leading-relaxed"
      >
        A Full Stack Developer focused on building robust, scalable and end-to-end digital products, with expertise in modern web technologies, efficient backend architecture and intuitive user experiences. Continuously exploring AI-driven innovation to enhance real-world applications.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex gap-6"
      >
        <a
          href="/projects"
          className="px-10 py-4 rounded-xl text-white font-semibold bg-indigo-600 shadow-lg hover:shadow-indigo-300 transition duration-300 hover:-translate-y-1"
        >
          View Projects
        </a>

        <a
          href="/blog"
          className="px-10 py-4 rounded-xl font-semibold border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-50 transition duration-300 hover:-translate-y-1"
        >
          Read Blog
        </a>
      </motion.div>

    </section>
  )
}
