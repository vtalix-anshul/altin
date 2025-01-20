import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home.";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/about" element={<h2>This sit heabut </h2>}/>
          <Route path="/products" element={<h2>Products page</h2>} />
          <Route path="/contact-us" element={<h2>Contact us oage</h2>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App
