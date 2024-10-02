import { useState } from 'react';
import { motion } from 'framer-motion';
import { links } from "../lib/data";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
  };

  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      if (window.innerWidth >= 1024) { // Smooth scroll for large screens (lg and above)
        section.scrollIntoView({
          behavior: 'smooth',
        });
      } else {
        window.location.hash = `#${id}`; // Regular scroll for small screens
      }
    }
    setIsMenuOpen(false);
  }

  function scrollToTop() {
    if (window.innerWidth >= 1024) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: 0,
      });
    }
    setIsMenuOpen(false);
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-slate-50 to-slate-100">
      <header className="flex items-center justify-between p-5">
        <h1
          className="tracking-[0.8rem] text-[3rem] font-semibold cursor-pointer pl-[8rem]"
          onClick={scrollToTop}
        >
          KPCHP
        </h1>

        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <motion.div
              className="w-8 h-[2px] bg-black mb-1"
              animate={isMenuOpen ? { rotate: 45, y: 6, transition: { duration: 0.3 } } : { rotate: 0, y: 0, transition: { duration: 0.3 } }}
            />
            <motion.div
              className="w-8 h-[2px] bg-black mb-1"
              animate={isMenuOpen ? { opacity: 0, transition: { duration: 0.3 } } : { opacity: 1, transition: { duration: 0.3 } }}
            />
            <motion.div
              className="w-8 h-[2px] bg-black"
              animate={isMenuOpen ? { rotate: -45, y: -6, transition: { duration: 0.3 } } : { rotate: 0, y: 0, transition: { duration: 0.3 } }}
            />
          </button>
        </div>

        <nav className="hidden lg:flex">
          <ul className="flex space-x-16 uppercase text-[1.1rem] tracking-wide pr-[10rem]">
            {links.map(function(link) {
              return (
                <motion.li
                  key={link.hash}
                  className="relative cursor-pointer before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-black before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100"
                  onClick={function() { scrollToSection(link.hash); }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.name}
                </motion.li>
              );
            })}
          </ul>
        </nav>
      </header>

      <motion.nav
        className="lg:hidden overflow-hidden"
        variants={menuVariants}
        initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"}
      >
        <ul className="flex flex-col items-center space-y-4 uppercase text-[1.1rem] tracking-wide py-4">
          {links.map(function(link) {
            return (
              <motion.li
                key={link.hash}
                className="relative cursor-pointer"
                onClick={function() { scrollToSection(link.hash); }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                {link.name}
              </motion.li>
            );
          })}
        </ul>
      </motion.nav>
    </div>
  );
}
