export default function Checkout() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Checkout Page</h2>
      <h3>Total Payment</h3>
      <button onClick={() => alert("Payment Successful ✅")}>
        Pay Now
      </button>
    </div>
  );
}