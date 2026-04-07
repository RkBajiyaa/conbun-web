import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb"; // This is the connection file we made earlier!

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("conbun_db");

    // Fetch all the doctors from your 'vets' collection
    const vets = await db.collection("Vets").find({}).toArray();

    // Send them to the frontend
    return NextResponse.json({ success: true, vets });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch doctors" }, { status: 500 });
  }
}