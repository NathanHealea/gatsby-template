// --- Imports --- //
import React, { FC, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DrawerButton } from './Drawer';
/**
 * Navbar Props interface
 */
interface NavbarProps {
  children?: React.ReactNode;
  start?: React.ReactNode;
}

/**
 * Navbar Component
 */
const Navbar: FC<NavbarProps> = (props) => {
  const { start, children } = props;
  return (
    <nav className='sticky top-0 z-10 bg-primary text-primary-content navbar'>
      <div className='nav-start flex-1'>{start}</div>
      <div className='nav-end'>
        <div className='flex-none md:hidden'>
          <DrawerButton />
        </div>
        <div className='flex-none hidden md:block'>{children}</div>
      </div>
    </nav>
  );
};

// Default Return
export default Navbar;
