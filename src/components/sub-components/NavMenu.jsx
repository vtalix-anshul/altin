// import {Link} from "react-router-dom";
// import newLogo from "../../assets/images/Logo.svg";
// import GetAQuote from "./GetAQuote";

// const NavMenu = () => {
//   const links = [
//     { to: "/about", label: "About Us" },
//     { to: "/products", label: "Products" },
//     { to: "/contact-us", label: "Contact Us" },
//   ];

//   return (
//     <nav aria-label="Global" className="mx-0 md:mx-auto flex w-fit md:w-full items-center justify-between py-6 px-6 lg:px-8  gap-4 z-[999]">
//       <div className="flex justify-start lg:flex-1">
//         <Link to="/" className="-m-1.5 p-1.5">
//           <span className="sr-only">Altin</span>
//           <img src={newLogo} alt="Logo" className="w-auto scale-110" />
//         </Link>
//       </div>

//       <div className="hidden md:flex gap-x-9 items-center">
//         {links.map(({ to, label }) => (
//           <Link
//             key={to}
//             to={to}
//             className={`xl:text-lg text-white relative bottom__line`}
//           >
//             {label}
//           </Link>
//         ))}

//         <button id="google_translate_element" onClick={()=>handleLanguageChange()}>chl bhai</button>
//         <GetAQuote />
//       </div>
//     </nav>
//   );
// };
  
// export default NavMenu;

import { useEffect } from "react";
import { Link } from "react-router-dom";
import newLogo from "../../assets/images/Logo.svg";
import GetAQuote from "./GetAQuote";

const NavMenu = () => {
  const links = [
    { to: "/about", label: "About Us" },
    { to: "/products", label: "Products" },
    { to: "/contact-us", label: "Contact Us" },
  ];

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (document.getElementById("google-translate-script")) return;

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.type = "text/javascript";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.onload = () => {
        if (window.google && window.google.translate) {
          window.googleTranslateElementInit();
        }
      };
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE },
        "google_translate_element"
      );
    };

    addGoogleTranslateScript();
  }, []);

  const handleLanguageChange = () => {
    const select = document.querySelector(".goog-te-combo");
    if (select) {
      select.focus();
      select.click();
    }
  };

  return (
    <nav
      aria-label="Global"
      className="mx-0 md:mx-auto flex w-fit md:w-full items-center justify-between py-6 px-6 lg:px-8 gap-4 z-[999]"
    >
      <div className="flex justify-start lg:flex-1">
        <Link to="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Altin</span>
          <img src={newLogo} alt="Logo" className="w-auto scale-110" />
        </Link>
      </div>

      <div className="hidden md:flex gap-x-9 items-center">
        {links.map(({ to, label }) => (
          <Link key={to} to={to} className="xl:text-lg text-white relative bottom__line">
            {label}
          </Link>
        ))}

        {/* Google Translate Button */}
        {/* <button
          onClick={handleLanguageChange}
          className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition"
        >
          🌍 Translate
        </button> */}

        <div id="google_translate_element" className="flex max-h-10 overflow-y-hidden"></div>
        <GetAQuote />
      </div>

      {/* Google Translate Widget (Hidden by default, but will show when script loads) */}
    </nav>
  );
};

export default NavMenu;