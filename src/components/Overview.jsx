import { useState, useEffect } from "react";
import overviewData from "../data/overviewData.json";

export const Overview = () => {
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia("(min-width: 1025px)").matches
  );

  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    };
    updateScreenSize();

    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return (
    <section
      className={`${
        isMobile
          ? "bg-[url('https://res.cloudinary.com/dwjbiceg4/image/upload/v1747289218/squares.slim_cgov15.svg')]"
          : "bg-[url('https://res.cloudinary.com/dwjbiceg4/image/upload/v1747290444/morph-bg3-slim_ctfkjr.svg')]"
      } border-b-3 bg-repeat-y min-w-screen bg-top laptop:bg-cover min-h-[100vh] font-dream py-10 items-center flex`}
    >
      <div className="w-10/12 laptop:w-8/12 mx-auto bg-warm-white border-2 laptop:border-3 p-8 laptop:pl-12 h-fit">
        <h3 className="font-body font-semibold text-2xl pb-6">Våra Tjänster</h3>
        <div className="grid laptop:grid-cols-2 gap-10 font-body">
          {overviewData.map((info, index) => (
            <div key={index} className="relative">
              <div
                className={`${
                  index === 0 && "opacity-0"
                } bg-light-purple rounded-full w-[40px] h-[40px] left-[-20px] top-[-15px] absolute text-center`}
              />
              <h3 className="font-semibold z-20 relative">{info.title}</h3>
              {info.text.length > 1 ? (
                <ul className="list-disc list-outside space-y-2 pl-5">
                  {info.text.map((listObj, subIndex) => (
                    <li key={subIndex} className="break-words ">
                      {listObj}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-justify laptop:w-10/12 break-words">
                  {info.text[0]}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
