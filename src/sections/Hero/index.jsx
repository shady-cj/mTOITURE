import "./index.css";
import arrowLeftWhite from "../../assets/arrow-left-white.svg";
import roof from "../../assets/hero-roof-img.jpg";
import google from "../../assets/google.png"
import star from "../../assets/star.svg"
import facebook from "../../assets/facebook.png"
const Index = () => {
    return (
        <section className="px-[7.5rem] w-full bg-hero-bg min-h-[920px]">
            <main className="pt-[11rem] flex gap-16">
                <div className="pt-[4.125rem] flex flex-col justify-between">
                    <div>

                        <p className="w-fit bg-[#EDEDFC] rounded-2xl border-[0.5px] border-solid border-[#9FC3CC] px-2 py-[3px] font-medium text-sm leading-4 text-[#48487F]">
                            Expert Roofing for Homes in the greater Montreal area
                        </p>
                        <h2 className="mt-3 font-semibold text-[#0E0E1A] text-[3.5rem] leading-[4.2rem] max-w-[38rem]">
                            Secure Your Home with <span className="rounded-2xl leading-4 border px-2 py-0.5 bg-[#DDECF0] border-[#A7D4E0] border-solid text-[#48487F]">Trusted Roofing</span> Expertise
                        </h2>
                        <p className="font-normal text-base leading-7 mt-6 text-[#232324] w-[30rem]">
                            From minor repairs to complete roof replacements, we offer quality roofing services across Greater Montreal.
                        </p>
                        <div className="mt-12 flex gap-4">
                            <a className="rounded-[1.75rem] px-4 py-3 bg-[#48487F] font-medium text-base text-[#F2F2FC] font-[Inter] flex items-center gap-1">Get a Free Quote <img src={arrowLeftWhite} alt="" /></a>
                            <a className="rounded-[1.75rem] px-4 py-3 bg-[#F7F7FC] font-medium text-base text-[#48487F] font-[Inter] border-[0.5px] border-solid border-[#8C8CB8]">Contact Us</a>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="bg-[#EBEBF5] p-4 flex items-center gap-4 border border-solid border-[#B3DBE5] rounded-lg">
                            <img src={google} alt="" />
                            <div>
                                <div className="flex">

                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                </div>
                                <p className="font-normal text-base text-[#232324] mt-2">
                                    5 star Google reviews
                                </p>

                            </div>
                        </div>
                        <div className="bg-[#EBEBF5] p-4 flex items-center gap-4 border border-solid border-[#B3DBE5] rounded-lg">
                            <img src={facebook} alt="" />
                            <div>
                                <div className="flex">

                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                </div>
                                <p className="font-normal text-base text-[#232324] mt-2">
                                    5 star Facebook reviews
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={roof} className="rounded-2xl object-cover h-[40rem] aspect-[572/720]" alt="" />

                </div>
            </main>
        </section>
    )
}

export default Index