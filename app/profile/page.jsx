import ProfileProperties from "@/components/ProfileProperties";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { convertToSerializableObject } from "@/utils/converToObject";
import { getSessionUser } from "@/utils/getSessionUser";
import Image from "next/image";

const ProfilePage = async () => {
    await connectDB();

    const sessionUser = await getSessionUser();

    const {userId} =sessionUser;

    if(!userId) {
        throw new Error('User Id not found');
    }

    const propertiesDocs = await Property.find({owner: userId}).lean();

    const properties = propertiesDocs.map(convertToSerializableObject);
    return ( 
        <section className="bg-background-blue">
        <div className="container m-auto py-24">
          <div
            className="bg-background-primary px-6 py-8 mb-4 shadow-md rounded-md border-border m-4 md:m-0"
          >
            <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
            <div className="flex flex-col md:flex-row">
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mx-auto mt-10 rounded-xl shadow-2xl bg-background-blue p-5 mb-6">
                <div className="mb-4">
                  <Image
                    className="h-32 w-32 md:h-48 md:w-48 rounded-full mx-auto md:mx-0"
                    src={sessionUser.user.image || "/images/profile.png"}
                    width={200}
                    height={200}
                    alt="User"
                  />
                </div>
  
                <h2 className="text-2xl mb-4">
                  <span className="font-bold block">Name: </span> {sessionUser.user.name}
                </h2>
                <h2 className="text-2xl">
                  <span className="font-bold block">Email: </span>  {sessionUser.user.email}
                </h2>
              </div>
  
              <div className="md:w-3/4 md:pl-4">
                <h2 className="text-xl font-semibold mb-4">Your Listings</h2>
               
                { properties && properties.length === 0 ? (
                <p>You have no property listings</p>
              ) : (
                <div className="flex flex-wrap gap-4 sm:flex-col md:flex-row lg:flex-wrap">
                <ProfileProperties properties={properties} />
                </div>
              )}
              </div>
            </div>
          </div>
        </div>
      </section>
     );
}
 
export default ProfilePage;