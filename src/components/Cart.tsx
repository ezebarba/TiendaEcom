import React from "react";
import { useCartStore } from "../stores/cartStore"; // Asegúrate de tener este archivo configurado con Zustand.

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCartStore();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio: ${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${calculateTotal()}</h3>
            <button onClick={clearCart}>Vaciar carrito</button>
            <button>Pagar</button> {/* Aquí agregarías la lógica para redirigir al pago */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
