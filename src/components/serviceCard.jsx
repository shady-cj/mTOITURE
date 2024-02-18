import arrowLeft from "../assets/arrow-left.svg"
const ServiceCard = ({ title, content }) => {
    return (
        <div className="p-4 bg-[#F7F7FF] rounded-md basis-[45%]">
            <div className="flex gap-6 h-full">

                <div className="border-2 rounded border-solid border-[#48487F] "></div>
                <div className="flex flex-col justify-between">
                    <div>

                        <h2 className="font-medium text-base leading-5 text-[#0E0E1A]">{title}</h2>
                        <p className="pt-2 font-normal text-base leading-7 text-[#666666]">
                            {content}
                        </p>
                    </div>

                    <a href="" className="mt-4 text-sm font-semibold leading-4 text-[#48487F] flex items-center gap-1">
                        Get a Free Quote <img src={arrowLeft} alt="" />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default ServiceCard