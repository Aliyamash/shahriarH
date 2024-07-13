import Header from "@/components/layout/Header";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import AOSCL from "@/components/libraries/AOSCL";
import Footer from "@/components/layout/Footer";
import Toastify from '@/components/libraries/Toastify'


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body style={{background : "#212428"}}>
        <AuthProvider>
        <Header />
        {children}
        <AOSCL/>
        <Toastify theme="dark"/>
        <Footer/>
        </AuthProvider>
      </body>
    </html>
  );
}

