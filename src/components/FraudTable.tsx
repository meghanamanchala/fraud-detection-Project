"use client";

import axios from "axios";
import { useSession } from "next-auth/react";

export default function FraudTable({ data, onUpdate }: { data: any[]; onUpdate: () => void }) {
  const { data: session } = useSession();
  const isAdmin = session?.user?.role === "admin";

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this entry?")) return;
    await axios.delete("/api/fraud/delete", { data: { id } });
    onUpdate();
  };

  const handleBlock = async (id: string) => {
    await axios.post("/api/fraud/block", { id });
    onUpdate();
  };

  const handleInvestigate = async (id: string) => {
    await axios.post("/api/fraud/investigate", { id });
    onUpdate();
  };

  return (
    <div className="bg-blue-900 border border-blue-700 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-white mb-3">Fraudulent Apps & URLs</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-blue-800 text-white">
            <th className="border border-blue-700 p-3">Type</th>
            <th className="border border-blue-700 p-3">Name</th>
            <th className="border border-blue-700 p-3">Risk Level</th>
            {isAdmin && <th className="border border-blue-700 p-3">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id} className="border border-blue-700 text-white hover:bg-blue-800 transition">
              <td className="border border-blue-700 p-3">{item.type}</td>
              <td className="border border-blue-700 p-3">{item.name}</td>
              <td className="border border-blue-700 p-3">{item.riskLevel}</td>
              {isAdmin && (
                <td className="border border-blue-700 p-3 flex gap-2">
                  <button onClick={() => handleBlock(item._id)} className="bg-yellow-500 px-3 py-1 rounded-lg hover:bg-yellow-600 transition">Block</button>
                  <button onClick={() => handleInvestigate(item._id)} className="bg-blue-500 px-3 py-1 rounded-lg hover:bg-blue-600 transition">Investigate</button>
                  <button onClick={() => handleDelete(item._id)} className="bg-red-500 px-3 py-1 rounded-lg hover:bg-red-600 transition">Delete</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
