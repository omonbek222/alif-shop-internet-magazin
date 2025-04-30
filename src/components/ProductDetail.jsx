import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);  /

  useEffect(() => {

    axios.get(`http://localhost:5000/products/${id}`)
      .then((res) => {
        setProduct(res.data);  
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
      });
  }, [id]);  


  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
      <img src={product.image} alt={product.title} className="w-full h-72 object-cover rounded-lg" />
      <h2 className="text-2xl font-semibold mt-4">{product.title}</h2>
      <p className="text-lg text-gray-600">{product.price}</p>
      <p className="text-lg text-gray-600">{product.monthly}</p>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Tavsif:</h3>
        <p className="text-sm text-gray-700">{product.description || 'Tavsif mavjud emas'}</p>
      </div>
    </div>
  );
}
