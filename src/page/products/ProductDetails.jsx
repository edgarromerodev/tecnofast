import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { StarIcon, TagIcon,  EarthIcon, CreditCardIcon,  UserIcon,} from "lucide-react";

import { productsData } from "../../data/productsData";

const ProductDetails = () => {
  const { id } = useParams();

  // Buscar producto por id
  const product = productsData.find((p) => p.id === Number(id));

  if (!product) {
    return <p className="product-details-not-found">Producto no encontrado</p>;
  }

  const currency = "Q";
  const [mainImage, setMainImage] = useState(product.images[0]);

  // Rating promedio
  const averageRating =
    product.rating?.reduce((acc, item) => acc + item.rating, 0) /
      product.rating?.length || 4;

  return (
    <div className="product-details-container">
      <div className="product-details-wrapper">

        {/* ===== GALERÍA ===== */}
        <div className="product-details-gallery">
          <div className="product-details-thumbs">
            {product.images.map((image, index) => (
              <div
                key={index}
                className="product-details-thumb-box"
                onClick={() => setMainImage(image)}
              >
                <img
                  src={image}
                  alt={`Miniatura ${index + 1}`}
                  className="product-details-thumb-img"
                />
              </div>
            ))}
          </div>

          <div className="product-details-main-image-box">
            <img
              src={mainImage}
              alt={product.name}
              className="product-details-main-image"
            />
          </div>
        </div>

        {/* ===== INFO ===== */}
        <div className="product-details-info">

          <h1 className="product-details-title">{product.name}</h1>

          {/* ===== DESCRIPCIÓN ===== */}
          <p className="product-details-description">{product.description}</p>

          {/* ===== RATING ===== */}
          <div className="product-details-rating">
            <div className="product-details-stars">
              {Array(5)
                .fill("")
                .map((_, index) => (
                  <StarIcon
                    key={index}
                    size={16}
                    fill={averageRating >= index + 1 ? "#00C950" : "#D1D5DB"}
                    className="product-details-star"
                  />
                ))}
            </div>
            <p className="product-details-reviews">{product.rating?.length || 0} Reseñas</p>
          </div>

          {/* ===== PRECIOS ===== */}
          <div className="product-details-price-row">
            <p className="product-details-price">{currency}{product.price.toFixed(2)}</p>
            {product.originalPrice && (
              <p className="product-details-original-price">
                {currency}{product.originalPrice.toFixed(2)}
              </p>
            )}
          </div>

          {/* ===== AHORRO ===== */}
          {product.originalPrice && (
            <div className="product-details-save">
              <TagIcon size={16} />
              <p>
                Ahorra{" "}
                {(((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0)}%
              </p>
            </div>
          )}

          {/* ===== ACCIONES ===== */}
          <div className="product-details-actions">
            <button className="product-details-btn">Agregar al carrito</button>
          </div>

          <hr className="product-details-divider" />

          {/* ===== CARACTERÍSTICAS ===== */}
          <div className="product-details-features">
            <div className="product-details-feature">
              <EarthIcon size={18} className="product-details-feature-icon" />
              <span>Envío gratis a todo el país</span>
            </div>

            <div className="product-details-feature">
              <CreditCardIcon size={18} className="product-details-feature-icon" />
              <span>Pago 100% seguro</span>
            </div>

            <div className="product-details-feature">
              <UserIcon size={18} className="product-details-feature-icon" />
              <span>Confiable por marcas top</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
