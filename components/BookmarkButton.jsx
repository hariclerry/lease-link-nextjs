'use client';
import bookmarkProperty from "@/app/actions/bookmarkProperty";
import checkBoomarkStatus from "@/app/actions/checkBookmarkStatus";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { toast } from "react-toastify";

const BookmarkButton = ({property}) => {
    const {data:session} = useSession();
    const userId = session?.user.id;

    const [isBookmarked, setIsBookmarked] = useState(false);
    const [loading, setLoading] = useState(true);
   
    useEffect(() => {
        if(!userId) {
            setLoading(false);
            return;
        }

        checkBoomarkStatus(property._id).then(res => {
            if(res.error) toast.error(res.error);

            if(res.isBookmarked) setIsBookmarked(res.isBookmarked);

            setLoading(false);

        })

    }, [property._id, userId, checkBoomarkStatus]);

    const handleClick = async() => {
        if(!userId) {
            toast.error('You need to be signed in to bookmark a listing');
            return;
        }

       const result = await bookmarkProperty(property._id);

       if(result.error) {
        toast.error(result.error);
       } else {
        setIsBookmarked(result.isBookmarked);
        toast.success(result.message);
       }
    }

    if(loading) {
        return <p className="text-center">Loading...</p>
    }
    return ( 
        <>
      { isBookmarked ? (  <button
        onClick={handleClick}
        className="bg-red-500 hover:bg-red-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
      >
        <FaBookmark  className="mr-2" /> Remove Bookmark
      </button>):(
         <button
         onClick={handleClick}
         className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
       >
         <FaBookmark  className="mr-2" /> Bookmark Property
       </button>
      )}
      </>
     );
}
 
export default BookmarkButton;