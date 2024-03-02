import arrowLeft from "../../assets/arrow-left.svg"
import menu from "../../assets/menu.svg"
import translations from "../../translation/headerTranslation"
import "./index.css"
import React from "react"
import { motion } from "framer-motion"
const Index = ({ setOpenQuote, lang }) => {
    const [openMenu, setOpenMenu] = React.useState(false);

    return (
        <div className="absolute md:fixed md:z-10 max-w-[inherit] top-[2.5rem] w-[inherit] px-4 lg:px-[5rem] xl:px-[7.5rem]" >
            <motion.header initial={{ height: "4rem" }} animate={openMenu ? { height: "32.8375rem" } : { height: "4rem" }} transition={{ type: "spring", ease: "ease-in-out" }} className='relative w-[80vw] bg-[#0E0E1A] w-full rounded-[2rem] py-5 md:py-2 pr-3 pl-6 overflow-hidden'>
                <div className="flex justify-between items-center">

                    <div className="text-sm font-semibold leading-4 text-[#F3F3FB]">
                        mTOITURE
                    </div>
                    <div className="flex md:hidden text-[15px] gap-2 mr-4 leading-5 font-normal text-[#C4C4CC]" onClick={() => setOpenMenu(prev => !prev)}>
                        <img src={menu} alt="" />
                        Menu
                    </div>

                    <nav className="hidden md:flex gap-6">
                        <a href="#about" className="px-3 rounded-lg text-[#C4C4CC] font-normal leading-[18.15px] text-[15px]">{translations[lang][0]}</a>
                        <a href="#gallery" className="px-3 rounded-lg text-[#C4C4CC] font-normal leading-[18.15px] text-[15px]">{translations[lang][1]}</a>
                        <a href="#services" className="px-3 rounded-lg text-[#C4C4CC] font-normal leading-[18.15px] text-[15px]">{translations[lang][2]}</a>
                        <a href="#reviews" className="md:hidden lg:block px-3 rounded-lg text-[#C4C4CC] font-normal leading-[18.15px] text-[15px]">{translations[lang][3]}</a>
                        <a href="#contact" className="px-3 rounded-lg text-[#C4C4CC] font-normal leading-[18.15px] text-[15px]">{translations[lang][4]}</a>
                    </nav>
                    <button onClick={() => setOpenQuote(true)} className="hidden md:flex bg-[#F2F2FC] rounded-[21px] p-3 font-semibold text-sm leading-4 text-[#48487F] font-[Inter] flex items-center gap-1">
                        {translations[lang][5]} <img src={arrowLeft} />
                    </button>
                </div>
                <div className={`block md:hidden overflow-hidden`}>
                    <nav className="flex flex-col items-center z-10 md:hidden bg-[#11111F] border border-solid border-[#15151F] p-4 mt-6 rounded-xl gap-[2.5rem]">
                        <a href="#about" className="text-[#C4C4CC] font-normal leading-[18.15px] text-[15px] mt-2">{translations[lang][0]}</a>
                        <a href="#gallery" className="text-[#C4C4CC] font-normal leading-[18.15px] text-[15px]">{translations[lang][1]}</a>
                        <a href="#services" className="text-[#C4C4CC] font-normal leading-[18.15px] text-[15px]">{translations[lang][2]}</a>
                        <a href="#reviews" className="text-[#C4C4CC] font-normal leading-[18.15px] text-[15px]">{translations[lang][3]}</a>
                        <a href="#contact" className="text-[#C4C4CC] font-normal leading-[18.15px] text-[15px]">{translations[lang][4]}</a>
                        <div className="w-full border border-solid border-[#1F1F29] mt-4"></div>
                        <a onClick={() => setOpenQuote(true)} className=" rounded-[1.75rem] px-4 py-3 bg-[#F7F7FC] font-medium text-base text-[#48487F] font-[Inter] flex items-center gap-1 w-fit mx-auto">{translations[lang][5]}<img src={arrowLeft} alt="" /></a>
                    </nav>
                </div>

            </motion.header>
        </div >
    )
}

export default Index