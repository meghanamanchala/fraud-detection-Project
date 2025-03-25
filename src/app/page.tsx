"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaShieldAlt, FaChartLine, FaUserShield, FaExclamationTriangle, FaTools } from "react-icons/fa";

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-950 to-blue-800 text-white px-6 pt-24">
      <motion.div
        className="bg-blue-900 border border-blue-700 p-10 md:p-16 rounded-lg shadow-lg text-center max-w-4xl w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Secure & Monitor Fraud Activities
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-8">
          A powerful tool to detect and manage fraudulent activities in real-time.
        </p>

        {session ? (
          <Link href="/dashboard">
            <motion.button
              className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg shadow-lg hover:bg-green-700 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Go to Dashboard
            </motion.button>
          </Link>
        ) : (
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/login">
              <motion.button
                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg shadow-lg hover:bg-blue-700 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Login
              </motion.button>
            </Link>
            <Link href="/signup">
              <motion.button
                className="bg-gray-500 text-white px-8 py-3 rounded-lg text-lg shadow-lg hover:bg-gray-600 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign Up
              </motion.button>
            </Link>
          </div>
        )}
      </motion.div>

      <motion.div
        className="mt-16 max-w-5xl bg-blue-900 border border-blue-700 p-10 rounded-lg shadow-lg w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureList.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-blue-800 border border-blue-700 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
            >
              <feature.icon className="text-5xl text-blue-300 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-300 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

const featureList = [
  {
    title: "Real-time Fraud Monitoring",
    description: "Detect and track fraudulent activities instantly.",
    icon: FaShieldAlt,
  },
  {
    title: "Fraud Trend Analysis",
    description: "Visualize fraud trends over the last 30 days with interactive charts.",
    icon: FaChartLine,
  },
  {
    title: "User Authentication",
    description: "Secure login and signup with role-based access control.",
    icon: FaUserShield,
  },
  {
    title: "Actionable Insights",
    description: "Report, investigate, and block fraudulent activities.",
    icon: FaExclamationTriangle,
  },
  {
    title: "Admin Controls",
    description: "Manage fraud reports and user access with admin privileges.",
    icon: FaTools,
  },
];
