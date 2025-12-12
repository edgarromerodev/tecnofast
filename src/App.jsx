import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Home from "./page/home/Home";

function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>

    </>
  )
}

export default App
