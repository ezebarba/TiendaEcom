// src/pages/CartPage.tsx
import Cart from "../components/Cart";

const CartPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Tu carrito</h1>
      <Cart />
    </div>
  );
};

export default CartPage;
