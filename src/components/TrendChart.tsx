"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function TrendChart({ data }: { data: any[] }) {
  const chartData = {
    labels: data.map((d) => d._id),
    datasets: [
      {
        label: "Fraud Cases",
        data: data.map((d) => d.count),
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.3,
        pointRadius: 5,
        pointHoverRadius: 8,
        pointBackgroundColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
        padding: 10,
        cornerRadius: 5,
      },
    },
    scales: {
      x: {
        grid: { color: "rgba(255, 255, 255, 0.2)" },
        ticks: { color: "#ffffff" },
      },
      y: {
        grid: { color: "rgba(255, 255, 255, 0.2)" },
        ticks: { color: "#ffffff" },
      },
    },
  };

  return (
    <div className="bg-blue-900 border border-blue-700 p-6 rounded-lg shadow-lg h-80 w-full">
      <h2 className="text-2xl font-semibold text-white mb-3 text-center">30-Day Fraud Trend</h2>
      <div className="h-64">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
}
