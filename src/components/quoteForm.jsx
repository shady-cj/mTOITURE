import arrowLeftWhite from "../assets/arrow-left-white.svg";
const QuoteForm = () => {
    return (
        <form className="py-8 px-5">
            <h2 className="font-medium text-2xl leading-7 text-[#333333] ">
                Get a Free Quote
            </h2>
            <section className="mt-8">
                <div>
                    <label htmlFor="full-name" className="block font-medium text-sm leading-4 text-[#4D4D4D]">
                        Full Name
                    </label>
                    <input className="block mt-2 px-4 py-[10px] rounded-[4px] border border-solid border-[#E6E6E6] font-normal text-sm leading-4 text-[#999999]" type="text" id="full-name" placeholder="Enter your full name" />
                </div>
                <div className="mt-6">
                    <label htmlFor="phone" className="block font-medium text-sm leading-4 text-[#4D4D4D]">
                        Phone Number
                    </label>
                    <input className="block mt-2 px-4 py-[10px] rounded-[4px] border border-solid border-[#E6E6E6] font-normal text-sm leading-4 text-[#999999]" type="text" id="phone" placeholder="Enter your phone number" />
                </div>
                <div className="mt-6">
                    <label htmlFor="email" className="block font-medium text-sm leading-4 text-[#4D4D4D]">
                        Email
                    </label>
                    <input className="block mt-2 px-4 py-[10px] rounded-[4px] border border-solid border-[#E6E6E6] font-normal text-sm leading-4 text-[#999999]" type="text" id="email" placeholder="Enter your mail" />
                </div>
            </section>
            <section className="mt-4 flex gap-2">
                <input type="checkbox" id="agree" />
                <label htmlFor="agree" className="text-sm leading-5 font-normal text-[#344054]">You agree to accept our term and conditions and privacy policy </label>
            </section>
            <section className="mt-8">
                <button className="rounded-[1.75rem] px-4 py-3 bg-[#48487F] font-medium text-base text-[#F2F2FC] font-[Inter] flex items-center gap-1">
                    Get a Free Quote <img src={arrowLeftWhite} alt="" />
                </button>
            </section>
        </form>
    )
}

export default QuoteForm