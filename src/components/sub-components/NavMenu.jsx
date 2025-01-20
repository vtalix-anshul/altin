import {Link} from "react-router-dom";
import newLogo from "../../assets/images/Logo.png";

const NavMenu = () => {
  const links = [
    { to: "/about", label: "About Us" },
    { to: "/products", label: "Products" },
    { to: "/contact-us", label: "Contact Us" },
  ];

  return (
    <nav aria-label="Global" className="md:mx-auto flex w-full items-center justify-between py-6 px-6 lg:px-8  gap-4">
      <div className="flex justify-start lg:flex-1 ">
        <Link to="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Altin</span>
          <img src={newLogo} alt="Logo" className="h-8 w-auto" />
        </Link>
      </div>

      <div className="hidden lg:flex gap-x-9 items-center">
        {links.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={`xl:text-lg text-white`}
          >
            {label}
          </Link>
        ))}
        <div className="block text-lg text-white">
          <button className="btn bg-orange">Get a Quote</button>
      </div>
      </div>
    </nav>
  );
};
  
export default NavMenu;