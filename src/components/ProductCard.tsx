type Product = {
    name: string;
    price: number;
    image: string;
  };
  
  const ProductCard = ({ name, price, image }: Product) => (
    <div className="border p-4 rounded shadow-sm">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{name}</h3>
      <p className="text-green-600 font-bold">${price}</p>
    </div>
  );
  
  export default ProductCard;
  