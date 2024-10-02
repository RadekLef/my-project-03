import { useState } from 'react';
import { standardOfDog } from '../lib/data';
import { motion } from 'framer-motion';

export default function Dog() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <div className="flex-1">
        <div className="bg-gradient-to-r from-zinc-900 to-slate-700 text-slate-200 w-full h-[20rem] p-5 flex items-center justify-center lg:hidden text-[2.5rem] font-thin">
          <h3 className="text-center">Chodský pes</h3>
        </div>
        
        <div className="flex flex-col lg:flex-row lg:space-x-4 mb-5 space-y-2 lg:space-y-0 mt-4 lg:mt-2 lg:mx-2">
          {standardOfDog.map((item, index) => (
            <motion.button
              key={item.headline}
              onClick={() => setSelectedIndex(index)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`px-4 py-2 ${
                selectedIndex === index
                  ? "bg-slate-800 text-slate-200"
                  : "bg-slate-500 text-white"
              }`}
            >
              {item.headline}
            </motion.button>
          ))}
        </div>

        <div className="bg-slate-100 p-5 rounded-lg tracking-widest">
          <h3 className="text-[1.5rem] lg:text-[2rem] font-thin">
            {selectedIndex !== null
              ? standardOfDog[selectedIndex].headline
              : "Prosím vyberte téma"}
          </h3>
          <p className="mt-4 text-[1rem] lg:text-[1.3rem] font-thin">
            {selectedIndex !== null
              ? standardOfDog[selectedIndex].text
              : "Vyberte jedno z výše uvedených témat, abyste zobrazili podrobnosti."}
          </p>
        </div>
      </div>
      
      <div className="hidden lg:flex bg-gradient-to-r from-slate-700 to-zinc-900 text-slate-200 w-[35rem] h-[35rem] p-5 items-center justify-end text-[4.5rem] font-thin">
        <h3 className="mr-auto">Chodský pes</h3>
      </div>
    </div>
  );
}
