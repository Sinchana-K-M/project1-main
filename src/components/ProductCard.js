import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.title}
        onClick={() => navigate("/product", { state: product })}
        style={{ cursor: "pointer", width: "100%", height: "200px", objectFit: "contain" }}
      />
      <h4>{product.title}</h4>
      <p>₹{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

