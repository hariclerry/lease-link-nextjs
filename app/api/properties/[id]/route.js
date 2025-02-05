import connectDB from "@/config/database";
import Property from "@/models/Property";
import { NextResponse } from "next/server";

// Next js 15 with async route
export async function GET(request, {params}) {
    try {
        await connectDB();
        const property = await Property.findById(params.id);
        if(!property) return new NextResponse.json('Property not found', {status: 404});

        return NextResponse.json(property, { status: 200 });
        
    } catch (error) {
        return Response('Something went wrong', {status: 500})
    }
  }