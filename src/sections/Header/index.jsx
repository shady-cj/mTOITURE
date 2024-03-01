import arrowLeft from "../../assets/arrow-left.svg"
import menu from "../../assets/menu.svg"
import translations from "../../translation/headerTranslation"
const Index = ({ setOpenQuote, lang }) => {
    return (
        <div className="fixed z-10 max-w-[inherit] top-[2.5rem] w-[inherit] px-4 lg:px-[5rem] xl:px-[7.5rem]" >
            <header className='w-[80vw] bg-[#0E0E1A] w-full rounded-[2rem] py-5 md:py-2 pr-3 pl-6 flex justify-between items-center'>
                <div className="text-sm font-semibold leading-4 text-[#F3F3FB]">
                    mTOITURE
                </div>
                <div className="flex md:hidden text-[15px] gap-2 mr-4 leading-5 font-normal text-[#C4C4CC]">
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
            </header>
        </div>
    )
}

export default Index