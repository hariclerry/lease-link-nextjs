'use server';

import { getSessionUser } from "@/utils/getSessionUser";
import connectDB from "@/config/database";
import { revalidatePath } from "next/cache";
import User from "@/models/User";

async function checkBoomarkStatus(propertyId) {
    await connectDB();

    const sessionUser = await getSessionUser();


    if(!sessionUser || !sessionUser.userId){
        throw new Error('User ID is required')
    }

    const user = await User.findById(sessionUser.userId);

    let isBookmarked = user.bookmarks.includes(propertyId);

   revalidatePath('properties/saved', 'page');

   return {
    isBookmarked
   }

}

export default checkBoomarkStatus;