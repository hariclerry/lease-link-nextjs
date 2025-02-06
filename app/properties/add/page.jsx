import PropertyAddForm from "@/components/PropertyAddForm";

const AddPropertyPage = () => {
    return ( 
        <section className='bg-background-blue'>
            <div className="container m-auto max-w-2xl py-24">
                <div className="bg-background-primary px-6 py-8 mb-4 shadow-md rounded-md border-border m-4 md:m-0">
                    <PropertyAddForm />
                </div>

            </div>
        </section>
     );
}
 
export default AddPropertyPage;