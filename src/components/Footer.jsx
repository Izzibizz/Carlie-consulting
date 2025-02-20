import { MdOutlineArrowOutward } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 flex w-screen justify-between h-fit p-2 laptop:px-6 font-body text-warm-red">
    <a
             href="http://izabellind.com"
             className="relative flex gap-2 items-center text-[9px] after:content-[''] after:block after:w-0 after:h-[1px] after:bg-warm-white after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
           > <MdOutlineArrowOutward />
             Design & Frontend development 2025 | Izabel Lind
           </a>
   <p className="text-[10px] font-body hidden laptop:block">© Carlie Consulting 2025 | All Rights Reserved</p>
   <p className="text-[10px] font-body laptop:hidden">© Carlie Consulting 2025</p>
   </footer>
  )
}