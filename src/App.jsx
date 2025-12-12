import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";

function App() {

  return (
    <>
    <Router>
      <Navbar/>
    </Router>

    </>
  )
}

export default App
