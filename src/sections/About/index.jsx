import tick from "../../assets/tick.svg"
import valuesImage from "../../assets/values-roof.jpg"
import engineerRepair from "../../assets/engineer-repair.png"
const values = [
    { title: "Expertise", desc: "Our team of skilled and certified roofers boasts extensive knowledge and experience, ensuring every project is tackled with confidence." },
    { title: "Integrity", desc: "We prioritize honesty and transparency, keeping you informed throughout the process and delivering on our promises." },
    { title: "Quality", desc: "We source high-quality materials and employ meticulous craftsmanship, guaranteeing long-lasting results you can trust." },
    { title: "Reliability", desc: "We value your time and respect your budget, completing projects on schedule and within agreed-upon costs." }

]
const Index = () => {
    return (
        <section id="about" className="px-[7.5rem] py-[6rem] bg-[#F7F7FF]">
            <div className="flex px-[7rem] xl:px-[10rem] justify-between mb-[5rem] lg:gap-8 xl:gap-12">
                <div className="flex-1">

                    <h4 className="font-semibold text-sm leading-4 text-[#48487F]">
                        ABOUT US
                    </h4>
                    <h3 className="mt-3 max-w-[30rem] font-semibold text-[2.5rem] leading-[3rem] text-[#0E0E1A]">
                        Your <span className="text-[#48487F]">Trusted Roofing Experts</span> in Greater Montreal
                    </h3>
                    <p className="mt-6 max-w-[30rem] font-normal text-base leading-8 text-[#666666]">
                        Since 2017, mTOITURE has proudly served the Greater Montreal Area as your trusted roofing partner. We specialize in shingle roof installations, repairs, and replacements, utilizing our in-depth knowledge and proven practices to deliver lasting results you can rely on.
                    </p>
                    {/* <div className="mt-12">
                        <h6 className="font-medium text-sm leading-4 text-[#0E0E1A]">We are</h6>
                        <div className="mt-4">
                            <div className="pr-2 py-0.5 flex items-center gap-3 w-fit rounded-2xl bg-[#FFFFFF]">
                                <div className="w-6 h-6 rounded-full bg-[#E8E8FA] flex items-center justify-center">
                                    <img src={tick} alt="" />
                                </div>
                                <p className="text-sm leading-4 font-normal text-[#2F2F34]">RBQ Licensed</p>
                            </div>
                            <div className="pr-2 py-0.5 mt-3 flex items-center gap-3 w-fit rounded-2xl bg-[#FFFFFF]">
                                <div className="w-6 h-6 rounded-full bg-[#E8E8FA] flex items-center justify-center">
                                    <img src={tick} alt="" />
                                </div>
                                <p className="text-sm leading-4 font-normal text-[#2F2F34]">Registered with CCQ & CNEST</p>
                            </div>
                            <div className="pr-2 py-0.5 mt-3 flex items-center gap-3 w-fit rounded-2xl bg-[#FFFFFF]">
                                <div className="w-6 h-6 rounded-full bg-[#E8E8FA] flex items-center justify-center">
                                    <img src={tick} alt="" />
                                </div>
                                <p className="text-sm leading-4 font-normal text-[#2F2F34]">Fully Insured & Bonded</p>
                            </div>

                        </div>
                    </div> */}

                </div>
                <div className="flex-1"><img src={engineerRepair} className="h-full w-full object-cover rounded-xl aspect-[80/91]" alt="" /></div>
            </div>
            <div className="border-t border-solid border-[#E6E6F5] pt-[5rem]">
                <div className="flex gap-[6rem] items-center">
                    <div className="basis-2/5">
                        <img src={valuesImage} className="aspect-[16/21] object-cover rounded-xl" alt="" />
                    </div>
                    <div className="basis-3/5">
                        <h4 className="font-semibold text-sm leading-4 text-[#48487F]">OUR VALUES</h4>
                        <div className="flex flex-wrap gap-6 mt-8">
                            {
                                values.map(({ title, desc }) => {
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
                </div>
            </div>

        </section>
    )
}

export default Index

