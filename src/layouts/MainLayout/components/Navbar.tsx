// --- Imports --- //
import React, { FC } from 'react';
import { Link } from 'gatsby';
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
    <nav className='sticky top-0 z-10 bg-primary  text-primary-content navbar'>
      <div className='flex-1'>
        <Link to='/' className='text-xl normal-case btn btn-ghost'>
          GSCT
        </Link>
      </div>
      <div className=' navbar-end'>

        <a href='https://github.com/NathanHealea/gatsby-static-content-template' target='_blank' className='btn btn-ghost'>
          <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCEtLSBHZW5lcmF0b3I6IEdyYXZpdC5pbyAtLT48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHN0eWxlPSJpc29sYXRpb246aXNvbGF0ZSIgdmlld0JveD0iMCAwIDQ5NiA1MTIiIHdpZHRoPSI0OTZwdCIgaGVpZ2h0PSI1MTJwdCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJfY2xpcFBhdGhfYkpWbWZhcVdCVUdJQm1ra09XNk5NMXo5TjBGaUl1cEYiPjxyZWN0IHdpZHRoPSI0OTYiIGhlaWdodD0iNTEyIi8+PC9jbGlwUGF0aD48L2RlZnM+PGcgY2xpcC1wYXRoPSJ1cmwoI19jbGlwUGF0aF9iSlZtZmFxV0JVR0lCbWtrT1c2Tk0xejlOMEZpSXVwRikiPjxwYXRoIGQ9IiBNIDE2NS45IDM5Ny40IEMgMTY1LjkgMzk5LjQgMTYzLjYgNDAxIDE2MC43IDQwMSBDIDE1Ny40IDQwMS4zIDE1NS4xIDM5OS43IDE1NS4xIDM5Ny40IEMgMTU1LjEgMzk1LjQgMTU3LjQgMzkzLjggMTYwLjMgMzkzLjggQyAxNjMuMyAzOTMuNSAxNjUuOSAzOTUuMSAxNjUuOSAzOTcuNCBaICBNIDEzNC44IDM5Mi45IEMgMTM0LjEgMzk0LjkgMTM2LjEgMzk3LjIgMTM5LjEgMzk3LjggQyAxNDEuNyAzOTguOCAxNDQuNyAzOTcuOCAxNDUuMyAzOTUuOCBDIDE0NS45IDM5My44IDE0NCAzOTEuNSAxNDEgMzkwLjYgQyAxMzguNCAzODkuOSAxMzUuNSAzOTAuOSAxMzQuOCAzOTIuOSBaICBNIDE3OSAzOTEuMiBDIDE3Ni4xIDM5MS45IDE3NC4xIDM5My44IDE3NC40IDM5Ni4xIEMgMTc0LjcgMzk4LjEgMTc3LjMgMzk5LjQgMTgwLjMgMzk4LjcgQyAxODMuMiAzOTggMTg1LjIgMzk2LjEgMTg0LjkgMzk0LjEgQyAxODQuNiAzOTIuMiAxODEuOSAzOTAuOSAxNzkgMzkxLjIgWiAgTSAyNDQuOCA4IEMgMTA2LjEgOCAwIDExMy4zIDAgMjUyIEMgMCAzNjIuOSA2OS44IDQ1Ny44IDE2OS41IDQ5MS4yIEMgMTgyLjMgNDkzLjUgMTg2LjggNDg1LjYgMTg2LjggNDc5LjEgQyAxODYuOCA0NzIuOSAxODYuNSA0MzguNyAxODYuNSA0MTcuNyBDIDE4Ni41IDQxNy43IDExNi41IDQzMi43IDEwMS44IDM4Ny45IEMgMTAxLjggMzg3LjkgOTAuNCAzNTguOCA3NCAzNTEuMyBDIDc0IDM1MS4zIDUxLjEgMzM1LjYgNzUuNiAzMzUuOSBDIDc1LjYgMzM1LjkgMTAwLjUgMzM3LjkgMTE0LjIgMzYxLjcgQyAxMzYuMSA0MDAuMyAxNzIuOCAzODkuMiAxODcuMSAzODIuNiBDIDE4OS40IDM2Ni42IDE5NS45IDM1NS41IDIwMy4xIDM0OC45IEMgMTQ3LjIgMzQyLjcgOTAuOCAzMzQuNiA5MC44IDIzOC40IEMgOTAuOCAyMTAuOSA5OC40IDE5Ny4xIDExNC40IDE3OS41IEMgMTExLjggMTczIDEwMy4zIDE0Ni4yIDExNyAxMTEuNiBDIDEzNy45IDEwNS4xIDE4NiAxMzguNiAxODYgMTM4LjYgQyAyMDYgMTMzIDIyNy41IDEzMC4xIDI0OC44IDEzMC4xIEMgMjcwLjEgMTMwLjEgMjkxLjYgMTMzIDMxMS42IDEzOC42IEMgMzExLjYgMTM4LjYgMzU5LjcgMTA1IDM4MC42IDExMS42IEMgMzk0LjMgMTQ2LjMgMzg1LjggMTczIDM4My4yIDE3OS41IEMgMzk5LjIgMTk3LjIgNDA5IDIxMSA0MDkgMjM4LjQgQyA0MDkgMzM0LjkgMzUwLjEgMzQyLjYgMjk0LjIgMzQ4LjkgQyAzMDMuNCAzNTYuOCAzMTEuMiAzNzEuOCAzMTEuMiAzOTUuMyBDIDMxMS4yIDQyOSAzMTAuOSA0NzAuNyAzMTAuOSA0NzguOSBDIDMxMC45IDQ4NS40IDMxNS41IDQ5My4zIDMyOC4yIDQ5MSBDIDQyOC4yIDQ1Ny44IDQ5NiAzNjIuOSA0OTYgMjUyIEMgNDk2IDExMy4zIDM4My41IDggMjQ0LjggOCBaICBNIDk3LjIgMzUyLjkgQyA5NS45IDM1My45IDk2LjIgMzU2LjIgOTcuOSAzNTguMSBDIDk5LjUgMzU5LjcgMTAxLjggMzYwLjQgMTAzLjEgMzU5LjEgQyAxMDQuNCAzNTguMSAxMDQuMSAzNTUuOCAxMDIuNCAzNTMuOSBDIDEwMC44IDM1Mi4zIDk4LjUgMzUxLjYgOTcuMiAzNTIuOSBaICBNIDg2LjQgMzQ0LjggQyA4NS43IDM0Ni4xIDg2LjcgMzQ3LjcgODguNyAzNDguNyBDIDkwLjMgMzQ5LjcgOTIuMyAzNDkuNCA5MyAzNDggQyA5My43IDM0Ni43IDkyLjcgMzQ1LjEgOTAuNyAzNDQuMSBDIDg4LjcgMzQzLjUgODcuMSAzNDMuOCA4Ni40IDM0NC44IFogIE0gMTE4LjggMzgwLjQgQyAxMTcuMiAzODEuNyAxMTcuOCAzODQuNyAxMjAuMSAzODYuNiBDIDEyMi40IDM4OC45IDEyNS4zIDM4OS4yIDEyNi42IDM4Ny42IEMgMTI3LjkgMzg2LjMgMTI3LjMgMzgzLjMgMTI1LjMgMzgxLjQgQyAxMjMuMSAzNzkuMSAxMjAuMSAzNzguOCAxMTguOCAzODAuNCBaICBNIDEwNy40IDM2NS43IEMgMTA1LjggMzY2LjcgMTA1LjggMzY5LjMgMTA3LjQgMzcxLjYgQyAxMDkgMzczLjkgMTExLjcgMzc0LjkgMTEzIDM3My45IEMgMTE0LjYgMzcyLjYgMTE0LjYgMzcwIDExMyAzNjcuNyBDIDExMS42IDM2NS40IDEwOSAzNjQuNCAxMDcuNCAzNjUuNyBaICIgZmlsbD0icmdiKDI1NSwyNTUsMjU1KSIvPjwvZz48L3N2Zz4=" className='w-8 h-8' />
        </a>
      </div>
    </nav>
  );
};

// Default Return
export default Navbar;