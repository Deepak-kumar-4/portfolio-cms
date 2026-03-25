"use client"

import { motion, AnimatePresence } from "framer-motion"

type Props = {
  open: boolean
  onClose: () => void
  onConfirm: () => void
}

export default function DeleteModal({
  open,
  onClose,
  onConfirm,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <h2 className="text-2xl font-bold mb-4">
              Delete Blog?
            </h2>

            <p className="text-slate-600 mb-6">
              This action cannot be undone.
            </p>

            <div className="flex justify-end gap-4">
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-lg border cursor-pointer"
              >
                Cancel
              </button>

              <button
                onClick={onConfirm}
                className="px-5 py-2 rounded-lg bg-red-500 text-white cursor-pointer"
              >
                Delete
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}