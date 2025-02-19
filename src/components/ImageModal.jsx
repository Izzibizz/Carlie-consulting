import { useRef, useEffect } from 'react';

export const ImageModal = ({ src, onClose, alt, year, photographer, title }) => {
    const modalRef = useRef(null);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          onClose(); // Close the modal if clicked outside
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [onClose]);
  
    return (
      <div className="fixed inset-0 bg-stone-900/90 flex items-center justify-center z-50 cursor-pointer text-warm-white font-body font-extralight">
        <div ref={modalRef} className="flex flex-col gap-4 max-w-[90vw] max-h-[80vh]">
          <img
            src={src}
            alt={alt}
            className="object-contain cursor-pointer rounded-xl max-w-[90vw] max-h-[70vh]"
            onClick={onClose}
          />
          <p><span className="font-free text-xl flex gap-2">{title}</span> {year} {photographer? ` (fotograf: ${photographer})`: ""}  </p>
        </div>
      </div>
    )
}