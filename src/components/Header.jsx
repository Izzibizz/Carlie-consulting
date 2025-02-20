import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { RxCross1 } from "react-icons/rx";

export const Header = () => {

  const dropdownRef = useRef();
  const [isOpen, setIsOpen] = useState(false)

  const directions = [
    { name: "Home", id: "home" },
    { name: "Book a meeting", id: "meetingRef" },
    { name: "Contact", id: "contactRef" },

  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed h-34 w-16 z-40 right-0 top-[65vh] p-3 py-6 bg-rose-200 flex flex-col items-center justify-between gap-4 rounded-l-2xl">
      <div className={`group cursor-pointer animate-fadeIn flex gap-1 p-2 py-4`} onClick={() => setIsOpen(!isOpen)}>
        <span className={`w-2 h-2 transition-all group-hover:animate-bounce bg-stone-800 rounded-full `}></span>
        <span className={`w-2 h-2 transition-all group-hover:animate-bounce-delay1 bg-stone-800 rounded-full `}></span>
        <span className={`w-2 h-2 transition-all group-hover:animate-bounce-delay2 bg-stone-800 rounded-full `}></span>

      </div>
      <img
        src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1739972929/c-2.small_ugjpdi.svg"
        alt="logo carlie consulting"
        className="w-8 h-8  cursor-pointer"
        onClick={() => scrollToTop()}
      />
       <AnimatePresence>
      {isOpen && (
        <motion.div
        initial={{ clipPath: "circle(20% at 200% 100%)" }} 
        animate={{ clipPath: "circle(200% at 50% 50%)" }} 
        exit={{ clipPath: "circle(20% at 200% 100%)" }} 
        transition={{ duration: 3, ease: [0, 0.1, 0.25, 1.2] }}
        className="fixed top-0 right-0 h-screen w-screen overflow-hidden font-dream text-4xl bg-rose-200  flex justify-end px-8 "
          ref={dropdownRef}
        >
          <ul className="flex flex-col laptop:flex-row items-end gap-8 font-light absolute bottom-[20%] laptop:bottom-10 animate-fadeIn">
            {directions.map((link) => (
                <li
                key={link.id}
                to={link.id}
                onClick={()=> setIsOpen(!isOpen)}
                className="hover:scale-110 hover:text-dark-brown transform transition-transform duration-300 cursor-pointer"
              >
                {link.name}
              </li>
            ))}
          </ul>
          <RxCross1 className={`absolute z-20 text-stone-800 w-10 h-10 top-8 right-8 animate-longFadeIn cursor-pointer`} onClick={() => setIsOpen(false)}/>
        </motion.div>
      )}
      </AnimatePresence>
    </header>
  );
};
