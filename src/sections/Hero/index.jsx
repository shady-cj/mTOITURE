import "./index.css";
import arrowLeftWhite from "../../assets/arrow-left-white.svg";
import roof from "../../assets/hero-roof-img.jpg";
import google from "../../assets/google.png"
import star from "../../assets/star.svg"
import facebook from "../../assets/facebook.png"

import fbHero from "../../assets/fb-hero.svg"
import phoneHero from "../../assets/phone-hero.svg"
import translations from "../../translation/heroTranslation";
const Index = ({ setOpenQuote, lang }) => {
    return (
        <section className="px-4 lg:px-[5rem] xl:px-[7.5rem] pb-[4.5rem] w-full bg-hero-bg min-h-[920px]">
            <main className="pt-[9.5rem] lg:pt-[11rem] flex flex-col lg:flex-row lg:gap-8 xl:gap-16">
                <div className="flex flex-col justify-between gap-[4rem]">
                    <div>

                        <p className="w-fit mx-auto lg:mx-0 bg-[#EDEDFC] rounded-2xl border-[0.5px] border-solid border-[#9FC3CC] px-2 py-[3px] font-medium text-xs md:text-sm leading-4 text-[#48487F]">
                            {translations[lang][0]}
                        </p>
                        <h2 className="mt-3 mx-auto px-2 sm:px-6 lg:px-0 lg:mx-0 font-semibold text-[#0E0E1A] text-[2.2rem] sm:text-[3rem] md:text-[3.5rem] text-center lg:text-left leading-[3rem] md:leading-[4.2rem] max-w-[40rem]">
                            {translations[lang][1]} <span className="rounded-2xl leading-4 text-nowrap border px-2 py-0.5 bg-[#DDECF0] border-[#A7D4E0] border-solid text-[#48487F]">{translations[lang][2]}</span> {translations[lang][3]}
                        </h2>
                        <p className="font-normal text-center lg:text-left mx-auto lg:mx-0 text-sm md:text-base md:leading-7 mt-6 text-[#232324] max-w-[24rem] lg:max-w-[30rem]">
                            {translations[lang][4]}
                        </p>
                        <div className="mt-12 flex justify-center lg:justify-start gap-4">
                            <a className="rounded-[1.75rem] px-4 py-3 bg-[#48487F] font-medium text-sm md:text-base text-[#F2F2FC] text-nowrap font-[Inter] flex items-center gap-1" onClick={() => setOpenQuote(true)}>{translations[lang][5]} <img src={arrowLeftWhite} alt="" /></a>
                            <a className="rounded-[1.75rem] px-4 py-3 bg-[#F7F7FC] font-medium text-sm md:text-base text-[#48487F] text-nowrap font-[Inter] border-[0.5px] border-solid border-[#8C8CB8]">{translations[lang][6]}</a>
                        </div>
                    </div>

                    <div className="hidden lg:flex gap-4">
                        <div className="bg-[#EBEBF5] p-4 flex items-center gap-4 border border-solid border-[#B3DBE5] rounded-lg">
                            <img src={google} alt="" />
                            <div>
                                <div className="flex">

                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                </div>
                                <p className="font-normal text-base text-[#232324] mt-2">
                                    {translations[lang][7]}
                                </p>

                            </div>
                        </div>
                        <div className="bg-[#EBEBF5] p-4 flex items-center gap-4 border border-solid border-[#B3DBE5] rounded-lg">
                            <img src={facebook} alt="" />
                            <div>
                                <div className="flex">

                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                </div>
                                <p className="font-normal text-base text-[#232324] mt-2">
                                    {translations[lang][8]}
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-[3.5rem] px-4 md:px-8 lg:pt-0 lg:px-0 lg:basis-[45%]">
                    <img src={roof} className="rounded-2xl object-cover w-full h-full" alt="" />
                    <div className="flex mt-6 md:mt-10 lg:mt-0 justify-center lg:justify-start lg:hidden gap-4">
                        <div className="bg-[#EBEBF5] p-4 flex flex-col md:flex-row items-start md:items-center gap-4 border border-solid border-[#B3DBE5] rounded-lg">
                            <img src={google} alt="" />
                            <div>
                                <div className="flex">

                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                </div>
                                <p className="font-normal text-base text-[#232324] mt-2">
                                    {translations[lang][7]}
                                </p>

                            </div>
                        </div>
                        <div className="bg-[#EBEBF5] p-4 flex flex-col md:flex-row items-start md:items-center gap-4 border border-solid border-[#B3DBE5] rounded-lg">
                            <img src={facebook} alt="" />
                            <div>
                                <div className="flex">

                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                </div>
                                <p className="font-normal text-base text-[#232324] mt-2">
                                    {translations[lang][8]}
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="fixed translate-x-[-5%] translate-y-[-50%] md:translate-x-[50%] lg:translate-x-0 md:translate-y-[30%] flex gap-6 items-center bg-[#DDECF0] border border-solid border-[#A7D4E0] py-4 px-6 rounded-[26px] bottom-8 z-10 shadow-[-24px_-24px_48px_0px_#0000001F,24px_24px_48px_0px_#0000001F]">
                        <div className="">
                            <img src={fbHero} className="w-[2rem] md:w-auto" alt="" />
                        </div>
                        <div className="h-full px-6 border-x border-solid border-[#A7D4E0] flex align-center justify-center gap-[5px]">
                            <img src={phoneHero} alt="" className="" />
                            <span className="font-normal text-sm md:text-base leading-5 text-[#67676A] text-nowrap">
                                (514) 668-6401
                            </span>
                        </div>
                        <div className="text-[#48487F] font-semibold text-sm md:text-base leading-5 text-nowrap">
                            RBQ # 5774-7594-01
                        </div>

                    </div>
                </div>
            </main>
        </section>
    )
}

export default Index