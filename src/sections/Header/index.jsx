import arrowLeft from "../../assets/arrow-left.svg"
const Index = () => {
    return (
        <div className="fixed max-w-[inherit] top-[2.5rem] w-[inherit] px-[7.5rem]">
            <header className='w-[80vw] bg-[#0E0E1A] w-full rounded-[2rem] py-2 pr-3 pl-6 flex justify-between items-center'>
                <div className="text-sm font-semibold leading-4 text-[#F3F3FB]">
                    mTOITURE
                </div>
                <nav className="flex gap-6">
                    <a href="#about" className="px-3 rounded-lg text-[#C4C4CC] font-normal leading-[18.15px] text-[15px]">About</a>
                    <a href="#gallery" className="px-3 rounded-lg text-[#C4C4CC] font-normal leading-[18.15px] text-[15px]">Gallery</a>
                    <a href="#services" className="px-3 rounded-lg text-[#C4C4CC] font-normal leading-[18.15px] text-[15px]">Services</a>
                    <a href="#contact" className="px-3 rounded-lg text-[#C4C4CC] font-normal leading-[18.15px] text-[15px]">Contact</a>
                </nav>
                <button className="bg-[#F2F2FC] rounded-[21px] p-3 font-semibold text-sm leading-4 text-[#48487F] font-[Inter] flex items-center gap-1">
                    Get a Free Quote <img src={arrowLeft} />
                </button>
            </header>
        </div>
    )
}

export default Index