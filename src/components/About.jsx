

export const About = () => {
  return (
    <section className="laptop:h-[100vh] ">
      <img src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1739972640/morph-bg3_bw8vba.svg" alt="background for section about" className="absolute z-0  object-cover top-[80vh] laptop:top-[95vh] left-0 h-[100vh] max-h-[100vh] animate-zoomInOut" />
    <div className="w-11/12  mx-auto grid laptop:grid-cols-2 relative z-20 gap-6 py-32">
        <div className="flex flex-col gap-4">
        <img src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1739978658/091c9f2741908ab28d38d3b3013aed83_vhdp2b.jpg" alt="Carolina" className="h-[300px] w-[250px] laptop:h-[600px] laptop:w-[400px] object-cover aspect-[3/4]" />
        </div>
        <div className="flex flex-col gap-4">
            <img src="https://res.cloudinary.com/dbf8xygxz/image/upload/v1739978653/f5867cccdad8da28cc791b9b480306f1_yjtb3l.jpg" alt="Emelie" className="h-[300px] w-[250px] laptop:h-[600px] laptop:w-[400px] object-cover aspect-[3/4]" />
        </div>
    </div>
    </section>
  )
}
