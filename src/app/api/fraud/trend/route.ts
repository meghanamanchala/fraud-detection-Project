import { connectToDatabase } from "@/lib/db";
import Fraud from "@/lib/models/Fraud";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDatabase();

    const last30Days = new Date();
    last30Days.setDate(last30Days.getDate() - 30);

    const trendData = await Fraud.aggregate([
      {
        $match: { reportedAt: { $gte: last30Days } },
      },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$reportedAt" } },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    return NextResponse.json(trendData, { status: 200 });
  } catch (error) {
    console.error("Error fetching trend data:", error); // ✅ Logs the error to avoid ESLint error
    return NextResponse.json({ error: "Failed to fetch trend data" }, { status: 500 });
  }
}
