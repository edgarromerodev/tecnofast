import { StarIcon } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const currency = "Q";
  const rating = 4; 

  return (
    <Link to={`/product/${product.id}`} className="pcard-link">
      <div className="pcard-image-container">
        <img
          src={product.images}
          alt={product.name || "Producto"}
          className="pcard-image"
          onError={(e) => (e.target.src = "/default-image.png")}
        />
      </div>

      {/* Info */}
      <div className="pcard-info">
        <div className="pcard-title-price">
          <p className="pcard-title">{product.name || "Sin nombre"}</p>
          <p className="pcard-price">
            {currency}
            {product.price ? product.price.toFixed(2) : "0.00"}
          </p>
        </div>

        {/* Rating */}
        <div className="pcard-rating">
          {Array(5)
            .fill("")
            .map((_, index) => (
              <StarIcon
                key={index}
                size={14}
                className="pcard-star"
                fill={rating >= index + 1 ? "#00C950" : "#D1D5DB"}
              />
            ))}
        </div>

        <div className="pcard-action">
          <button className="pcard-add-btn">
            Agregar al carrito
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
