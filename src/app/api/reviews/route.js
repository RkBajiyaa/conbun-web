import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    // Get 'limit' and 'skip' from the URL, or use defaults
    const limit = parseInt(searchParams.get("limit")) || 12; 
    const skip = parseInt(searchParams.get("skip")) || 0;

    const client = await clientPromise;
    const db = client.db("conbun_db");
    
    // 1. Fetch ALL Case Studies (usually a small fixed number)
    const cases = await db.collection("case_studies").find({}).toArray();

    // 2. Fetch Testimonials with Pagination
    const feedbacks = await db.collection("testimonials")
      .find({})
      .sort({ date: -1 }) // Newest first
      .skip(skip)
      .limit(limit)
      .toArray();

    // 3. Count total to tell the "Load More" button when to hide
    const totalFeedbacks = await db.collection("testimonials").countDocuments();

    return NextResponse.json({ 
      success: true, 
      cases, 
      feedbacks,
      hasMore: skip + limit < totalFeedbacks 
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}