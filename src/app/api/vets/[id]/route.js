import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET(request, { params }) {
  try {
    // In Next.js 15+, params must be awaited
    const { id } = await params;
    const client = await clientPromise;
    const db = client.db("conbun_db");
    
    // Fetch the specific doctor by ID
    const doctor = await db.collection("Vets").findOne({ _id: id });

    if (!doctor) {
      return NextResponse.json(
        { success: false, error: "Vet not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, doctor });
  } catch (error) {
    console.error("API Fetch Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}