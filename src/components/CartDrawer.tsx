import { IoMdCloseCircle } from "react-icons/io";
import { useCartStore } from "../stores/cartStore";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div
      className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-semibold">Tu Carrito</h2>
        <button onClick={toggleCartDrawer}>
          <IoMdCloseCircle className="h-6 w-6 text-gray-600" />
        </button>
      </div>
      <div className="p-4 overflow-y-auto h-[calc(100%-4rem)]">
        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
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
        )}
        {cart.length > 0 && (
          <div className="mt-4">
            <p className="text-xl font-bold">Total: ${totalPrice.toLocaleString()}</p>
            <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded">
              Finalizar compra
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
