import mail from "/Mail.svg";
/* import instagram from "/Instagram.svg" */

export const Contact = () => {
  return (
    <section className=" bg-[url('https://res.cloudinary.com/dwjbiceg4/image/upload/v1745326427/d11601cfa9fc6820ba2ea9f6aea22dbc_aidsru.jpg')] bg-cover bg-left-top pb-32 laptop:pb-0">
      <div className="w-11/12 laptop:w-10/12 mx-auto py-20 laptop:py-40">
        <div className="flex flex-col tablet:grid grid-cols-2 p-6  gap-12 laptop:gap-20 w-full h-full">
          <div className="flex flex-col gap-6 justify-between">
            <div className="flex flex-col gap-4 text-left">
              <h3 className="font-dream text-4xl laptop:text-[40px]">
                Kontakta oss
              </h3>
              <h4 className="font-body text-sm laptop:text-lg">
                Vi erbjuder vägledning genom hela processen, <br /> kontakta oss
                för en första konsultation eller offert
              </h4>
               <div className="flex items-center gap-2 mt-6">
                <img
                  src={mail}
                  className="w-[25px] h-[25px] laptop:w-[30px] laptop:h-[30px]"
                />
                <a
                  href="mailto:contact@carlieconsulting.com"
                  className="font-body font-medium text-sm tablet:text-lg relative after:content-[''] after:block after:w-0 after:h-[1px] after:bg-black after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
                >
                  contact@carlieconsulting.com
                </a>
            </div>

       
              <img
                src="https://res.cloudinary.com/dwjbiceg4/image/upload/v1745326038/c-2_d0p3kn.svg"
                alt="logo"
                className="w-16 laptop:w-28 mt-10 laptop:mt-24 hidden tablet:block "
              />
             
            </div>
          </div>

          <img
            src="https://res.cloudinary.com/dwjbiceg4/image/upload/v1747639514/emelie-carolina-carlie_udiojl.jpg"
            alt="carlie consulting Emelie & Carolina"
            className="w-full laptop:max-w-[600px] object-cover self-end border-2"
          />
        </div>
      </div>
    </section>
  );
};
