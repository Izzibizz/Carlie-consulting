import mail from "/Mail.svg"
/* import instagram from "/Instagram.svg" */

export const Contact = () => {
  return (
    <section className="h-[100vh] bg-[url('https://res.cloudinary.com/dwjbiceg4/image/upload/v1745326427/d11601cfa9fc6820ba2ea9f6aea22dbc_aidsru.jpg')] bg-cover">
      <div className="flex flex-col tablet:flex-row gap-4 w-10/12 mx-auto laptop:w-8/12 py-20 laptop:py-40 justify-between">
      <img src="https://res.cloudinary.com/dwjbiceg4/image/upload/v1745750264/eee_oqulxc.jpg" alt="carlie consulting Emelie & Carolina" className="w-full tablet:w-[400px] aspect-[3/4] object-cover border-4"/>
      <div className="flex flex-col gap-12 items-end justify-end">
        <h3 className="font-dream text-xl laptop:text-2xl">Din vägledning genom hela processen</h3>
        <div className="">
        <a href="mailto:emelie@carlieconsulting.com" className="flex gap-8 items-center font-dream text-4xl"
        >Kontakta oss <img src={mail} className="w-[40px] h-[40px]" /></a>
        <a href="mailto:emelie@carlieconsulting.com" className="font-body text-xl flex justify-end">mail@carlieconsulting.com</a>
        </div>
        </div>
      </div>
    </section>
  )
}


