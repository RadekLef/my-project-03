import { useState } from 'react';
import { motion } from "framer-motion";
import { pedigreeDog } from '../lib/data';

export default function Breeders() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pedigreeDog.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pedigreeDog.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <h3 className="text-center text-[2.5rem] font-thin bg-gradient-to-r from-zinc-900 to-slate-700 text-slate-200 p-5 lg:hidden">
        Chovatelství
      </h3>

      <div className="lg:bg-gradient-to-r from-zinc-900 to-slate-700 text-slate-200 lg:w-[35rem] lg:h-[55rem] lg:p-5 lg:flex lg:items-center lg:justify-end lg:text-[4.5rem] lg:font-thin">
        <h3 className="hidden lg:block ml-auto">Chovatelství</h3>
      </div>

      <div className="flex-1 p-5 lg:p-5">
        <div className="bg-slate-100 p-2 rounded-lg shadow-md">
          <h3 className="text-[2rem] text-center mb-5">
            Chovatelská stanice: {pedigreeDog[currentIndex].station}
          </h3>
          <p className="text-2xl text-center mb-8">
            Chovatel: {pedigreeDog[currentIndex].breeder}
          </p>

          <div className="flex flex-col lg:flex-row justify-between items-start mb-5 space-y-4 lg:space-y-0 lg:space-x-5">
            <div className="flex flex-col items-center">
              <img
                src={pedigreeDog[currentIndex].imgOfDog}
                alt={pedigreeDog[currentIndex].father}
                className="w-full lg:w-[450px] h-[450px] object-cover mb-2"
              />
              <p className="text-lg font-medium">{pedigreeDog[currentIndex].father}</p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src={pedigreeDog[currentIndex].imgOfFog}
                alt={pedigreeDog[currentIndex].mother}
                className="w-full lg:w-[450px] h-[450px] object-cover mb-2"
              />
              <p className="text-lg font-medium">{pedigreeDog[currentIndex].mother}</p>
            </div>
          </div>

          <div className="flex justify-between mt-5 mb-5">
            <motion.button
              onClick={handlePrevious}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-slate-800 text-slate-200 px-4 py-2"
            >
              Předchozí
            </motion.button>
            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-slate-800 text-slate-200 px-4 py-2"
            >
              Další
            </motion.button>
          </div>

          <p className="text-lg">Datum porodu: {pedigreeDog[currentIndex].dateOfBirth}</p>
          <p className="text-lg">Počet psů: {pedigreeDog[currentIndex].numOfDogs}</p>
          <p className="text-lg">Počet fen: {pedigreeDog[currentIndex].numOFFogs}</p>
          <p className="text-lg">Komentář: {pedigreeDog[currentIndex].comment || ''}</p>
        </div>
      </div>
    </div>
  );
}
