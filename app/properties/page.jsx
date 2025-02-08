import React from 'react';
import PropertyCard from '@/components/PropertyCard';
import connectDB from '@/config/database';
import Property from '@/models/Property';
import Pagination from '@/components/Pagination';

const PropertiesPage =  async({searchParams: {page=1, pageSize=6}}) => {
   await connectDB();
   const skip = (page - 1) * pageSize;
   const total = await Property.countDocuments({});
   const properties = await Property.find({}).skip(skip).limit(pageSize);

   const showPagination = total > pageSize; 
    return (
      <section className='px-4 py-6'>
        <div className='container-xl lg:container m-auto px-4 py-6'>
            { properties && properties.length === 0 ? (
                <p>No Properties found</p>
            ) : (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    properties.map((property, index) => (
                       <PropertyCard property={property} key={index}/>
                    ))
                }
            </div>
            )}
            {showPagination && (
                 <Pagination  page={parseInt(page)} pageSize={parseInt(pageSize)} totalItems={total}/>
            )}
       
        </div>
      
      </section>
    )
}

export default PropertiesPage
