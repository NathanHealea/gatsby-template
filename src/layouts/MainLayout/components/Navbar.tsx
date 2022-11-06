// --- Imports --- //
import React, { FC, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/**
 * Navbar Props interface
 */
interface NavbarProps {
  children?: React.ReactNode;
}

/**
 * Navbar Component
 */
const Navbar: FC<NavbarProps> = (props) => {
  const { children } = props;
  return (
    <nav className='sticky top-0 z-10 bg-primary text-primary-content navbar'>
      <div className='flex-1'>
        <Link to='/' className='text-xl normal-case btn btn-ghost'>
          GSCT
        </Link>
      </div>
      <div className=' navbar-end'>
        <div className='hidden md:flex'>
          <a
            href='https://github.com/NathanHealea/gatsby-static-content-template'
            target='_blank'
            className='btn btn-ghost'>
            <FontAwesomeIcon icon={['fab', 'github']} size='xl' />
          </a>
        </div>
        <div className='flex md:hidden'>
          <Menu as='div' className='dropdown dropdown-end'>
            <Menu.Button className='btn btn-ghost' as='label' tabIndex={0}>
              <FontAwesomeIcon icon={['fas', 'bars']} size='xl' />
            </Menu.Button>
            <Menu.Items
              as='div'
              tabIndex={0}
              className='menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4 text-primary'>
              <Menu.Item>
                <Link to='/' className='btn btn-ghost flex justify-start'>
                  <span className='w-6 h-6 mr-2 block'>
                    <FontAwesomeIcon icon={['fas', 'house']} size='xl' />
                  </span>
                  Home
                </Link>
              </Menu.Item>
              <Menu.Item >
                <Link to='/404' className='btn btn-ghost flex justify-start'>
                  <span className='w-6 h-6 mr-2 block'>
                    <FontAwesomeIcon icon={['fas', 'question']} size='xl' />
                  </span>
                  Not Found
                </Link>
              </Menu.Item>
              <Menu.Item >
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
          </Menu>
        </div>
      </div>
    </nav>
  );
};

// Default Return
export default Navbar;
