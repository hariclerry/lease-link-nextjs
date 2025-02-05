'use server'
import cloudinary from "@/config/cloudinary";
import { revalidatePath } from "next/cache";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import connectDB from "@/config/database";

const deleteProperty = async (propertyId) => {

    const sessionUser = await getSessionUser();

    if(!sessionUser || !sessionUser.userId){
        throw new Error('User ID is required')
    }

    const {userId} = sessionUser;

    await connectDB();

    const property = await Property.findById(propertyId);

    if(!property) throw new Error('Property Not Found');

    if(property.owner.toString() !== userId){
        throw new Error('Unauthorized');
    }

    const publicIds = property.images.map(imageUrl => {
        const parts = imageUrl.split('/');

        return parts.at(-1).split('.').at(0);
    });

    if(publicIds.length > 0) {
        for(let publicId of publicIds) {
            await cloudinary.uploader.destroy('leaseLink/' + publicId);
        }
    }

    await property.deleteOne();


    revalidatePath('/', 'layout');


}

export default deleteProperty;