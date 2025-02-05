'use server';

import { getSessionUser } from "@/utils/getSessionUser";
import connectDB from "@/config/database";
import { revalidatePath } from "next/cache";
import User from "@/models/User";

async function bookmarkProperty(propertyId) {
    await connectDB();

    const sessionUser = await getSessionUser();


    if(!sessionUser || !sessionUser.userId){
        throw new Error('User ID is required')
    }

    const user = await User.findById(sessionUser.userId);

    let isBookmarked = user.bookmarks.includes(propertyId);

    let message;

    if(isBookmarked) {
        user.bookmarks.pull(propertyId);
        message = 'Bookmark Removed';
        isBookmarked = false;
    }else {
        user.bookmarks.push(propertyId);
        message = 'Bookmark Added';
        isBookmarked = true;
    }

   await user.save();

   revalidatePath('properties/saved', 'page');

   return {
    message,
    isBookmarked
   }

}

export default bookmarkProperty;