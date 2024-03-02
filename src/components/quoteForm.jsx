import arrowLeftWhite from "../assets/arrow-left-white.svg";
import translations from "../translation/quoteFormTranslation";
import React from "react";

const QuoteForm = ({ setOpenQuote, lang }) => {
    const [info, setInfo] = React.useState({
        "fullName": "",
        "email": "",
        "phone": ""
    })

    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = `Full Name: ${info.fullName}
Email: ${info.email}
Phone: ${info.phone}`
        location.href = `mailto:pmcintyre@mtoiture.com?subject=${encodeURIComponent("FREE QUOTE")}&body=${encodeURIComponent(body)}`
    }
    return (
        <section onClick={() => setOpenQuote(false)} className="fixed flex justify-center items-center z-20 max-w-[inherit] top-0 bottom-0 w-[inherit] bg-[#00000050]">

            <form onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()} className="py-8 px-5 bg-[#FFFFFF] rounded-lg h-fit w-[25rem]" action="" encType="text/plain">
                <h2 className="font-medium text-2xl leading-7 text-[#333333] ">
                    {translations[lang][0]}
                </h2>
                <section className="mt-8">
                    <div>
                        <label htmlFor="full-name" className="block font-medium text-base leading-4 text-[#4D4D4D]">
                            {translations[lang][1]}
                        </label>
                        <input name="fullName" type='text' onChange={handleChange} className="w-full block mt-2 px-4 py-[10px] rounded-[4px] border border-solid border-[#E6E6E6] font-normal text-base leading-4 text-[#999999]" id="full-name" placeholder={translations[lang][2]} />
                    </div>
                    <div className="mt-6">
                        <label htmlFor="phone" className="block font-medium text-base leading-4 text-[#4D4D4D]">
                            {translations[lang][3]}
                        </label>
                        <input name="phone" type="tel" onChange={handleChange} className="w-full block mt-2 px-4 py-[10px] rounded-[4px] border border-solid border-[#E6E6E6] font-normal text-base leading-4 text-[#999999]" id="phone" placeholder={translations[lang][4]} />
                    </div>
                    <div className="mt-6">
                        <label htmlFor="email" className="block font-medium text-base leading-4 text-[#4D4D4D]">
                            {translations[lang][5]}
                        </label>
                        <input name="email" type='email' onChange={handleChange} className="w-full block mt-2 px-4 py-[10px] rounded-[4px] border border-solid border-[#E6E6E6] font-normal text-base leading-4 text-[#999999]" id="email" placeholder={translations[lang][6]} />
                    </div>
                </section>
                <section className="mt-4 flex gap-2 items-start">
                    <input type="checkbox" id="agree" className="mt-1" />
                    <label htmlFor="agree" className="text-base leading-5 font-normal text-[#344054]">{translations[lang][7]} </label>
                </section>
                <section className="mt-8">
                    <button className="rounded-[1.75rem] px-4 py-3 bg-[#48487F] font-medium text-base text-[#F2F2FC] font-[Inter] flex items-center gap-1">
                        {translations[lang][0]} <img src={arrowLeftWhite} alt="" />
                    </button>
                </section>
            </form>
        </section>

    )
}

export default QuoteForm