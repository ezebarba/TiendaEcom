import ProductCard from '../components/ProductCard';

const products = [
  { name: 'Producto 1', price: 1000, image: '/placeholder1.jpg' },
  { name: 'Producto 2', price: 1500, image: '/placeholder2.jpg' },
  { name: 'Producto 3', price: 900, image: '/placeholder3.jpg' },
];

const Shop = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8">
    {products.map((p, i) => (
      <ProductCard key={i} {...p} />
    ))}
  </div>
);

export default Shop;
