import { useState, useEffect } from "react";

export const About = () => {

  const [ showMoreCarolina, setShowMoreCarolina ] = useState(false)
  const [ showMoreEmelie, setShowMoreEmelie ] = useState(false)
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
    <section className={`${isLaptop ? "bg-[url('https://res.cloudinary.com/dbf8xygxz/image/upload/v1739972640/morph-bg3_bw8vba.svg')]" : "bg-[url('https://res.cloudinary.com/dbf8xygxz/image/upload/v1740046249/morph-bg-mobile_xbrvvs.svg')]" } border-b-4 bg-repeat-y bg-top min-h-[100vh] `}>
      <div className="w-11/12  mx-auto flex flex-col laptop:flex-row justify-between relative z-20 gap-6 py-10">
        <div className={`flex flex-col laptop:flex-row gap-4 bg-warm-white border border-6 relative ${showMoreCarolina? "laptop:w-1/2  laptop:max-w-1/2" : "w-fit"}`}>
          <img
            src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1739978658/091c9f2741908ab28d38d3b3013aed83_vhdp2b.jpg"
            alt="Carolina"
            className="h-[200px] w-[160px] tablet:h-[300px] tablet:w-[250px] laptop:h-[500px] laptop:w-[360px] object-cover aspect-[3/4]"
          />
           {!showMoreCarolina? (
          <button onClick={() => setShowMoreCarolina(true)} className="absolute bg-red-200 rounded-full h-[100px] w-[100px] bottom-[-30px] right-[-40px]">Read more</button>
        ) : (
            <div className="flex flex-col gap-4 py-10 px-8 text-justify">
            <h4>Carolina</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.{" "}
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.{" "}
            </p>
            <button onClick={()=> setShowMoreCarolina(!showMoreCarolina)} >Show Less</button>
          </div>
          )}
        </div>
        <div className={`flex flex-col-reverse laptop:flex-row gap-4 bg-warm-white border border-6 relative ${showMoreEmelie? "laptop:w-1/2  laptop:max-w-1/2" : "w-fit"}`}>
        {!showMoreEmelie ? (
          <button onClick={() => setShowMoreEmelie(true)} className="absolute bg-red-200 rounded-full h-[100px] w-[100px] bottom-[-30px] left-[-40px]">Read more</button>
        ) : (
        <div className="flex flex-col gap-4 py-10 px-8 text-justify">
            <h4>Emelie</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.{" "}
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.{" "}
            </p>
            <button onClick={()=> setShowMoreEmelie(!showMoreEmelie)} >Show Less</button>
          </div>
        )}
          <img
            src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1739978653/f5867cccdad8da28cc791b9b480306f1_yjtb3l.jpg"
            alt="Emelie"
            className=" h-[200px] w-[160px]  tablet:h-[300px] tablet:w-[250px] laptop:h-[500px] laptop:w-[360px] object-cover aspect-[3/4]"
          />
        </div>
      </div>
    </section>
  );
};
