import { useCartStore } from "../stores/cartStore";

const sampleProducts = [
  {
    id: 1,
    name: "Auriculares Bluetooth",
    price: 12000,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Mouse Inalámbrico",
    price: 8500,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Teclado Mecánico",
    price: 21500,
    image: "https://via.placeholder.com/150"
  }
];

const ProductList = () => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {sampleProducts.map((product) => (
        <div key={product.id} className="border rounded-xl p-4 shadow-sm bg-white flex flex-col items-center">
          <img src={product.image} alt={product.name} className="w-32 h-32 object-cover mb-3" />
          <h3 className="text-lg font-medium mb-1">{product.name}</h3>
          <p className="text-gray-600 mb-2">${product.price.toLocaleString()}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
