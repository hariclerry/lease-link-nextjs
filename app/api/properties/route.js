import connectDB from "@/config/database";
import Property from "@/models/Property";
import { NextResponse } from "next/server";

// Nextjs 13
// export const Get = () => {
//     try {
//         // await connectDB();
//         // const properties = await Property.find({});

//         return new Response(JSON.stringify({message: 'Hello World'}), {
//             status: 200,
//         });
        
//     } catch (error) {
//         return Response('Something went wrong', {status: 500})
//     }
   
// }

// Next js 15 with async route
export async function GET(request) {
    try {
        await connectDB();
        const properties = await Property.find({});

        return NextResponse.json(properties, { status: 200 });
        
    } catch (error) {
        return Response('Something went wrong', {status: 500})
    }
  }