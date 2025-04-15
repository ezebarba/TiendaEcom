import { Link } from 'react-router-dom';
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useCartStore } from "../stores/cartStore";

const Navbar = ({ toggleCartDrawer }) => {
  const cart = useCartStore((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow">
      <Link to="/" className="text-xl font-bold">
        TiendaEcom
      </Link>
      <div className="flex gap-6 items-center">
        <button onClick={toggleCartDrawer} className="relative hover:text-gray-300">
          <HiOutlineShoppingCart className="h-6 w-6 text-white" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
