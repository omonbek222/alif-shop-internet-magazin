export default function Cart({ cartItems }) {
    return (
      <div className="bg-yellow-100 px-6 py-3">
        <h2 className="font-bold text-xl mb-2">🛍 Karzinka: {cartItems.length} ta mahsulot</h2>
        <ul className="list-disc pl-5">
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price} so'm
            </li>
          ))}
        </ul>
      </div>
    );
  }
  