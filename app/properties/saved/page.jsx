import PropertyCard from "@/components/PropertyCard";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";

const SavedProperties = async() => {
    const {userId} = await getSessionUser();

    const {bookmarks} = await User.findById(userId).populate('bookmarks');

    return ( 
        <section>
           <div className="container lg:container m-auto px-4 py-6 mt-10">
            <h1 className="text-2xl mb-4">Saved Properties</h1>
            {bookmarks.length === 0 ? (
                <p className="text-4xl">No saved properties</p>
            ): (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {
                        bookmarks.map(property => (
                            <PropertyCard key={property._id} property={property}/>
                        ))
                    }
                </div>
            )}
            </div> 
        
        </section>
       
     );
}
 
export default SavedProperties;