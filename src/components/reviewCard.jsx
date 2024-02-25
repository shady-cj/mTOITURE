import google from "../assets/google.png"
const ReviewCard = ({ review, author }) => {
    return (
        <div className="sticky top-0 px-4 py-8 max-w-[30rem] bg-[#F2F2FC] border-[0.6px] border-[#DDDDF0] shadow-[-8px_8px_16px_0px_#0E0E1A0A] rounded-lg flex flex-col gap-8">
            <p className="font-normal text-base leading-7 text-[#4D4D4D]">
                {review}
            </p>
            <div className="border border-[#DDDDF0] border-solid"></div>
            <div className="flex justify-between items-center">
                <div>
                    <h4 className="font-normal text-base leading-5 text-[#1A1A1A]">{author}</h4>
                    <p className="pt-2 font-normal text-sm leading-4 text-[#999999]">Google review</p>
                </div>
                <img src={google} alt="" />
            </div>

        </div>
    )
}

export default ReviewCard