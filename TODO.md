# Fix Plan

1. [x] Fix `src/components/ProductCard.js` — rewrite as proper ProductCard component
2. [x] Fix `src/pages/ProductDetails.js` — implement product details page
3. [x] Fix `src/App.js` — add missing routes for Checkout, Login, ProductDetails
4. [x] Fix `src/pages/Cart.js` — use `useNavigate` instead of `window.location.href`
5. [x] Fix casing mismatch for Checkout import
6. [x] Run app and verify

# Additional Fixes

1. [x] Downgrade `react-router-dom` from v7 to v6.x to fix Jest module resolution error
2. [x] Fix `App.test.js` — replace default CRA test with proper ShopEasy test (wrap in providers)
3. [x] Fix duplicate key warning in `Cart.js` — track quantity in CartContext instead of duplicate items
4. [x] Run tests and verify all pass

