import tick from "../assets/tick.svg"
const BenefitsCard = ({ title, content }) => {
    return (
        <div className="basis-[58%] px-6 py-4 border border-solid border-[#E8E8FA] rounded-xl">
            <div className="w-6 h-6 rounded-full bg-[#E8E8FA] flex items-center justify-center">
                <img src={tick} alt="" />
            </div>
            <h4 className="mt-6 font-medium text-base leading-5 text-[#48487F]">{title}</h4>
            <p className="mt-4 font-normal text-sm leading-6 md:text-base md:leading-7 text-[#666666]">{content}</p>
        </div>
    )
}

export default BenefitsCard