export default function ProductCard({ product, onAddToCart }) {
    return (
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 w-full max-w-sm mx-auto">
        <img
          src={product.image}
          alt={product.title}
          className="h-52 object-contain mb-4 mx-auto"
        />
        <h2 className="text-xl font-semibold text-center mb-2">{product.title}</h2>
        <p className="text-gray-700 text-center mb-4">{product.price} so'm</p>
        <button
          onClick={() => onAddToCart(product)}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full w-full"
        >
          🛒 Savatchaga qo‘shish
        </button>
      </div>
    );
  }
  