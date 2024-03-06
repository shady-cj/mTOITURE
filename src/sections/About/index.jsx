import tick from "../../assets/tick.svg"
import valuesImage from "../../assets/values-roof.jpg"
import engineerRepair from "../../assets/engineer-repair.png"
import translations from "../../translation/aboutTranslation"

const values = {
    "en": [
        { title: "Expertise", desc: "Our team of skilled and certified roofers boasts extensive knowledge and experience, ensuring every project is tackled with confidence." },
        { title: "Integrity", desc: "We prioritize honesty and transparency, keeping you informed throughout the process and delivering on our promises." },
        { title: "Quality", desc: "We source high-quality materials and employ meticulous craftsmanship, guaranteeing long-lasting results you can trust." },
        { title: "Reliability", desc: "We value your time and respect your budget, completing projects on schedule and within agreed-upon costs." }
    ],
    "fr": [
        { title: "Compétence", desc: "Notre équipe de couvreurs qualifiés et certifiés possède des connaissances et une expérience approfondies, garantissant que chaque projet est abordé en toute confiance." },
        { title: "Intégrité", desc: "Nous accordons la priorité à l’honnêteté et à la transparence, en vous tenant informé tout au long du processus et en tenant nos promesses." },
        { title: "Qualité", desc: "Nous nous approvisionnons en matériaux de haute qualité et employons un savoir-faire méticuleux, garantissant des résultats durables auxquels vous pouvez faire confiance." },
        { title: "Fiabilité", desc: "Nous apprécions votre temps et respectons votre budget, en réalisant les projets dans les délais et dans les limites des coûts convenus." }
    ]
}

const Index = ({ lang }) => {
    return (
        <section id="about" className="px-4 lg:px-[5rem] xl:px-[7.5rem] py-[3rem] md:py-[6rem] bg-[#F7F7FF]">
            <div className="flex flex-col lg:flex-row px-0 md:px-[4rem] lg:px-[7rem] xl:px-[10rem] justify-between mb-[5rem] gap-[2.5rem] lg:gap-7 xl:gap-12">
                <div className="flex-1">

                    <h4 className="font-semibold text-sm leading-4 text-[#48487F]">
                        {translations[lang][0]}
                    </h4>
                    <h3 className="mt-3 max-w-[30rem] font-semibold text-[2rem] leading-[2.5rem] md:text-[2.5rem] md:leading-[3rem] text-[#0E0E1A]">
                        {translations[lang][1]} <span className="text-[#48487F]">{translations[lang][2]}</span> {translations[lang][3]}
                    </h3>
                    <p className="mt-6 lg:max-w-[30rem] font-normal text-sm leading-6 md:text-base md:leading-8 text-[#666666]">
                        {translations[lang][4]}
                    </p>
                </div>
                <div className="flex-1"><img src={engineerRepair} className="h-full w-full object-cover rounded-xl aspect-[80/91]" alt="" /></div>
            </div>
            <div className="mt-12 md:px-[4rem] lg:px-[5rem] xl:px-[7.5rem] mb-[5rem]">
                <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:justify-around lg:gap-[4rem] xl:gap-[5rem]">
                    <div className="p-3 flex items-center gap-3 w-fit rounded-3xl bg-[#FFFFFF] shadow-[-16px_16px_32px_0px_#00000014]">
                        <div className="w-6 h-6 rounded-full bg-[#E8E8FA] flex items-center justify-center">
                            <img src={tick} alt="" />
                        </div>
                        <p className="text-sm leading-4 font-normal text-[#2F2F34] text-nowrap">{translations[lang][5]}</p>
                    </div>
                    <div className="p-3 flex items-center gap-3 w-fit rounded-3xl bg-[#FFFFFF] shadow-[-16px_16px_32px_0px_#00000014]">
                        <div className="w-6 h-6 rounded-full bg-[#E8E8FA] flex items-center justify-center">
                            <img src={tick} alt="" />
                        </div>
                        <p className="text-sm leading-4 font-normal text-[#2F2F34] text-nowrap">{translations[lang][6]}</p>
                    </div>
                    <div className="p-3 flex items-center gap-3 w-fit rounded-3xl bg-[#FFFFFF] shadow-[-16px_16px_32px_0px_#00000014]">
                        <div className="w-6 h-6 rounded-full bg-[#E8E8FA] flex items-center justify-center">
                            <img src={tick} alt="" />
                        </div>
                        <p className="text-sm leading-4 font-normal text-[#2F2F34] text-nowrap">{translations[lang][7]}</p>
                    </div>

                </div>
            </div>
            <div className="border-t border-solid border-[#E6E6F5] pt-[2.5rem] md:pt-[5rem] md:px-6 lg:px-0">
                <div className="flex flex-col lg:flex-row gap-8 xl:gap-[6rem]">
                    <div className="hidden lg:block basis-2/5">
                        <img src={valuesImage} className="h-full w-full object-cover rounded-xl" alt="" />
                    </div>
                    <div className="basis-3/5">
                        <h4 className="font-semibold text-sm leading-4 text-[#48487F]">{translations[lang][8]}</h4>
                        <div className="flex flex-col md:flex-row flex-wrap gap-8 md:gap-4 xl:gap-6 mt-8">
                            {
                                values[lang].map(({ title, desc }) => {
                                    return (
                                        <div key={title} className="basis-[47%]">

                                            <div className="w-6 h-6 rounded-full bg-[#E8E8FA] flex items-center justify-center">
                                                <img src={tick} alt="" />
                                            </div>
                                            <h6 className="mt-6 font-medium text-base leading-5 text-[#0E0E1A]">{title}</h6>
                                            <p className="mt-4 font-normal text-base leading-7 text-[#666666]">{desc}</p>
                                        </div>
                                    )
                                })
                            }


                        </div>
                    </div>
                    <div className="lg:hidden">
                        <img src={valuesImage} className="h-full w-full object-cover rounded-xl" alt="" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Index

