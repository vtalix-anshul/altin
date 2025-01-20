import { useState } from 'react';
import SideMenu from './sub-components/SideMenu';
import NavMenu from './sub-components/NavMenu';
import { Bars3Icon } from '@heroicons/react/24/outline';
import GetAQuote from './sub-components/GetAQuote';
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  

  // Function to check if the current path is active

  return (
    <header className="bg-transparent z-50">
      {/* Pass isActive function to NavMenu */}
      <div className='flex justify-between items-center z-50'>
        <NavMenu />
        <div className="flex md:hidden pr-2.5 min-w-28 w-full justify-end items-center z-50">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
          <GetAQuote />
        </div>

        <SideMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen}/>
      </div>
    </header>
  );
};
export default Header;
