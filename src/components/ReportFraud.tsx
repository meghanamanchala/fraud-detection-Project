"use client";

import { useState } from "react";
import axios from "axios";

export default function ReportFraud({ onReport }: { onReport: () => void }) {
  const [type, setType] = useState("app");
  const [name, setName] = useState("");
  const [riskLevel, setRiskLevel] = useState("Low");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await axios.post("/api/fraud/add", { type, name, riskLevel });
      setMessage("Fraud reported successfully!");
      setName("");
      onReport();
    } catch (error) {
      setMessage("Failed to report fraud.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-blue-900 border border-blue-700 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-white mb-3">Report Fraud</h2>
      {message && <p className="text-green-400 mb-2">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          className="w-full p-3 border border-blue-600 rounded-lg bg-blue-800 text-white focus:ring-2 focus:ring-blue-500"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="app">App</option>
          <option value="url">URL</option>
        </select>

        <input
          type="text"
          placeholder="App Name or URL"
          className="w-full p-3 border border-blue-600 rounded-lg bg-blue-800 text-white focus:ring-2 focus:ring-blue-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <select
          className="w-full p-3 border border-blue-600 rounded-lg bg-blue-800 text-white focus:ring-2 focus:ring-blue-500"
          value={riskLevel}
          onChange={(e) => setRiskLevel(e.target.value)}
        >
          <option value="Low">Low Risk</option>
          <option value="Medium">Medium Risk</option>
          <option value="High">High Risk</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg shadow hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Report Fraud"}
        </button>
      </form>
    </div>
  );
}
