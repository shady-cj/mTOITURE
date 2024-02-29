import arrowLeft from "../assets/arrow-left.svg"
const ServiceCard = ({ title, content, setOpenQuote, lang }) => {
    return (
        <div className="py-6 px-4 bg-[#F7F7FF] rounded-md basis-[47%]">

            <div className="flex flex-col justify-between h-full">
                <div>
                    <div className="flex gap-4">
                        <div className="border-2 rounded border-solid border-[#48487F] "></div>
                        <h2 className="font-medium text-base leading-5 text-[#0E0E1A]">{title}</h2>
                    </div>

                    <p className="pt-2 pl-[18px] font-normal text-base leading-7 text-[#666666]">
                        {content}
                    </p>
                </div>

                <a onClick={() => setOpenQuote(true)} className="mt-4 pl-[18px] text-sm font-semibold leading-4 text-[#48487F] flex items-center gap-1">
                    {lang === "en" ? "Get a Free Quote" : "Obtenir un devis gratuit"} <img src={arrowLeft} alt="" />
                </a>
            </div>

        </div>
    )
}

export default ServiceCard