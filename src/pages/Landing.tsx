import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="text-center py-20">
    <h1 className="text-4xl font-bold mb-6">Bienvenido a TiendaEcom</h1>
    <p className="text-lg mb-4">Tu tienda online lista para despegar</p>
    <Link to="/tienda" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
      Ver productos
    </Link>
  </div>
);

export default Landing;
