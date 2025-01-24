import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
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
import whatsapp__image from "./assets/images/whatsapp__fixed.svg";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/about" element={<About />}/>
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
        <a target="_blank" href="https://wa.me/+918488884599" className="fixed bottom-7 right-7 w-12 h-12">
          <img src={whatsapp__image} alt="" />
        </a>
      </Router>
    </>
  );
}

export default App
