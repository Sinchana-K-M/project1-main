import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 && <p>Your cart is empty.</p>}
      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt="" />
          <div>
            <h4>{item.title}</h4>
            <p>₹{item.price} x {item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      {cart.length > 0 && (
        <>
          <h3>Total: ₹{total.toFixed(2)}</h3>
          <button onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
}
