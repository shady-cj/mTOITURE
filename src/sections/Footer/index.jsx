import './index.css';
import arrowLeft from "../../assets/arrow-left.svg";
import phone from "../../assets/phone.svg"
import fb from "../../assets/fb-gray.svg"
const Index = ({ setOpenQuote }) => {
    return (
        <section className='px-[7.5rem] pt-[6rem] pb-6 bg-[#0E0E1A]'>
            <h2 className='text-[#C8C8DB] mt-3 font-semibold text-[2.5rem] leading-[3rem] max-w-[28rem] mx-auto text-center'>
                Ready to discuss your roofing needs?
            </h2>
            <p className="mt-4 max-w-[21rem] mx-auto font-normal text-center text-base leading-7 text-[#DBDBE5]">
                Contact mTOITURE today for a free inspection and personalized quote.
            </p>
            <a onClick={() => setOpenQuote(true)} className="mt-12 rounded-[1.75rem] px-4 py-3 bg-[#F7F7FC] font-medium text-base text-[#48487F] font-[Inter] flex items-center gap-1 w-fit mx-auto">Get a Free Quote <img src={arrowLeft} alt="" /></a>

            <div className="mt-[5rem] py-[5rem] border-t border-solid border-[#1F1F29] flex justify-between">
                <div>
                    <p className='font-semibold text-sm leading-4 text-[#F3F3FB]'>mTOITURE</p>
                    <p className='text-base leading-5 font-semibold text-[#AEAED4] mt-4'>RBQ # 5774-7594-01</p>
                </div>
                <div>
                    <p className='text-[#9D9DA3] font-medium text-sm leading-4'>Contact</p>
                    <p className='mt-6 font-normal text-base leading-5 text-[#BDBDC3] flex gap-[5px] align-center'>
                        <img src={phone} className='w-5 h-5' /> (514) 668-6401
                    </p>
                    <img src={fb} className='mt-6' alt="" />
                </div>
                <div>
                    <p className='font-medium text-sm leading-4 text-[#9D9DA3]'>Open Hours</p>
                    <p className='mt-6 font-normal text-base leading-5 text-[#BDBDC3]'>Mon-Fri: 7am-5pm</p>
                </div>
                <div>
                    <p className='font-medium text-sm leading-4 text-[#9D9DA3]'>Navigations</p>
                    <a className='mt-6 font-normal text-base leading-5 text-[#BDBDC3] block'>
                        About
                    </a>
                    <a className='mt-4 font-normal text-base leading-5 text-[#BDBDC3] block'>Services</a>
                    <a className='mt-4 font-normal text-base leading-5 text-[#BDBDC3] block'>Reviews</a>
                    <a className='mt-4 font-normal text-base leading-5 text-[#BDBDC3] block'>Contact</a>
                </div>
            </div>
            <div className='flex justify-between'>
                <p className='text-[#9D9DA3] font-normal text-xs'>
                    Copyright © 2024 mTOITURE. All Rights Reserved
                </p>
                <p className='text-[#C8C8DB] font-normal text-xs'>
                    Designed by Praise
                </p>

            </div>
        </section>
    )
}

export default Index