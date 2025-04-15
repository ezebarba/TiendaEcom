// src/components/Cart.tsx
import { useCartStore } from "../stores/cartStore";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Precio: ${item.price.toLocaleString()}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="text-xl font-bold">Total: ${totalPrice.toLocaleString()}</p>
            <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded">
              Finalizar compra
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
