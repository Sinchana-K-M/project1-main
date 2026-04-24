import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const product = location.state;

  if (!product) {
    return (
      <div className="center">
        <h2>No product selected</h2>
        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
    );
  }

  return (
    <div className="product-details" style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "100%", height: "300px", objectFit: "contain" }}
      />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h3>₹{product.price}</h3>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <button onClick={() => navigate("/")} style={{ marginLeft: "10px" }}>
        Back to Home
      </button>
    </div>
  );
}

