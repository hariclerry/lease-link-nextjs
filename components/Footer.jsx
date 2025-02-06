import logo from '@/assets/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return ( 
        <footer className="bg-background-dark py-4 mt-auto">
          <div
            className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4"
          >
            <div className="mb-4 md:mb-0">
              <Image src={logo} alt="Logo" className="h-8 w-auto" />
            </div>
            <div
              className="flex flex-wrap justify-center md:justify-start mb-4 md:mb-0"
            >
              <ul className="flex space-x-4">
                <li><Link href="/properties">Properties</Link></li>
                <li><Link href="/">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-sm text-gray-500 mt-2 md:mt-0">
                &copy; {`${new Date().getFullYear()}`} LeaseLink. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
     );
}
 
export default Footer;