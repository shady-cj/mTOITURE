import tick from "../assets/tick.svg"
const BenefitsCard = ({ title, content }) => {
    return (
        <div className="flex-1">
            <div className="w-6 h-6 rounded-full bg-[#E8E8FA] flex items-center justify-center">
                <img src={tick} alt="" />
            </div>
            <h4 className="mt-6 font-medium text-base leading-5 text-[#48487F]">{title}</h4>
            <p className="mt-4 font-normal text-base leading-7 text-[#666666]">{content}</p>
        </div>
    )
}

export default BenefitsCard