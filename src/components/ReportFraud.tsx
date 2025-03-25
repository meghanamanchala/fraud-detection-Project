"use client";

import { useState } from "react";
import axios from "axios";

interface ReportFraudProps {
  onReport: () => void;
}

export default function ReportFraud({ onReport }: ReportFraudProps) {
  const [type, setType] = useState<"app" | "url">("app");
  const [name, setName] = useState("");
  const [riskLevel, setRiskLevel] = useState<"Low" | "Medium" | "High">("Low");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; isError: boolean } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      await axios.post("/api/fraud/add", { type, name, riskLevel });
      setMessage({ text: "Fraud reported successfully!", isError: false });
      setName("");
      onReport();
    } catch (error) {
      console.error("Error reporting fraud:", error);
      setMessage({ text: "Failed to report fraud.", isError: true });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-blue-900 border border-blue-700 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-white mb-3">Report Fraud</h2>
      {message && (
        <p className={`mb-2 ${message.isError ? "text-red-400" : "text-green-400"}`}>
          {message.text}
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <label htmlFor="type" className="sr-only">
          Select Fraud Type
        </label>
        <select
          id="type"
          className="w-full p-3 border border-blue-600 rounded-lg bg-blue-800 text-white focus:ring-2 focus:ring-blue-500"
          value={type}
          onChange={(e) => setType(e.target.value as "app" | "url")}
        >
          <option value="app">App</option>
          <option value="url">URL</option>
        </select>

        <label htmlFor="name" className="sr-only">
          App Name or URL
        </label>
        <input
          id="name"
          type="text"
          placeholder="App Name or URL"
          className="w-full p-3 border border-blue-600 rounded-lg bg-blue-800 text-white focus:ring-2 focus:ring-blue-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={loading}
        />

        <label htmlFor="riskLevel" className="sr-only">
          Select Risk Level
        </label>
        <select
          id="riskLevel"
          className="w-full p-3 border border-blue-600 rounded-lg bg-blue-800 text-white focus:ring-2 focus:ring-blue-500"
          value={riskLevel}
          onChange={(e) => setRiskLevel(e.target.value as "Low" | "Medium" | "High")}
        >
          <option value="Low">Low Risk</option>
          <option value="Medium">Medium Risk</option>
          <option value="High">High Risk</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg shadow hover:bg-blue-700 transition disabled:bg-gray-600"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Report Fraud"}
        </button>
      </form>
    </div>
  );
}
