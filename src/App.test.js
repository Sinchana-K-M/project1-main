import { render, screen } from '@testing-library/react';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

test('renders ShopEasy app', () => {
  render(
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
  );
  const logoElement = screen.getByText(/ShopEasy/i);
  expect(logoElement).toBeInTheDocument();
});
