import mail from "/Mail.svg";
/* import instagram from "/Instagram.svg" */

export const Contact = () => {
  return (
    <section className="min-h-screen tablet:min-h-fit bg-[url('https://res.cloudinary.com/dwjbiceg4/image/upload/v1745326427/d11601cfa9fc6820ba2ea9f6aea22dbc_aidsru.jpg')] bg-cover bg-left-top pb-32 laptop:pb-0">
      <div className="w-11/12 mx-auto py-20 laptop:py-40">

        <div className="flex flex-col tablet:grid grid-cols-2 laptop:border-l-[3px] laptop:border-b-[3px] p-6 laptop:p-12 gap-12 laptop:gap-20 w-full h-full">
          
          <div className="flex flex-col gap-6 justify-between">
            <div className="flex flex-col gap-2 text-left">
              <h3 className="font-dream text-4xl laptop:text-[40px]">Kontakta oss</h3>
              <h4 className="font-body text-sm laptop:text-lg">
                Vi erbjuder vägledning genom hela processen, <br/> kontakta oss för en första konsultation eller offert
              </h4>
            </div>
           
<div className="flex justify-between laptop:justify-start">
            <img src="https://res.cloudinary.com/dwjbiceg4/image/upload/v1747642678/drink-illustration_vu8p2r.svg" alt="drink" className="hidden laptop:block w-36 "/>
              <div className="flex items-center gap-2 self-end">
                <img src={mail} className="w-[25px] h-[25px] laptop:w-[30px] laptop:h-[30px]" />
                <a
                  href="mailto:contact@carlieconsulting.com"
                  className="font-body font-medium text-sm tablet:text-lg relative after:content-[''] after:block after:w-0 after:h-[1px] after:bg-black after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
                >
                  contact@carlieconsulting.com
                </a>
              </div>
              <img src="https://res.cloudinary.com/dwjbiceg4/image/upload/v1747642678/drink-illustration_vu8p2r.svg" alt="drink" className="w-16 self-end tablet:hidden "/>
            </div>
</div>
          
            <img
              src="https://res.cloudinary.com/dwjbiceg4/image/upload/v1747639514/emelie-carolina-carlie_udiojl.jpg"
              alt="carlie consulting Emelie & Carolina"
              className="w-full laptop:max-w-[600px] object-cover"
            />
        </div>
      </div>
    </section>
  );
};
