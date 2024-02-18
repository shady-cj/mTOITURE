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
                <p className="pt-2 font-normal text-base leading-8 text-[#666666] max-w-[25rem] mx-auto">We prioritize clear communication, keeping you informed at every step of the process</p>
            </div>
            <div className="mt-[3.5rem] flex flex-nowrap gap-8">
                {benefits.map(benefit => <BenefitsCard key={benefit.title} {...benefit} />)}

            </div>
            <div className="mt-12 bg-[#EDEDFA] py-14 px-6">
                <h2 className="font-semibold max-w-[19rem] mx-auto text-2xl leading-7 text-center text-[#1A1A1A]">Ready to discuss your roofing needs?</h2>
                <p className="mt-5 max-w-[29rem] mx-auto font-normal text-center text-base leading-7 text-[#333333]">Contact mTOITURE today for a free inspection and personalized quote. We&apos;re here to help you protect your home and investment with confidence.</p>
                <a className="mt-12 rounded-[1.75rem] px-4 py-3 bg-[#48487F] font-medium text-base text-[#F2F2FC] font-[Inter] flex items-center gap-1 w-fit mx-auto">Get a Free Quote <img src={arrowLeftWhite} alt="" /></a>
            </div>
        </section>
    )
}

export default Index