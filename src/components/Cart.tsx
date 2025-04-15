import React from "react";
import { useCartStore } from "../stores/cartStore";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCartStore();

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white p-4 rounded shadow"
            >
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio unitario: ${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline"
              >
                Eliminar
              </button>
            </div>
          ))}
          <div className="mt-4">
            <h3 className="text-xl font-bold">Total: ${calculateTotal()}</h3>
            <button
              onClick={clearCart}
              className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
            >
              Vaciar carrito
            </button>
            <button className="ml-2 bg-green-600 text-white px-4 py-2 rounded">
              Proceder al pago
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
