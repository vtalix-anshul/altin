import {Link} from "react-router-dom";
import newLogo from "../../assets/images/Logo.png";
import GetAQuote from "./GetAQuote";

const NavMenu = () => {
  const links = [
    { to: "/about", label: "About Us" },
    { to: "/products", label: "Products" },
    { to: "/contact-us", label: "Contact Us" },
  ];

  return (
    <nav aria-label="Global" className="mx-0 md:mx-auto flex w-fit md:w-full items-center justify-between py-6 px-6 lg:px-8  gap-4 z-50">
      <div className="flex justify-start lg:flex-1">
        <Link to="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Altin</span>
          <img src={newLogo} alt="Logo" className="h-12 w-auto" />
        </Link>
      </div>

      <div className="hidden md:flex gap-x-9 items-center">
        {links.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={`xl:text-lg text-white`}
          >
            {label}
          </Link>
        ))}
        <GetAQuote />
      </div>
    </nav>
  );
};
  
export default NavMenu;