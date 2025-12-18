import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./page/home/Home";
import Footer from "./components/layouts/Footer";
import ProductDetails from "./page/products/ProductDetails";


function App() {
  return (
    <Router>
      <div className="app-layout">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails/>} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
