import './index.css';
import arrowLeft from "../../assets/arrow-left.svg";
import phone from "../../assets/phone.svg"
import fb from "../../assets/fb-gray.svg"
import translations from '../../translation/footerTranslation';
const Index = ({ setOpenQuote, lang }) => {
    return (
        <section className='px-4 pt-[4.5rem] lg:px-[5rem] xl:px-[7.5rem] lg:pt-[6rem] pb-6 bg-[#0E0E1A]' id="contact">
            <h2 className='text-[#C8C8DB] mt-3 font-semibold text-[2rem] leading-[2.5rem] md:text-[2.5rem] md:leading-[3rem] max-w-[28rem] mx-auto text-center'>
                {translations[lang][0]}
            </h2>
            <p className="mt-4 max-w-[21rem] mx-auto font-normal text-center text-sm leading-6 md:text-base md:leading-7 text-[#DBDBE5]">
                {translations[lang][1]}
            </p>
            <a onClick={() => setOpenQuote(true)} className="mt-12 rounded-[1.75rem] px-4 py-3 bg-[#F7F7FC] font-medium text-base text-[#48487F] font-[Inter] flex items-center gap-1 w-fit mx-auto">{translations[lang][2]}<img src={arrowLeft} alt="" /></a>

            <div className=" mt-[3.5rem] md:mt-[5rem] py-[5rem] border-t border-solid border-[#1F1F29] flex lg:justify-between xs:flex-col gap-[3rem] lg:gap-0 lg:flex-row xs:items-center lg:items-start">
                <div>
                    <p className='font-semibold text-sm leading-4 text-[#F3F3FB] text-center lg:text-left'>mTOITURE</p>
                    <p className='text-base leading-5 font-semibold text-[#AEAED4] mt-4 text-center lg:text-left'>RBQ # 5774-7594-01</p>
                </div>
                <div>
                    <p className='text-[#9D9DA3] font-medium text-sm leading-4 text-center lg:text-left'>{translations[lang][3]}</p>
                    <p className='mt-6 font-normal text-base leading-5 text-[#BDBDC3] flex gap-[5px] text-center lg:text-left'>
                        <img src={phone} className='w-5 h-5' /> (514) 668-6401
                    </p>
                    <img src={fb} className='mt-6 mx-auto lg:mx-0' alt="" />
                </div>
                <div>
                    <p className='font-medium text-sm leading-4 text-[#9D9DA3] text-center lg:text-left'>{translations[lang][4]}</p>
                    <p className='mt-6 font-normal text-base leading-5 text-[#BDBDC3] text-center lg:text-left'>{translations[lang][5]}: 7am-5pm</p>
                </div>
                <div>
                    <p className='font-medium text-sm leading-4 text-[#9D9DA3] text-center lg:text-left'>{translations[lang][6]}</p>
                    <a className='mt-6 font-normal text-base leading-5 text-[#BDBDC3] block text-center lg:text-left'>
                        {translations[lang][7]}
                    </a>
                    <a className='mt-4 font-normal text-base leading-5 text-[#BDBDC3] block text-center lg:text-left'>{translations[lang][8]}</a>
                    <a className='mt-4 font-normal text-base leading-5 text-[#BDBDC3] block text-center lg:text-left'>{translations[lang][9]}</a>
                    <a className='mt-4 font-normal text-base leading-5 text-[#BDBDC3] block text-center lg:text-left'>{translations[lang][10]}</a>
                </div>
            </div>
            <div className='flex flex-col items-center gap-3 lg:gap-0 lg:flex-row lg:items-start lg:justify-between'>
                <p className='text-[#9D9DA3] font-normal text-xs'>
                    {translations[lang][11]}
                </p>
                <p className='text-[#C8C8DB] font-normal text-xs'>
                    {translations[lang][12]} Praise
                </p>

            </div>
        </section>
    )
}

export default Index