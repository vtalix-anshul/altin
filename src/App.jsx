import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
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
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App
