// --- Imports --- //
import React, { FC } from 'react';
/**
 * Footer Props interface
 */
interface FooterProps {
  // children: React.ReactNode
}

/**
 * Footer Component
 */
const Footer: FC<FooterProps> = (props) => {
  return (
    <footer className='items-center px-4 py-8 footer footer-center bg-neutral text-neutral-content'>
      <div>
        <p className='text-xs'>
          Built with DaisyUI, TailwindCSS, GatsbyJS, &amp; ❤️
        </p>
      </div>
    </footer>
  );
};

// Default Return
export default Footer;
