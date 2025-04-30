import { useState } from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import ProductList from "./components/ProductList";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  return (
    <div>
      <Header cartCount={cartItems.length} />
      <Slider />
      <main className="p-6">
        <ProductList onAddToCart={handleAddToCart} />
      </main>
    </div>
  );
}

export default App;
