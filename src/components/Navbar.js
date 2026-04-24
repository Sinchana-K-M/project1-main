import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

export default function Navbar({ onSearch }) {
  const { cart } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <nav className="navbar">
      <h2 className="logo">ShopEasy</h2>

      <input
        type="text"
        placeholder="Search for products..."
        value={query}
        onChange={handleSearch}
        className="search-bar"
      />

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
        {user ? (
          <>
            <span className="user-email">{user.email}</span>
            <button className="logout-btn" onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}
