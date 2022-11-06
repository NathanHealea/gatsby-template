// --- Imports --- //
import React, { FC } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Drawer, { DrawerContent, DrawerSlide } from './components/Drawer';
import { Menu } from '@headlessui/react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    <Drawer slideDirection='END'>
      <DrawerContent>
        <div className='flex flex-col min-h-full prose prose-md sm:prose-lg lg:prose-xl'>
          <Navbar
            start={
              <Link to='/' className='text-xl normal-case btn btn-ghost'>
                GSCT
              </Link>
            }>
            <div className='menu menu-horizontal'>
              <Link to='/' className='btn btn-ghost flex justify-start'>
                <span className='w-6 h-6 mr-2 block'>
                  <FontAwesomeIcon icon={['fas', 'house']} size='xl' />
                </span>
                Home
              </Link>
              <Link to='/404' className='btn btn-ghost flex justify-start'>
                <span className='w-6 h-6 mr-2 block'>
                  <FontAwesomeIcon icon={['fas', 'question']} size='xl' />
                </span>
                Not Found
              </Link>
              <a
                href='https://github.com/NathanHealea/gatsby-static-content-template'
                target='_blank'
                className='btn btn-ghost flex justify-start'>
                <span className='w-6 h-6 mr-2 block'>
                  <FontAwesomeIcon icon={['fab', 'github']} size='xl' />
                </span>
                Source Code
              </a>
            </div>
          </Navbar>
          {children}
          <Footer />
        </div>
      </DrawerContent>
      <DrawerSlide>
        <Menu.Items as='div' className='menu p-4 w-80 bg-base-100'>
          <Menu.Item>
            <Link to='/' className='btn btn-ghost flex justify-start'>
              <span className='w-6 h-6 mr-2 block'>
                <FontAwesomeIcon icon={['fas', 'house']} size='xl' />
              </span>
              Home
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/404' className='btn btn-ghost flex justify-start'>
              <span className='w-6 h-6 mr-2 block'>
                <FontAwesomeIcon icon={['fas', 'question']} size='xl' />
              </span>
              Not Found
            </Link>
          </Menu.Item>
          <Menu.Item>
            <a
              href='https://github.com/NathanHealea/gatsby-static-content-template'
              target='_blank'
              className='btn btn-ghost flex justify-start'>
              <span className='w-6 h-6 mr-2 block'>
                <FontAwesomeIcon icon={['fab', 'github']} size='xl' />
              </span>
              Source Code
            </a>
          </Menu.Item>
        </Menu.Items>
      </DrawerSlide>
    </Drawer>
  );
};

// Default Return
export default MainLayout;
