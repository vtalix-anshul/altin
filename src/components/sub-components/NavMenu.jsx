import { Link } from "react-router-dom";
import { useEffect } from "react";
import newLogo from "../../assets/images/Logo.svg";
import GetAQuote from "./GetAQuote";

const NavMenu = () => {

  useEffect(() => {
    function filterGoogleTranslateWidget() {
      const translateContainer = document.querySelector("#google_translate_element");
  
      if (!translateContainer) return;
  
      // MutationObserver to detect when Google Translate inserts elements
      const observer = new MutationObserver(() => {
        document.querySelectorAll("#google_translate_element > div").forEach((div) => {
          if (!div.querySelector("#\\:0\\.targetLanguage")) {
            div.style.display = "none"; // Hide everything except #\:0\.targetLanguage
          }
        });
  
        // Hide the "Powered by" text node
        const poweredByText = translateContainer.childNodes[0].childNodes[1]; 

        if (poweredByText && poweredByText.nodeType === Node.TEXT_NODE) {
            poweredByText.remove(); // Removes only the text node
        }

  
        // Hide the Google Translate logo & link
        const poweredBySpan = translateContainer.querySelector("span");
        if (poweredBySpan) poweredBySpan.style.display = "none";
      });
  
      // Start observing changes
      observer.observe(translateContainer, { childList: true, subtree: true });
    }
  
    filterGoogleTranslateWidget(); // Run initially
  }, []);
  
  
  
  
  
  
  const links = [
    { to: "/about", label: "About Us" },
    { to: "/products", label: "Products" },
    { to: "/contact-us", label: "Contact Us" },
  ];

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

        {/* Hidden Google Translate Widget */}
        <div id="google_translate_element"></div>

        {/* Translation Button */}

        <GetAQuote />
      </div>
    </nav>
  );
};

export default NavMenu;
