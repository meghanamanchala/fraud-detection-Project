"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import FraudTable from "@/components/FraudTable";
import TrendChart from "@/components/TrendChart";
import ReportFraud from "@/components/ReportFraud";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [fraudData, setFraudData] = useState([]);
  const [trendData, setTrendData] = useState([]);

  const fetchData = async () => {
    try {
      const fraudRes = await axios.get("/api/fraud/list");
      const trendRes = await axios.get("/api/fraud/trend");
      setFraudData(fraudRes.data);
      setTrendData(trendRes.data);
    } catch (error) {
      console.error("Error fetching fraud data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-blue-800 flex flex-col items-center py-12 px-4">
      <motion.div 
        className="p-6 rounded-lg shadow-lg text-center w-full max-w-4xl bg-blue-900 border border-blue-700"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <h1 className="text-4xl font-bold text-white">Fraud Detection Dashboard</h1>
        <p className="text-gray-300 mt-2">Monitor and manage fraud cases in real time.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 w-full max-w-6xl">
        <motion.div className="p-6 rounded-lg shadow-lg bg-blue-900 border border-blue-700" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <TrendChart data={trendData} />
        </motion.div>
        <motion.div className="p-6 rounded-lg shadow-lg bg-blue-900 border border-blue-700" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <ReportFraud onReport={fetchData} />
        </motion.div>
      </div>

      <motion.div className="p-6 rounded-lg shadow-lg mt-8 w-full max-w-6xl bg-blue-900 border border-blue-700" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <FraudTable data={fraudData} onDelete={fetchData} />
      </motion.div>
    </div>
  );
}
