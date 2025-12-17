import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./page/home/Home";
import Footer from "./components/layouts/Footer";


function App() {
  return (
    <Router>
      <div className="app-layout">
        <Navbar />

        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
