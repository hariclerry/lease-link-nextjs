import '@/assets/styles/globals.css';
import AuthProvider from '@/components/AuthProvider';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'photoswipe/dist/photoswipe.css'
import Providers from './providers';

export const metadata
 = {
   title: 'Lease Link',
   keywords: 'rental, property, real estate',
   description: 'Find the perfect rental property', 
 };

    const MainLayout = ({children}) => {
    return ( 
        <AuthProvider>
      
        <html suppressHydrationWarning>
            <body className='flex flex-col min-h-screen'>
            <Providers>
                <Navbar />
                <main className="mt-10 md:mt-16">{children}</main>
                <Footer/>
                <ToastContainer />
                </Providers>
            </body>
        </html>
   
        </AuthProvider>
     );
}
 
export default MainLayout;