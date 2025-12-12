import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import logo from "/logo.png";
import { Search, ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
    const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { text: "Inicio", path: "/" },
    { text: "Comercio", path: "/shop" }
  ];


  return (
    <nav className="nav-main">
      <div className="nav-main-container">

        {/* MENU + LOGO */}
        <div className="nav-main-left">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="nav-main-menu-btn"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div
            className="nav-main-logo-container"
            style={{ cursor: "pointer" }}
          >
            <img src={logo} alt="Logo" className="nav-main-logo-img" />
          </div>
        </div>

        {/* BUSCADOR MOBILE - SOLO VISTA */}
        <form className="nav-main-search-mobile">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Buscar Productos"
          />
        </form>

        {/* ICONO CARRITO MOBILE - SOLO VISTA */}
          <div className="nav-main-cart-mobile">
          <Link
            to="/cart"
            className="nav-main-cart-btn"
          >
            <ShoppingCart size={20} />
            <span className="nav-main-cart-count">0</span>
          </Link>
        </div>
        {/* MENU DESKTOP */}
        <div className="nav-main-desktop">
          {navLinks.map((link, i) => (
            <Link key={i} to={link.path} className="nav-main-link">
              {link.text}
            </Link>
          ))}

          <button className="nav-main-admin-btn" onClick={() => navigate("/login")} >
            Admin
          </button>

          {/* BUSCADOR DESKTOP - SOLO VISTA */}
          <form  className="nav-main-search-desktop">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Buscar Productos"
            />
          </form>

          {/* CARRITO DESKTOP*/}
           <Link to="/cart" className="nav-main-cart-desktop">
            <ShoppingCart size={18} />
            <span className="nav-main-cart-count-desktop">0</span>
          </Link>
        </div>
      </div>

      {/* MENU MOVIL */}
      {isMobileMenuOpen && (
        <div className="nav-main-mobile-menu">
          <div className="nav-main-mobile-header">
            <img src={logo} alt="Logo" className="nav-main-mobile-logo" />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="nav-main-close-mobile"
              aria-label="Cerrar menú"
            >
              <X size={24} />
            </button>
          </div>

          <div className="nav-main-mobile-links">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.path}
                className="nav-main-mobile-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.text}
              </Link>
            ))}

            <button className="nav-main-admin-btn" onClick={() => navigate("/login")} >
              Admin
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;