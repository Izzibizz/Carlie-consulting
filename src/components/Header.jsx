import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { useWebsiteStore } from "../stores/useWebsiteStore";
import textlogovert from "/carlie-consulting-text-heading.svg"
import textlogo from "/carlie-consulting-text-heading-1.svg"

export const Header = () => {
  const dropdownRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1025)
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuAnimated, setMenuAnimated] = useState(false);
  const {  setScrollToContact,  setScrollToAbout, setScrollToOverview } = useWebsiteStore()

  const directions = [
    { name: "Hem", onClick: () => scrollToTop() },
    { name: "Tjänster", onClick: () => { setScrollToOverview(true); setIsOpen(false); } },
    { name: "Om oss", onClick: () => { setScrollToAbout(true) ; setIsOpen(false); } },
/*     { name: "Boka en konsultation", onClick: () => { handleSendEmail() ; setIsOpen(false); } }, */
    { name: "Kontakt", onClick: () => { setScrollToContact(true) ; setIsOpen(false); } },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false)
  };


/*   const handleSendEmail = () => {
    window.location.href = "mailto:hello@example.com?subject=Meeting%20Request&body=Hi%20there!"
  }; */

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
        setMenuAnimated(false);
      } else {
        setIsScrolled(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.matchMedia("(max-width: 1024px)").matches);
    };
    updateScreenSize();

    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  
  useEffect(() => {
    if (!isScrolled) {
      const waveInterval = setInterval(() => {
        setMenuAnimated(true);
        setTimeout(() => setMenuAnimated(false), 5000); 
      }, 5000);
  
      return () => clearInterval(waveInterval);
    }
  }, [isScrolled]);

  console.log(isScrolled, menuAnimated)
  return (
    <header
      className={`fixed h-fit w-full laptop:w-fit z-40 right-0 p-3 py-6 transition-colors duration-1000 laptop:px-6 flex gap-10 ${
        isMobile && isScrolled
          ? "bg-warm-white/98 border-t-2 bottom-0 "
          : isMobile ? "hidden"
          : isScrolled
            ? "bg-light-purple/100"
            : "bg-light-purple/0"
      } flex flex-row-reverse laptop:flex-col items-center justify-between gap-4 laptop:rounded-bl-2xl`}
    >
      <div
        className={`group cursor-pointer animate-fadeIn flex gap-1 p-2 py-4`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`w-2 h-2 transition-all group-hover:animate-bounce ${
            menuAnimated && "animate-bounce"
          } bg-stone-800 rounded-full `}
        ></span>
        <span
          className={`w-2 h-2 transition-all group-hover:animate-bounce-delay1 ${
            menuAnimated && "animate-bounce-delay1"
          } bg-stone-800 rounded-full `}
        ></span>
        <span
          className={`w-2 h-2 transition-all group-hover:animate-bounce-delay2 ${
            menuAnimated && "animate-bounce-delay2"
          } bg-stone-800 rounded-full `}
        ></span>
      </div>
      <img src={isMobile ? textlogo : textlogovert} className={` w-[200px] laptop:w-[40px] cursor-pointer transition-opacity duration-1000 animate-fadeIn ${
     isScrolled ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => scrollToTop()}/>
   {/*    <img
        src="https://res.cloudinary.com/dwjbiceg4/image/upload/v1745326032/c-2.small_h01hqi.svg"
        alt="logo carlie consulting"
        className={`w-8 h-8  cursor-pointer transition-opacity duration-1000 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => scrollToTop()}
      /> */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "circle(20% at 200% 100%)" }}
            animate={{ clipPath: "circle(200% at 50% 50%)" }}
            exit={{ clipPath: "circle(20% at 200% 100%)" }}
            transition={{ duration: 3, ease: [0, 0.1, 0.25, 1.2] }}
            className="fixed top-0 right-0 h-[100vh] w-screen overflow-hidden text-4xl bg-light-purple flex flex-col-reverse laptop:flex-col gap-8 items-end p-6 pb-[env(safe-area-inset-bottom)] laptop:pb-0 laptop:pr-3 laptop:pt-8"
            ref={dropdownRef}
          >
            <RxCross1
              className={` text-stone-800 w-10 h-10 cursor-pointer laptop:mr-8`}
              onClick={() => setIsOpen(false)}
            />
            <ul className="flex flex-col items-end gap-8 laptop:gap-12 font-dream laptop:text-[60px] laptop:pr-10">
              {directions.map((link) => (
                <li
                  key={link.name}
                  onClick={link.onClick}
                  className="hover:scale-110 hover:text-dark-brown transform transition-transform duration-300 cursor-pointer"
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
