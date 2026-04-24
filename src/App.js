import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./components/Navbar";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <Navbar onSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}
