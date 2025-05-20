import { useState, useEffect } from "react";
import { SlArrowDown } from "react-icons/sl";

export const Hero = ({ handleScroll }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="h-[80vh] laptop:h-[95vh] pt-10 px-4 laptop:px-10 flex flex-col justify-between">
      <img
        src="https://res.cloudinary.com/dwjbiceg4/image/upload/v1745326038/c-2_d0p3kn.svg"
        alt="Carlie Consulting logo"
        className="w-20 h-20 laptop:w-32 laptop:h-32"
      />
      <div className="w-11/12 laptop:w-9/12 self-center gap-4 flex flex-col z-20">
        {" "}
        <h1 className="font-dream text-3xl tablet:text-[40px] laptop:text-[60px] text-end flex flex-col">
          Helhetslösningar <br className="laptop:hidden" /> för din
          <span className="tablet:text-[50px] laptop:text-[80px]">
            {" "}
            restaurang&shy;verksamhet
          </span>
        </h1>
        <h2 className="font-body font-light text-xl laptop:text-3xl text-end">
          Från idé till lönsam drift
        </h2>
        <button
          className="bg-light-purple rounded-4xl py-2 px-4 w-fit font-body self-end flex gap-3 items-center cursor-pointer hover:scale-105 text-sm tablet:text-base"
          onClick={() => handleScroll()}
        >
          Läs mer <SlArrowDown />
        </button>
      </div>
      <img
        src={` ${
          isMobile
            ? "https://res.cloudinary.com/dwjbiceg4/image/upload/v1747291072/Carlie-Illustration-mat-halv-low_i2azcj.svg"
            : "https://res.cloudinary.com/dwjbiceg4/image/upload/v1747291075/Carlie-Illustration-mat-low_cpzjod.svg"
        }`}
        alt="food illustration"
        className="w-11/12 mx-auto"
      />
    </section>
  );
};
