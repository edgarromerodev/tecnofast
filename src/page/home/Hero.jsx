import { ArrowRightIcon, ChevronRightIcon } from "lucide-react";

const Hero = () => {
  const currency = "Q";

  return (
    <div className="hero2-wrapper">
      <div className="hero2-container">

        {/* HERO VERDE */}
        <div className="hero2-left">
          <div className="hero2-topline"></div>

          <div className="hero2-left-content">

            <div className="hero2-badge">
              <span className="hero2-badge-new">NUEVO</span>
              ¡Envío gratis en compras mayores a Q50!
              <ChevronRightIcon className="hero2-badge-arrow" size={16} />
            </div>

            <h2 className="hero2-title">
              Productos que necesitas. Precios que te encantarán.
            </h2>

            <div className="hero2-price-box">
              <p className="hero2-price-label">Desde</p>
              <p className="hero2-price-value">{currency}4.90</p>
            </div>

            <button className="hero2-btn">
              MÁS INFORMACIÓN
            </button>
          </div>

          <img
            className="hero2-main-img"
            src="/images/hero.png"
            alt="Imagen principal"
          />
        </div>

        {/* CARDS DERECHA */}
        <div className="hero2-right">

          {/* CARD 1 */}
          <div className="hero2-card hero2-card-orange">
            <div>
              <p className="hero2-card-title">Mejores productos</p>
              <p className="hero2-card-link">
                Ver más
                <ArrowRightIcon className="hero2-card-arrow" size={18} />
              </p>
            </div>
            <img
              className="hero2-card-img"
              src="/images/hero2.png"
              alt="Producto 1"
            />
          </div>

          {/* CARD 2 */}
          <div className="hero2-card hero2-card-yellow">
            <div>
              <p className="hero2-card-title">Mejores ofertas</p>
              <p className="hero2-card-link">
                Ver más
                <ArrowRightIcon className="hero2-card-arrow" size={18} />
              </p>
            </div>
            <img
              className="hero2-card-img"
              src="/images/hero3.png"
              alt="Producto 2"
            />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Hero;
