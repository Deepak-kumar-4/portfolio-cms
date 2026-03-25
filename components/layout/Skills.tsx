"use client"

import { motion } from "framer-motion"

export default function Skills() {
  const skills = [
    "Python","FastAPIs","Next.js","React.js","AWS Cloud","LLMs", "Java", "JavaScript", "C++", "C", "HTML5", "CSS3", "BootStrap","MongoDB",
    "MySQL","Git","Agile", "Debugging", "Technical Documentation", "Problem Solving"
  ]


  return (
    <section 
    className="relative pb-32">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-slate-800">
          Tech Stack
        </h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.05 } },
          }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.08, y: -6 }}
              className="bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl rounded-2xl py-5 font-medium text-slate-700"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}