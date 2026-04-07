import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("conbun_db");
    
    // Fetch all blogs, newest first
    const blogs = await db.collection("blogs").find({}).sort({ date: -1 }).toArray();

    return NextResponse.json({ success: true, blogs });
  } catch (error) {
    console.error("Blog API Error:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch blogs" }, { status: 500 });
  }
}