import { useEffect, useState } from "react";

const images = [
  "https://s3.fortifai.uz/shop/catalog/carousel/215/1716885789-main_1600x491_uz.png",
  "https://s3.fortifai.uz/shop/catalog/carousel/282/1743045942-realme-web-banner_1600x491_uz.png",
  "https://s3.fortifai.uz/shop/catalog/carousel/294/1744973342-Novinka_infinix_uz_1600%E2%95%A4%D0%95491.png",
  "https://s3.fortifai.uz/shop/catalog/carousel/250/1730379481-bosch_web_1600x491_UZ.jpg",
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length); 
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto mt-6 rounded-xl overflow-hidden shadow-xl">
      <img
        src={images[current]} 
        alt={`Slide ${current + 1}`}
        className="w-full h-[400px] object-cover transition-all duration-700"
      />
    </div>
  );
}
