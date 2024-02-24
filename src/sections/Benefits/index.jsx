import BenefitsCard from "../../components/benefitsCard"
import arrowLeftWhite from "../../assets/arrow-left-white.svg";

const benefits = [
    { title: "Over 120 project completed ", content: "Since 2019, we have proudly served the greater Montreal area and completed project of all kinds" },
    { title: "100% Customer Satisfication", content: "We go the extra mile to earn your trust, delivering exceptional service and exceeding expectations." },
    { title: "Local Expertise", content: "We know the Greater Montreal Area inside and out, understanding the weather patterns and roofing challenges faced in our region." },
    { title: "Seasoned Certified Team", content: "Our knowledgeable, experienced team of experts get it right the first time." }
]
const Index = () => {
    return (
        <section className="py-[6rem] px-[7.5rem] bg-[#F7F7FF]">
            <div className="text-center">
                <h2 className="font-semibold text-[2.5rem] leading-[3rem] text-[#48487F]">Why <span className="text-[#0E0E1A]">Choose</span> Us</h2>
                <p className="pt-2 font-normal text-base leading-8 text-[#666666] max-w-[22rem] mx-auto">We prioritize clear communication, keeping you informed at every step of the process</p>
            </div>
            <div className="flex gap-10 mt-12">
                <div className="flex flex-col gap-4 basis-3/5">
                    <div className="flex gap-4">
                        <div className="flex flex-col gap-4 justify-center bg-[#48487F] px-6 rounded-xl basis-[47%]">
                            <span className="text-[#EDEDFA] text-[3rem] leading-[3.6rem] font-medium">560</span>
                            <span className="font-medium text-[#FFFFFF] text-base leading-5">project completed</span>
                        </div>
                        <BenefitsCard title={benefits[2].title} content={benefits[2].content} />
                    </div>
                    <div className="flex gap-4">
                        <BenefitsCard title={benefits[3].title} content={benefits[3].content} />
                        <div className="flex flex-col gap-4 justify-center bg-[#EDEDFA] px-6 rounded-xl basis-[47%]">
                            <span className="text-[#48487F] text-[3rem] leading-[3.6rem] font-medium">100%</span>
                            <span className="font-medium text-[#48487F] text-base leading-5">Customer Satisfaction</span>
                        </div>
                    </div>

                </div>
                <div className="py-14 px-6 max-h-[28rem] basis-[30%]">
                    <h2 className="font-semibold max-w-[19rem] text-2xl leading-7 text-[#1A1A1A]">Ready to discuss your roofing needs?</h2>
                    <p className="mt-5 max-w-[29rem] font-normal text-base leading-7 text-[#666666]">Contact mTOITURE today for a free inspection and personalized quote. We&apos;re here to help you protect your home and investment with confidence.</p>
                    <a className="mt-12 rounded-[1.75rem] px-4 py-3 bg-[#48487F] font-medium text-base text-[#F2F2FC] font-[Inter] flex items-center gap-1 w-fit">Get a Free Quote <img src={arrowLeftWhite} alt="" /></a>
                </div>
            </div >


        </section >
    )
}

export default Index