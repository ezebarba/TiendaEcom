// src/pages/Home.tsx
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Productos destacados</h1>
      <ProductList />
    </div>
  );
};

export default Home;
