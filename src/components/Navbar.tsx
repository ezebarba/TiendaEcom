import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white shadow-md p-4 flex justify-between">
    <Link to="/" className="text-xl font-bold">TiendaEcom</Link>
    <div className="flex gap-4">
      <Link to="/tienda">Tienda</Link>
      <Link to="/contacto">Contacto</Link>
    </div>
  </nav>
);

export default Navbar;
