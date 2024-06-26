import BenefitsCard from "../../components/benefitsCard"
import arrowLeftWhite from "../../assets/arrow-left-white.svg";
import translations from "../../translation/benefitTranslation";
import React from "react";
import { useInView } from "framer-motion";
// const benefits = [
//     // { title: "Over 120 project completed ", content: "Since 2019, we have proudly served the greater Montreal area and completed project of all kinds" },
//     // { title: "100% Customer Satisfication", content: "We go the extra mile to earn your trust, delivering exceptional service and exceeding expectations." },
//     { title: "Local Expertise", content: "We know the Greater Montreal Area inside and out, understanding the weather patterns and roofing challenges faced in our region." },
//     { title: "Seasoned Certified Team", content: "Our knowledgeable, experienced team of experts get it right the first time." }
// ]


const benefits = {
    "en": [
        { title: "Local Expertise", content: "We know the Greater Montreal Area inside and out, understanding the weather patterns and roofing challenges faced in our region." },
        { title: "Seasoned Certified Team", content: "Our knowledgeable, experienced team of experts get it right the first time." }
    ],
    "fr": [
        { title: "Expertise locale", content: "Nous connaissons parfaitement la région du Grand Montréal et comprenons les conditions météorologiques et les défis de toiture auxquels notre région est confrontée." },
        { title: "Équipe certifiée chevronnée", content: "Notre équipe d’experts compétents et expérimentés réussit du premier coup." },

    ]
}
const Index = ({ setOpenQuote, lang }) => {
    const frameRef = React.useRef(null);
    const frameInView = useInView(frameRef, { once: true });
    const [projectCompleted, setProjectCompleted] = React.useState(0)
    const [projectPercent, setProjectPercent] = React.useState(0)
    React.useEffect(() => {
        let interval, interval2;
        if (frameInView) {
            interval = setInterval(() => {
                setProjectCompleted(prev => {
                    if (prev < 560) {
                        return prev + 10
                    }
                    clearInterval(interval)
                    return prev
                })
            }, 60)
            interval2 = setInterval(() => {
                setProjectPercent(prev => {
                    if (prev < 100) {
                        return prev + 10
                    }
                    clearInterval(interval2)
                    return prev
                })
            }, 150)
        }
        return (() => {
            if (interval) clearInterval(interval)

            if (interval2) clearInterval(interval2)
        })
    }, [frameInView])
    return (
        <section className="px-4 md:px-6 py-[3rem] md:py-[6rem] lg:px-[5rem] xl:px-[7.5rem] bg-[#F7F7FF]">
            <div className="text-center">
                <h2 className="font-semibold text-[2rem] leading-[2.5rem] md:text-[2.5rem] md:leading-[3rem] text-[#48487F]">{translations[lang][0]} <span className="text-[#0E0E1A]">{translations[lang][1]}</span> {translations[lang][2]}</h2>
                <p className="pt-2 font-normal text-sm leading-6 md:text-base md:leading-8 text-[#666666] max-w-[22rem] mx-auto">{translations[lang][3]}</p>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-7 xl:gap-10 mt-12">
                <div className="flex flex-col gap-4 basis-3/5" ref={frameRef}>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="hidden md:flex flex-col gap-4 justify-center bg-[#48487F] px-6 rounded-xl basis-[47%]">
                            <span className="text-[#EDEDFA] text-[3rem] leading-[3.6rem] font-medium">{projectCompleted}</span>
                            <span className="font-medium text-[#FFFFFF] text-base leading-5">{translations[lang][4]}</span>
                        </div>
                        <BenefitsCard title={benefits[lang][0].title} content={benefits[lang][0].content} />
                    </div>
                    <div className="flex md:hidden gap-4">
                        <div className="flex flex-col gap-4 justify-center bg-[#48487F] px-6 py-8 rounded-xl basis-[47%]">
                            <span className="text-[#EDEDFA] text-[3rem] leading-[3.6rem] font-medium">{projectCompleted}</span>
                            <span className="font-medium text-[#FFFFFF] text-base leading-5">{translations[lang][4]}</span>
                        </div>
                        <div className="flex flex-col gap-4 justify-center bg-[#EDEDFA] px-6 py-8 rounded-xl basis-[47%]">
                            <span className="text-[#48487F] text-[3rem] leading-[3.6rem] font-medium">{`${projectPercent}%`}</span>
                            <span className="font-medium text-[#48487F] text-base leading-5">{translations[lang][5]}</span>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <BenefitsCard title={benefits[lang][1].title} content={benefits[lang][1].content} />
                        <div className="hidden md:flex flex-col gap-4 justify-center bg-[#EDEDFA] px-6 rounded-xl basis-[47%]">
                            <span className="text-[#48487F] text-[3rem] leading-[3.6rem] font-medium">{`${projectPercent}%`}</span>
                            <span className="font-medium text-[#48487F] text-base leading-5">{translations[lang][5]}</span>
                        </div>
                    </div>

                </div>
                <div className="py-14 px-6 max-h-[28rem] lg:basis-[40%] xl:basis-[30%]">
                    <h2 className="font-semibold max-w-[19rem] text-2xl leading-7 text-[#1A1A1A] md:mx-auto lg:mx-0 md:text-center lg:text-left">{translations[lang][6]}</h2>
                    <p className="mt-5 max-w-[29rem] font-normal text-sm leading-6 md:text-base md:leading-7 text-[#666666] md:mx-auto lg:mx-0 md:text-center lg:text-left">{translations[lang][7]}</p>
                    <a onClick={() => setOpenQuote(true)} className="mt-12 rounded-[1.75rem] px-4 py-3 bg-[#48487F] font-medium text-base text-[#F2F2FC] font-[Inter] flex items-center gap-1 w-fit md:mx-auto lg:mx-0">{translations[lang][8]} <img src={arrowLeftWhite} alt="" /></a>
                </div>
            </div >


        </section >
    )
}

export default Index