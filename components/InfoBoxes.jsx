import InfoBox from './InfoBox';

const InfoBoxes = () => {
    return ( 
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
           heading='For Renters'
           backgroundColor='bg-background-primary'
           textColor='text-foreground'
           buttonInfo={{
            hover: 'bg-gray-700',
            text: 'Browse Properties',
            link: '/properties',
            backgroundColor: 'bg-button-secondary-bg'
           }}
          text='Find your dream rental property. Bookmark properties and contact
              owners.'
          />
          <InfoBox 
          heading='For Property Owners'
          backgroundColor='bg-background-primary'
          textColor='text-foreground'
         buttonInfo={{
            hover: 'bg-my-light-blue',
            text: 'Add Property',
            link: '/properties/add',
            backgroundColor: 'bg-button-primary-bg'
           }}
          text='List your properties and reach potential tenants. Rent as an
          airbnb or long term.'

          />
        </div>
      </div>
    </section>
     );
}
 
export default InfoBoxes;