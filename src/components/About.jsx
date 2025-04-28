import { useState, useEffect, useRef } from "react";

export const About = () => {
  const [showMoreCarolina, setShowMoreCarolina] = useState(false);
  const [showMoreEmelie, setShowMoreEmelie] = useState(false);
  const emelieRef = useRef(null)
  const carolinaRef = useRef(null)
  const mainRef = useRef(null)
  const [isLaptop, setIsLaptop] = useState(
    () => window.matchMedia("(min-width: 1025px)").matches
  ); 

  const handleShowMoreClick = (state, person) => {
    if (state) {
      if (person === "Carolina") { 
        setShowMoreCarolina(true);
        if (!isLaptop) {
          setTimeout(() => {
            carolinaRef.current?.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      } else if (person === "Emelie") { 
        setShowMoreEmelie(true);
        if (!isLaptop) {
          setTimeout(() => {
            emelieRef.current?.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    } else {
      if (!isLaptop ){
        setShowMoreEmelie(false);
        setShowMoreCarolina(false);
      } else if (person === "Carolina") {
        setShowMoreCarolina(false);
      } else if (person === "Emelie"){
        setShowMoreEmelie(false);
      }
      if (!isLaptop) {
        setTimeout(() => {
          mainRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100); 
      }
    }
  };



  useEffect(() => {
    const updateScreenSize = () => {
      setIsLaptop(window.matchMedia("(min-width: 1025px)").matches);
    };
    updateScreenSize();

    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

console.log(showMoreCarolina, showMoreEmelie)

  return (
    <section>
      <div className="w-10/12 mx-auto flex flex-col gap-20 laptop:gap-0 laptop:flex-row py-20" ref={mainRef}>
        <div className=" flex flex-col gap-6 ">
          <div className="bg-warm-white p-6 tablet:p-10 border-3 laptop:border-4 h-fit w-full gap-6 flex flex-col max-w-[600px]">
            <h2 className="text-3xl laptop:text-4xl font-dream">Vilka är vi?</h2>
            <p className="text-justify font-body">
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit eos qui nesciunt nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
          {/* Carolinas section */}
          <div
            className={`flex flex-col laptop:flex-row gap-4 bg-warm-white border border-3 laptop:border-4 relative h-fit w-fit max-w-[700px] laptop:h-[500px]`}
          ref={carolinaRef}>
            <img
              src="https://res.cloudinary.com/dwjbiceg4/image/upload/v1745750264/091c9f2741908ab28d38d3b3013aed83_blt4uq.jpg"
              alt="Carolina"
              className={` ${
                showMoreCarolina
                  ? "w-11/12 mx-auto mt-4 laptop:w-1/3"
                  : "w-[200px] laptop:w-[460px] "
              }  h-full  object-cover aspect-[3/4]`}
            />
                            <button
                  onClick={() => handleShowMoreClick(!showMoreCarolina, "Carolina")}
                  className={`z-20 absolute bg-light-purple rounded-full h-[100px] w-[100px] ${showMoreCarolina? "right-[-20px] bottom-[-40px]" : "bottom-[-30px] right-[-40px]"}  cursor-pointer`}
                >
                  {showMoreCarolina ? "Visa mindre" : "Läs mer"}
                </button>
            {!showMoreCarolina ? (
             <h3 className=" text-2xl laptop:text-[30px] absolute top-1 left-2 laptop:top-3 laptop:left-5 font-dream">
                  Carolina
                </h3>
            ) : (
              <div className="flex flex-col gap-4 py-10 px-8 text-justify animate-fadeIn">
                <h4 className=" text-3xl font-dream">Carolina</h4>
                <p className="font-body">
                  Carolina har gedigen erfarenhet av restaurangg&shy;branschen i olika
                  roller, med särskilt fokus på nyg&shy;etableringar. Hennes expertis
                  och passion gör att hon förstår både utmaningarna och
                  möjligg&shy;heterna med att bygga upp en verksamhet från grunden.
                  Med en stark bakgrund inom organisation, rekrytering och
                  adming&shy;istration ser hon hur rätt team och strukturer lägger
                  grunden för en framgångsrik och hållbar verksamhet.
                </p>
              </div>
            )}
          </div>
        </div>
        {/* Emelies section */}
        <div
          className={`flex flex-col-reverse laptop:flex-row gap-4 bg-warm-white border-3 laptop:border-4 relative w-fit h-fit max-w-[700px] laptop:h-[500px] ml-auto transition-all transform duration-300`}
        ref={emelieRef}>
                        <button
                onClick={() => handleShowMoreClick(!showMoreEmelie, "Emelie")}
                className={`z-20 absolute bg-light-purple rounded-full h-[100px] w-[100px] ${showMoreEmelie? "bottom-[-70px] left-[-20px]" : "bottom-[-50px] left-[-50px]"} cursor-pointer`}
              >
                {showMoreEmelie ? "Visa mindre" : "Läs mer"}
              </button>
          {!showMoreEmelie ? (

              <h3 className=" text-2xl laptop:text-[30px] absolute top-1 right-2 laptop:top-3 laptop:right-5 font-dream">
                Emelie
              </h3>
          ) : (
            <div className="flex flex-col gap-4 py-10 px-8 text-justify animate-fadeIn">
              <h4 className=" text-3xl font-dream">Emelie</h4>
              <p className="font-body">
                Emelie kombinerar sin bakgrund inom restaurang med studier i
                arkg&shy;itektur och erfarenhet av projektg&shy;ledning. Hennes unika
                kompetens gör att hon ser vikten av detaljer – både i design och
                genomg&shy;örande – för att skapa en genomtänkt och minnesvärd
                gästupplevelse.
              </p>
            </div>
          )}
          <img
            src="https://res.cloudinary.com/dwjbiceg4/image/upload/v1745750264/f5867cccdad8da28cc791b9b480306f1_counlw.jpg"
            alt="Emelie"
            className={` ${
              showMoreEmelie
                ? "w-11/12 mx-auto pt-6 laptop:w-1/3"
                : "w-[200px] laptop:w-[460px] "
            }  h-auto  object-cover aspect-[3/4] `}
          />
        </div>
      </div>
    </section>
  );
};
