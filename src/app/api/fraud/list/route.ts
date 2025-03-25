import { connectToDatabase } from "@/lib/db";
import Fraud from "@/lib/models/Fraud";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDatabase();
    const fraudList = await Fraud.find().sort({ reportedAt: -1 });
    return NextResponse.json(fraudList, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch fraud data" }, { status: 500 });
  }
}
