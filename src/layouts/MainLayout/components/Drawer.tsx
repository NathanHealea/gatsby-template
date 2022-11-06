// --- Imports --- //
import React, { FC } from 'react';
import CN from 'classnames';
import { Menu } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface DrawerButtonProps {
  // className: string;
}

export const DrawerButton: FC<DrawerButtonProps> = (props) => {
  return (
    <Menu.Button className='btn btn-square btn-ghost'>
      <FontAwesomeIcon icon={['fas', 'bars']} size='xl' />
    </Menu.Button>
  );
};

interface DrawerContentProps {
  children: React.ReactNode;
}

export const DrawerContent: FC<DrawerContentProps> = (props) => {
  const { children } = props;
  return <div className='drawer-content'>{children}</div>;
};

interface DrawerSlideProps {
  children?: React.ReactNode;
}

export const DrawerSlide: FC<DrawerSlideProps> = (props) => {
  const { children } = props;

  return (
    <div className='drawer-side'>
      <label htmlFor='drawer' className='drawer-overlay'></label>
      {children}
    </div>
  );
};

enum DrawerSlideDirectionEnum {
  START = 'START',
  END = 'END'
}
/**
 * Drawer Props interface
 */
interface DrawerProps {
  children: React.ReactNode;
  slideDirection?: keyof typeof DrawerSlideDirectionEnum;
}

/**
 * Drawer Component
 */
const Drawer: FC<DrawerProps> = (props) => {
  const { children, slideDirection } = props;
  return (
    <Menu
      as='div'
      className={CN([
        'drawer',
        {
          'drawer-end': slideDirection == DrawerSlideDirectionEnum.END
        }
      ])}>
      {({ open }) => (
        <>
          <input
            id='drawer'
            type='checkbox'
            checked={open}
            className='drawer-toggle'
            readOnly
          />
          {children}
        </>
      )}
    </Menu>
  );
};

// Default Return
export default Drawer;
