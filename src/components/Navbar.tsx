import { Link } from "react-router-dom";
import { useCartStore } from "../stores/cartStore";

const Navbar = () => {
  const cart = useCartStore((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow">
      <Link to="/" className="text-xl font-bold">
        TiendaEcom
      </Link>
      <div className="flex gap-6 items-center">
        <Link to="/" className="hover:underline">
          Inicio
        </Link>
        <Link to="/carrito" className="hover:underline relative">
          Carrito
          {totalItems > 0 && (
            <span className="ml-1 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
