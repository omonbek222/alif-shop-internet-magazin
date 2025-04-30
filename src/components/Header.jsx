import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa"; 

export default function Header() {
  const [cartItems, setCartItems] = useState(0); 
  const [cartVisible, setCartVisible] = useState(false); 

  const addToCart = () => {
    setCartItems(cartItems + 1); 
  };

  const toggleCart = () => {
    setCartVisible(!cartVisible); 
  };

  return (
    <header className="bg-yellow-500 p-4">
      <div className="flex items-center justify-between">
         
         <div className="flex items-center">
          <h1 className="text-2xl font-bold text-orange-500">Alifshop</h1>
        </div>

       
        <nav className="space-x-6 text-white">
          <a href="/" className="hover:text-gray-300">Bosh sahifa</a>
          <a href="/about" className="hover:text-gray-300">Haqqimizda</a>
          <a href="/services" className="hover:text-gray-300">Xizmatlar</a>
          <a href="/contact" className="hover:text-gray-300">Aloqa</a>
        </nav>

       
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Izlash..."
            className="px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button className="bg-yellow-400 px-4 py-2 rounded-r-md text-white hover:bg-yellow-300">
            Izlash
          </button>
        </div>

       
        <div className="relative flex items-center">
          <FaShoppingCart
            className="text-white text-2xl cursor-pointer"
            onClick={toggleCart}
          />
          {cartItems > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">
              {cartItems}
            </span>
          )}
        </div>
      </div>

     
      {cartVisible && (
        <div className="absolute top-16 right-4 bg-white shadow-lg p-4 rounded-lg w-60">
          <h3 className="font-bold text-xl mb-2">Savatcha</h3>
          <p>Mahsulotlar soni: {cartItems}</p>
          <button
            className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded"
            onClick={() => setCartItems(0)} 
          >
            Tozalash
          </button>
        </div>
      )}
    </header>
  );
}
