import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import newLogo from "../../assets/images/Logo.png";
import GetAQuote from "./GetAQuote";

const SideMenu = ({ mobileMenuOpen, setMobileMenuOpen }) => {   
    const links = [
    { to: "/about", label: "About Us" },
    { to: "/products", label: "Products" },
    { to: "/contact-us", label: "Contact Us" },
    ];
    return (
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-100 bg-gray-500 opacity-75 transition-all duration-300" />
        <DialogPanel className="fixed inset-y-0 right-0 z-[999] w-[100%] sm:w-64 bg-white p-6 px-4 pt-5 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between mb-6">
            <Link to="/" className="-m-1.5 p-1.5 bg-black">
                <img src={newLogo} alt="Logo" className="h-8 w-auto" />
            </Link>
            <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-md text-gray-700"
            >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            </div>

            <nav className="mt-6 space-y-4">
                <Link to="/" className="text-gray-900 block text-lg">
                    Home
                </Link>
                <Link to="/about" className="text-gray-900 block text-lg">
                    About
                </Link>
                <Link to="/contact-us" className="text-gray-900 block text-lg">
                    Contact Us
                </Link>
                <GetAQuote />
            </nav>
        </DialogPanel>
        </Dialog>
    );
};

export default SideMenu;