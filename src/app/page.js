"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-blue-600 to-purple-700 text-white px-4">
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold mb-6 text-center"
      >
        Welcome to Flowchart Maker
      </motion.h1>

      {/* Animated Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 0.8, duration: 1.2 }}
        className="text-lg max-w-xl text-center mb-12"
      >
        Create, connect, and customize your flowcharts with ease. Click below to
        start building interactive diagrams.
      </motion.p>

      {/* Animated Flowchart Icon (simple squares and lines) */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 100, damping: 10 }}
        className="mb-12 flex space-x-6"
      >
        {/* Square nodes */}
        <div className="w-20 h-20 bg-white rounded shadow-lg flex items-center justify-center text-black font-bold">
          A
        </div>
        <div className="w-20 h-20 bg-white rounded shadow-lg flex items-center justify-center text-black font-bold relative">
          B{/* Connecting line */}
          <div className="absolute top-1/2 right-full w-12 h-1 bg-white -translate-y-1/2"></div>
        </div>
        <div className="w-20 h-20 bg-white rounded shadow-lg flex items-center justify-center text-black font-bold relative">
          C{/* Connecting line */}
          <div className="absolute top-1/2 right-full w-12 h-1 bg-white -translate-y-1/2"></div>
        </div>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
        className="flex space-x-6"
      >
        <button
          onClick={() => router.push("/flow")}
          className="bg-white text-blue-700 font-semibold px-6 py-3 rounded shadow-lg hover:bg-blue-100 transition"
        >
          Open Flow Editor
        </button>
      </motion.div>
    </div>
  );
}
