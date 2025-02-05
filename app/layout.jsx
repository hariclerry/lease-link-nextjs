import '@/assets/styles/globals.css';
import AuthProvider from '@/components/AuthProvider';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata
 = {
   title: 'Lease Link',
   keywords: 'rental, property, real estate',
   description: 'Find the perfect rental property', 
 };

    const MainLayout = ({children}) => {
    return ( 
        <AuthProvider>
        <html>
            <body>
                <Navbar />
                <main className="mt-10 md:mt-16">{children}</main>
                <Footer/>
                <ToastContainer />
            </body>
        </html>
        </AuthProvider>
     );
}
 
export default MainLayout;