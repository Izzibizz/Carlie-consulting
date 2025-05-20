import { useState, useEffect, useRef } from "react";

export const About = () => {
  const [showMoreCarolina, setShowMoreCarolina] = useState(false);
  const [showMoreEmelie, setShowMoreEmelie] = useState(false);
  const emelieRef = useRef(null);
  const carolinaRef = useRef(null);
  const mainRef = useRef(null);
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
      if (!isLaptop) {
        setShowMoreEmelie(false);
        setShowMoreCarolina(false);
      } else if (person === "Carolina") {
        setShowMoreCarolina(false);
      } else if (person === "Emelie") {
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

  console.log(showMoreCarolina, showMoreEmelie);

  return (
    <section>
      <div
        className="w-10/12 mx-auto flex flex-col gap-20 laptop:flex-row pt-20 pb-38"
        ref={mainRef}
      >
        <div className=" flex flex-col gap-12 tablet:gap-20 laptop:max-w-1/2">
          <div className="bg-warm-white h-fit w-full gap-6 flex flex-col ">
            <h2 className="text-3xl laptop:text-4xl font-dream">
              Vilka är vi?
            </h2>
            <p className="text-justify font-body">
              Emelie & Carolina är två entreprenörer med gedigen bakgrund från
              restaurang&shy;branschen. Tillsammans erbjuder vi expertis inom
              koncept&shy;utveckling, gästresa, organisation och
              service&shy;arbete. Vi arbetar strukturerat med att skapa hållbara
              lösningar för att stärka restaurang&shy;koncept, från
              ny&shy;öppningar till vidare&shy;utveckling av befintlig
              verksamhet.
            </p>
            <p className="italic font-body">
              Vårt mål är att bidra med praktisk och strategisk kunskap för att
              hjälpa er att nå framgång i en konkurrensutsatt marknad.
            </p>
          </div>
          {/*      <img src="https://res.cloudinary.com/dwjbiceg4/image/upload/v1747647679/fika-illustration-carlie-consulting_vmobpx.svg" alt="fika illustration" className="w-50"/> */}
          {/* Carolinas section */}
          <div
            className={`flex flex-col tablet:max-w-[500px] laptop:max-w-full desktop:flex-row gap-4 bg-warm-white border border-3 relative h-fit w-fit  flex-none`}
            ref={carolinaRef}
          >
            <img
              src="https://res.cloudinary.com/dwjbiceg4/image/upload/v1747291685/Carolina-2_jpqgsm.jpg"
              alt="Carolina"
              className={` ${
                showMoreCarolina
                  ? "w-10/12 mx-auto laptop:mr-auto laptop:ml-0 mt-8 laptop:mt-0 laptop:w-1/2"
                  : "w-[200px] tablet:w-[350px] laptop:w-[400px] "
              }  h-full  object-cover aspect-[3/4]`}
            />
            <button
              onClick={() => handleShowMoreClick(!showMoreCarolina, "Carolina")}
              className={`z-20 absolute bg-light-purple font-body rounded-full h-[100px] w-[100px] ${
                showMoreCarolina
                  ? "right-[-20px] bottom-[-40px]"
                  : "bottom-[-30px] right-[-40px]"
              }  cursor-pointer`}
            >
              {showMoreCarolina ? "Stäng" : "Läs mer"}
            </button>
            {!showMoreCarolina ? (
              <h3 className=" text-2xl laptop:text-[30px] absolute bottom-1 left-2 laptop:bottom-3 laptop:left-5 font-dream text-warm-white">
                Carolina
              </h3>
            ) : (
              <div className="flex flex-col gap-4 py-10 laptop:pt-0 desktop:py-10 w-10/12 mx-auto laptop:w-full laptop:px-6 text-justify animate-fadeIn">
                <h4 className=" text-3xl font-dream laptop:self-end">
                  Carolina
                </h4>
                <p className="font-body break-words hyphens-auto leading-relaxed text-sm">
                  Carolina har gedigen erfarenhet av restaurang&shy;branschen i
                  olika roller, med särskilt fokus på ny&shy;etableringar.
                  Hennes expertis och passion gör att hon förstår både
                  utmaningarna och möjlig&shy;heterna med att bygga upp en
                  verksamhet från grunden. Med en stark bakgrund inom
                  organisation, rekrytering och admin&shy;istration ser hon hur
                  rätt team och strukturer lägger grunden för en framgångsrik
                  och hållbar verksamhet.
                </p>
              </div>
            )}
          </div>
        </div>
        {/* Emelies section */}
        <div
          className={`flex flex-col-reverse tablet:max-w-[500px] desktop:flex-row gap-4 bg-warm-white border-3 relative w-fit h-fit ml-auto transition-all transform duration-300 laptop:max-w-5/12 flex-none`}
          ref={emelieRef}
        >
          <button
            onClick={() => handleShowMoreClick(!showMoreEmelie, "Emelie")}
            className={`z-20 absolute font-body bg-light-purple rounded-full h-[100px] w-[100px] ${
              showMoreEmelie
                ? "bottom-[-70px] left-[-20px]"
                : "bottom-[-50px] left-[-50px]"
            } cursor-pointer`}
          >
            {showMoreEmelie ? "Stäng" : "Läs mer"}
          </button>
          {!showMoreEmelie ? (
            <h3 className=" text-2xl laptop:text-[30px] absolute bottom-1 right-2 laptop:bottom-3 laptop:right-5 text-warm-white font-dream">
              Emelie
            </h3>
          ) : (
            <div className="flex flex-col gap-4 py-10 laptop:pt-0 desktop:py-10 w-10/12 mx-auto laptop:w-full laptop:px-6 text-justify animate-fadeIn">
              <h4 className=" text-3xl font-dream">Emelie</h4>
              <p className="font-body break-words hyphens-auto leading-relaxed text-sm">
                Emelie kombinerar sin bakgrund inom restaurang med studier i
                arkitekt&shy;ur och erfarenhet av projekt&shy;ledning. Hennes
                unika kompetens gör att hon ser vikten av detaljer – både i
                design och genom&shy;förande, och skapar en genom&shy;tänkt och
                minnesvärd gästupplevelse.
              </p>
            </div>
          )}
          <img
            src="https://res.cloudinary.com/dwjbiceg4/image/upload/v1747291762/Emelie-2_heysq8.jpg"
            alt="Emelie"
            className={` ${
              showMoreEmelie
                ? "w-10/12 mx-auto laptop:ml-auto laptop:mr-0 mt-8 laptop:mt-0 laptop:w-1/2"
                : "w-[200px] tablet:w-[350px]  laptop:w-[400px] "
            }  h-auto  object-cover aspect-[3/4] `}
          />
        </div>
      </div>
    </section>
  );
};
