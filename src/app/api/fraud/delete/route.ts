import { connectToDatabase } from "@/lib/db";
import Fraud from "@/lib/models/Fraud";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  try {
    await connectToDatabase();
    const { id } = await req.json();

    if (!id) return NextResponse.json({ error: "ID is required" }, { status: 400 });

    await Fraud.findByIdAndDelete(id);
    return NextResponse.json({ message: "Fraud entry deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete fraud data" }, { status: 500 });
  }
}
