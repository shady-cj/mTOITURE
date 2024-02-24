import "./index.css";
import arrowLeftWhite from "../../assets/arrow-left-white.svg";
import roof from "../../assets/hero-roof-img.jpg";
import google from "../../assets/google.png"
import star from "../../assets/star.svg"
import facebook from "../../assets/facebook.png"
import tick from "../../assets/tick.svg"
import fbHero from "../../assets/fb-hero.svg"
import phoneHero from "../../assets/phone-hero.svg"
const Index = () => {
    return (
        <section className="px-[7.5rem] pb-[4.5rem] w-full bg-hero-bg min-h-[920px]">
            <main className="pt-[11rem] flex gap-16">
                <div className="pt-[4.125rem] flex flex-col justify-between gap-[4rem]">
                    <div>

                        <p className="w-fit bg-[#EDEDFC] rounded-2xl border-[0.5px] border-solid border-[#9FC3CC] px-2 py-[3px] font-medium text-sm leading-4 text-[#48487F]">
                            Expert Roofing for Homes in the greater Montreal area
                        </p>
                        <h2 className="mt-3 font-semibold text-[#0E0E1A] text-[3.5rem] leading-[4.2rem] max-w-[40rem]">
                            Secure Your Home with <span className="rounded-2xl leading-4 text-nowrap border px-2 py-0.5 bg-[#DDECF0] border-[#A7D4E0] border-solid text-[#48487F]">Trusted Roofing</span> Expertise
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
                <div className="basis-[45%] relative">
                    <img src={roof} className="rounded-2xl object-cover w-full h-full" alt="" />
                    <div className="absolute top-[3.8rem] -left-[1.68rem] p-3 flex items-center gap-3 w-fit rounded-3xl bg-[#FFFFFF] shadow-[-16px_16px_32px_0px_#00000014]">
                        <div className="w-6 h-6 rounded-full bg-[#E8E8FA] flex items-center justify-center">
                            <img src={tick} alt="" />
                        </div>
                        <p className="text-sm leading-4 font-normal text-[#2F2F34]">RBQ Licensed</p>
                    </div>
                    <div className="absolute top-[16rem] -right-[1.875rem] p-3 flex items-center gap-3 w-fit rounded-3xl bg-[#FFFFFF] shadow-[-16px_16px_32px_0px_#00000014]">
                        <div className="w-6 h-6 rounded-full bg-[#E8E8FA] flex items-center justify-center">
                            <img src={tick} alt="" />
                        </div>
                        <p className="text-sm leading-4 font-normal text-[#2F2F34] text-nowrap">Registered with CCQ & CNEST</p>
                    </div>
                    <div className="absolute bottom-[8.25rem] -left-[4.9rem] p-3 flex items-center gap-3 w-fit rounded-3xl bg-[#FFFFFF] shadow-[-16px_16px_32px_0px_#00000014]">
                        <div className="w-6 h-6 rounded-full bg-[#E8E8FA] flex items-center justify-center">
                            <img src={tick} alt="" />
                        </div>
                        <p className="text-sm leading-4 font-normal text-[#2F2F34] text-nowrap">Fully Insured & Bonded</p>
                    </div>
                    <div className="absolute translate-y-[30%] flex gap-6 align-center bg-[#DDECF0] border border-solid border-[#A7D4E0] py-4 px-6 rounded-[26px] left-0 right-0 bottom-0 shadow-[-24px_-24px_48px_0px_#0000001F,24px_24px_48px_0px_#0000001F]">
                        <div className="">
                            <img src={fbHero} alt="" />
                        </div>
                        <div className="h-full px-6 border-x border-solid border-[#A7D4E0] flex align-center justify-center gap-[5px]">
                            <img src={phoneHero} alt="" />
                            <span className="font-normal text-base leading-5 text-[#67676A] text-nowrap">
                                (514) 668-6401
                            </span>
                        </div>
                        <div className=" text-[#48487F] font-semibold text-base leading-5 text-nowrap">
                            RBQ # 5774-7594-01
                        </div>

                    </div>
                </div>
            </main>
        </section>
    )
}

export default Index