import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";
import logo from "/logo.png";

const Footer = () => {
  const linkSections = [
    {
      title: "EMPRESA",
      links: [
        { text: "Inicio", path: "/" },
        { text: "Política de Privacidad", path: "/" },
      ],
    },
    {
      title: "CONTACTO",
      links: [
        { text: "+502 5588-4422", path: "/", icon: Phone },
        {
          text: "Av. TecnoPark 14-55, Zona 10, Ciudad de Guatemala",
          path: "/",
          icon: MapPin,
        },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link">
              <img
                src={logo}
                alt="Logo TecnoMarket GT"
                className="footer-logo"
              />
            </Link>
            <p className="footer-description">
              En <strong>TecnoFast GT</strong> te ofrecemos lo último en tecnología:
              <strong> teléfonos inteligentes, cámaras, accesorios, audífonos y gadgets modernos</strong>.
              Productos originales, precios competitivos y envíos a toda Guatemala.
            </p>
          </div>
          <div className="footer-links">
            {linkSections.map((section, index) => (
              <div key={index} className="footer-section">
                <h3 className="footer-title">{section.title}</h3>

                <ul className="footer-list">
                  {section.links.map((link, i) => (
                    <li key={i} className="footer-list-item">
                      {link.icon && <link.icon className="footer-icon" />}
                      <Link to={link.path} className="footer-link">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>

        </div>
              {/* Derechos reservados */}
        <p className="footer-copy">
          Copyright © 2025 TecnoFast GT. Todos los derechos reservados.
        </p>
  
      </div>
    </footer>
  );
};

export default Footer;
