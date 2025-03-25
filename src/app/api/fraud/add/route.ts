import { connectToDatabase } from "@/lib/db";
import Fraud from "@/lib/models/Fraud";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const { type, name, riskLevel } = await req.json();

    if (!type || !name || !riskLevel) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const newFraud = new Fraud({ type, name, riskLevel });
    await newFraud.save();

    return NextResponse.json({ message: "Fraudulent entry added" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to add fraud data" }, { status: 500 });
  }
}
