import { useState } from 'react';
import { motion } from 'framer-motion';
import image1 from "../assets/gallery/001.jpeg";
import image2 from "../assets/gallery/002.jpeg";
import image3 from "../assets/gallery/003.jpeg";
import image4 from "../assets/gallery/004.jpeg";
import image5 from "../assets/gallery/005.jpeg";

const images = [image1, image2, image3, image4, image5];

export default function Gallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="flex flex-col lg:flex-row-reverse">
      <h3 className="text-center text-[2.5rem] font-thin bg-gradient-to-r from-slate-700 to-zinc-900 text-slate-200 p-5 lg:hidden">
        Galerie
      </h3>

      <div className="lg:bg-gradient-to-r from-slate-700 to-zinc-900 text-slate-200 lg:w-[35rem] lg:h-[45rem] lg:p-5 lg:flex lg:items-center lg:justify-end lg:text-[4.5rem] lg:font-thin">
        <h3 className="hidden lg:block mr-auto">Galerie</h3>
      </div>

      <div className="flex-1 p-5 lg:pr-10 flex flex-col items-center">
        <div className="relative w-full h-[300px] sm:w-[1000px] sm:h-[600px] mb-4">
          <motion.img
            src={images[currentImageIndex]}
            alt="Gallery"
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={currentImageIndex}
          />
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-slate-800 text-slate-200 px-4 py-2"
          >
            ◀
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-slate-800 text-slate-200 px-4 py-2"
          >
            ▶
          </button>
        </div>

        <div className="hidden sm:flex space-x-4">
          {images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              className={`w-24 h-16 object-cover cursor-pointer rounded-lg ${
                currentImageIndex === index
                  ? 'border-4 border-slate-800'
                  : 'border border-gray-300'
              }`}
              onClick={() => handleThumbnailClick(index)}
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
