import BookmarkButton from '@/components/BookmarkButton';
import PropertyContactForm from '@/components/PropertyContactForm';
import PropertyDetails from '@/components/PropertyDetails';
import PropertyHeaderImage from '@/components/PropertyHeaderImage';
import PropertyImages from '@/components/PropertyImages';
import ShareButtons from '@/components/ShareButtons';
import connectDB from '@/config/database';
import Property from '@/models/Property';
import { convertToSerializableObject } from '@/utils/converToObject';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

const PropertyPage = async ({params}) => {
  const PUBLIC_DOMAIN = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';
    await connectDB();

    const propertyDoc = await Property.findById(params.id).lean();
    const property = convertToSerializableObject(propertyDoc);

    if(!property) {
      return <h1 className='text-center text-2xl font-bold mt-20'>
        Property Not Found
      </h1>
    }
    return ( 
        <>
        <PropertyHeaderImage image={property.images[0]}/>
        <section>
      <div className="container m-auto py-6 px-6">
        <Link
          href="/properties"
          className="text-my-light-blue hover:text-my-light-blue flex items-center"
        >
          <FaArrowLeft className='mr-2'/> Back to Properties
        </Link>
      </div>
    </section>
    <section className="bg-background-blue">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
        <PropertyDetails property={property}/>
        <aside className='space-y-4'>
          <BookmarkButton property={property}/>
          <ShareButtons PUBLIC_DOMAIN={PUBLIC_DOMAIN } property={property}/>
          <PropertyContactForm property={property}/>
        </aside>
        </div>
    </div>
    </section>
    <PropertyImages images={property.images}/>
    </>

     );
}
 
export default PropertyPage;