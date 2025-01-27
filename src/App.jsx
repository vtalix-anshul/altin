// import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Home from "./pages/Home.";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Products from "./pages/Products";
// import Tiles from "./components/SmallProductComponent/Tiles";
// import SanitaryWare from "./components/SmallProductComponent/SanitaryWare";
// import BathFittings from "./components/SmallProductComponent/BathFittings";
// import Blog1 from "./pages/Blog1";
// import Blog2 from "./pages/Blog2";
// import Blog3 from "./pages/Blog3";

// import whatsapp__image from "./assets/images/whatsapp__fixed.png";
// import scroll__top from "./assets/images/up__arrow.png";

// function App() {
//   return (
//     <>
//       <Router>
//         <Header />
//         <Routes>
//           <Route index element={<Home />}/>
//           <Route path="/about" element={<About />}/>
//           <Route path="/products" element={<Products />} />
//           <Route path="/contact-us" element={<Contact />} />
//           <Route path="/tiles" element={<Tiles />} />
//           <Route path="/sanitary" element={<SanitaryWare />} />
//           <Route path="/bath-fittings" element={<BathFittings />} />
//           <Route path="/blog/1" element={<Blog1 />} />
//           <Route path="/blog/2" element={<Blog2 />} />
//           <Route path="/blog/3" element={<Blog3 />} />
//           <Route path="/blog" element={<Blog1 />} />
//         </Routes>
//         <Footer />
//         <div className="fixed__div fixed bottom-7 right-7 flex gap-4 flex-col">
//           <a target="_blank" href="https://wa.me/+918488884599" className="block bg-darkGray rounded-full w-16 h-16">
//             <img src={whatsapp__image} alt="" className="w-full h-full"/>
//           </a>
//           <button onClick={window.scrollY} className="w-16 h-16 bg-darkGray rounded-full">
//             <img src={scroll__top} alt="" className="w-full h-full"/>
//           </button>
//         </div>
//       </Router>
//     </>
//   );
// }

// export default App


import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home.";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Tiles from "./components/SmallProductComponent/Tiles";
import SanitaryWare from "./components/SmallProductComponent/SanitaryWare";
import BathFittings from "./components/SmallProductComponent/BathFittings";
import Blog1 from "./pages/Blog1";
import Blog2 from "./pages/Blog2";
import Blog3 from "./pages/Blog3";

import whatsapp__image from "./assets/images/whatsapp__fixed.png";
import scroll__top from "./assets/images/up__arrow.png";

function App() {
  // State to manage scroll button visibility
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Scroll to the top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Effect to listen to window scroll and toggle button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/tiles" element={<Tiles />} />
          <Route path="/sanitary" element={<SanitaryWare />} />
          <Route path="/bath-fittings" element={<BathFittings />} />
          <Route path="/blog/1" element={<Blog1 />} />
          <Route path="/blog/2" element={<Blog2 />} />
          <Route path="/blog/3" element={<Blog3 />} />
          <Route path="/blog" element={<Blog1 />} />
        </Routes>
        <Footer />
        <div className="fixed__div fixed bottom-7 right-7 flex gap-4 flex-col">
          {/* WhatsApp Link */}
          <a
            target="_blank"
            href="https://wa.me/+918488884599"
            className="block bg-darkGray rounded-full w-16 h-16"
            rel="noreferrer"
          >
            <img src={whatsapp__image} alt="WhatsApp" className="w-full h-full" />
          </a>
          {/* Scroll to Top Button */}
          {showScrollButton && (
            <button
              onClick={scrollToTop}
              className="w-16 h-16 bg-darkGray rounded-full"
            >
              <img src={scroll__top} alt="Scroll to Top" className="w-full h-full" />
            </button>
          )}
        </div>
      </Router>
    </>
  );
}

export default App;
