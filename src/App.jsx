import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home.";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/products" element={<h2>Products page</h2>} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App
