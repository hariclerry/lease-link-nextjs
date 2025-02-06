import Link from "next/link";

const InfoBoxes = ({text, heading, buttonInfo, backgroundColor='bg-gray-100', textColor='text-gray-800'}) => {
    return ( 
        <div className= {`${backgroundColor} p-6 rounded-lg shadow-md`}>
        <h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
        <p className={`${textColor} mt-2 mb-4`}>
         {text}
        </p>
        <Link
          href={buttonInfo.link}
          className={`${buttonInfo.backgroundColor} inline-block text-white rounded-lg px-4 py-2 hover:${buttonInfo.hover}`}
        >
         {buttonInfo.text}
        </Link>
      </div>
     );
}
 
export default InfoBoxes;