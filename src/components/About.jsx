import { useState, useEffect } from "react";

export const About = () => {
  const [showMoreCarolina, setShowMoreCarolina] = useState(false);
  const [showMoreEmelie, setShowMoreEmelie] = useState(false);
  const [isLaptop, setIsLaptop] = useState(
    () => window.matchMedia("(min-width: 1025px)").matches
  );

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

  return (
    <section
      className={`${
        isLaptop
          ? "bg-[url('https://res.cloudinary.com/dbf8xygxz/image/upload/v1739972640/morph-bg3_bw8vba.svg')]"
          : "bg-[url('https://res.cloudinary.com/dbf8xygxz/image/upload/v1740046249/morph-bg-mobile_xbrvvs.svg')]"
      } border-b-4 bg-repeat-y bg-top min-h-[100vh] `}
    >
      <div className="w-10/12 laptop:w-10/12 mx-auto flex flex-col laptop:flex-row py-10 laptop:py-20">
        <div className=" flex flex-col gap-6 ">
          <div className="bg-warm-white p-6 laptop:p-10 border-3 laptop:border-6 h-fit w-full gap-6 flex flex-col max-w-[600px]">
            <h2 className="text-3xl laptop:text-4xl ">Vilka är vi?</h2>
            <p className="text-justify">
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit eos qui nesciunt nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
          {/* Carolinas section */}
          <div
            className={`flex flex-col laptop:flex-row gap-4 bg-warm-white border border-3 laptop:border-6 relative h-fit w-fit max-w-[800px] tablet:h-[300px] laptop:h-[500px]`}
          >
            <img
              src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1739978658/091c9f2741908ab28d38d3b3013aed83_vhdp2b.jpg"
              alt="Carolina"
              className={` ${
                showMoreCarolina ? "w-full laptop:w-1/2" : "h-[200px] w-[160px] laptop:w-[460px] "
              }  h-full  object-cover aspect-[3/4]`}
            />
            {!showMoreCarolina ? (
              <>
                <h3 className="font-bold text-3xl laptop:text-[50px] absolute top-1 left-2 laptop:left-4">
                  Carolina
                </h3>
                <button
                  onClick={() => setShowMoreCarolina(true)}
                  className="absolute bg-red-200 rounded-full h-[100px] w-[100px] bottom-[-30px] right-[-40px]"
                >
                  Läs mer
                </button>
              </>
            ) : (
              <div className="flex flex-col gap-4 py-10 px-8 text-justify">
                <h4 className="font-bold text-xl">Carolina</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  dolore eu fugiat nulla pariatur.{" "}
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt.{" "}
                </p>
                <button
                  onClick={() => setShowMoreCarolina(!showMoreCarolina)}
                  className="p-4 border w-fit bg-white"
                >
                  Visa mindre
                </button>
              </div>
            )}
          </div>
        </div>
        {/* Emelies section */}
        <div
          className={`flex flex-col-reverse laptop:flex-row gap-4 bg-warm-white border-3 laptop:border-6 relative w-fit h-fit max-w-[800px] tablet:h-[300px] laptop:h-[500px] ml-auto`}
        >
          {!showMoreEmelie ? (
            <>
              <button
                onClick={() => setShowMoreEmelie(true)}
                className="absolute bg-red-200 rounded-full h-[100px] w-[100px] bottom-[-50px] left-[-50px]"
              >
                Läs mer
              </button>
              <h3 className="font-bold text-3xl laptop:text-[50px] absolute top-1 right-2 laptop:right-4">
                Emelie
              </h3>
            </>
          ) : (
            <div className="flex flex-col gap-4 py-10 px-8 text-justify">
              <h4 className="font-bold text-xl">Emelie</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                nulla pariatur.{" "}
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.{" "}
              </p>
              <button
                onClick={() => setShowMoreEmelie(!showMoreEmelie)}
                className="p-4 border w-fit bg-white self-end"
              >
                Visa mindre
              </button>
            </div>
          )}
          <img
            src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1739978653/f5867cccdad8da28cc791b9b480306f1_yjtb3l.jpg"
            alt="Emelie"
            className={` ${
              showMoreEmelie ? "w-full laptop:w-1/2" : "h-[200px] w-[160px] laptop:w-[460px] "
            }  h-auto tablet:w-[250px] object-cover aspect-[3/4]`}
          />
        </div>
      </div>
    </section>
  );
};
