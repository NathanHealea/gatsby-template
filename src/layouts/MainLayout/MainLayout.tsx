// --- Imports --- //
import React, { FC } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
/**
 * MainLayout Props interface
 */
interface MainLayoutProps {
  children: React.ReactNode;
}

/**
 * MainLayout Component
 */
const MainLayout: FC<MainLayoutProps> = (props) => {
  const { children } = props;
  return (
    <div className='flex flex-col min-h-full prose prose-md sm:prose-lg lg:prose-xl'>
      <Navbar />
      {children}
      <Footer/>
    </div>
  );
};

// Default Return
export default MainLayout;
