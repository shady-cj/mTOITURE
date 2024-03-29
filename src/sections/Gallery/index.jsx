import project1 from "../../assets/project-1.jpg"
import project2 from "../../assets/project-2.jpg"
import project3 from "../../assets/project-3.jpg"
import project4 from "../../assets/project-4.jpg"
import project5 from "../../assets/project-5.jpg"
import project6 from "../../assets/project-6.jpg"
import project7 from "../../assets/project-7.jpg"
import project8 from "../../assets/project-8.jpg"
import translations from "../../translation/galleryTranslation"
const Index = ({ lang }) => {
    return (
        <section className="px-4 lg:px-[5rem] xl:px-[7.5rem] py-[3rem] md:py-[6rem]" id="gallery">
            <h4 className='font-semibold text-sm leading-4 text-center text-[#48487F]'>
                {translations[lang][0]}
            </h4>
            <h2 className='text-[#0E0E1A] mt-3 font-semibold text-[2.5rem] leading-[3rem] max-w-[25rem] mx-auto text-center'>
                {translations[lang][1]} <span className='text-[#48487F]'>{translations[lang][2]}</span> {translations[lang][3]}
            </h2>
            <div className="mt-[5.6rem] hidden md:flex flex-col gap-3.5">
                <div className="gap-3.5 flex max-h-[36rem]">

                    <div className="flex-1">
                        <img className="h-full w-full rounded-lg" src={project1} alt="" />
                    </div>
                    <div className="flex-1 flex flex-col gap-3.5 ">
                        <div className="flex-1 flex gap-3.5">

                            <div className="flex-1">
                                <img className="h-full w-full rounded-lg" src={project2} alt="" />

                            </div>
                            <div className="flex-1">
                                <img className="h-full w-full rounded-lg" src={project3} alt="" />

                            </div>
                        </div>

                        <div className="flex-1 max-h-[17rem]">
                            <img className="h-full w-full object-cover rounded-lg" src={project4} alt="" />
                        </div>
                    </div>

                </div>
                <div className="gap-3.5 flex max-h-[36rem]">
                    <div className="flex-1 flex flex-col gap-3.5">

                        <div className="flex-1 flex gap-3.5">

                            <div className="flex-1">
                                <img className="h-full w-full rounded-lg" src={project6} alt="" />

                            </div>
                            <div className="flex-1">
                                <img className="h-full w-full rounded-lg" src={project7} alt="" />

                            </div>
                        </div>

                        <div className="flex-1 max-h-[17rem]">
                            <img className="h-full w-full object-cover rounded-lg" src={project8} alt="" />

                        </div>
                    </div>
                    <div className="flex-1">
                        <img className="h-full w-full rounded-lg" src={project5} alt="" />
                    </div>

                </div>
            </div>
            <div className="mt-[2.5rem] flex flex-col md:hidden gap-3.5">
                <div className="gap-3.5 flex max-h-[15rem] overflow-x-scroll snap-x snap-mandatory">
                    <img className=" w-[90%] object-cover rounded-lg snap-start" src={project1} alt="" />
                    <img className=" w-[90%] object-cover rounded-lg snap-start" src={project2} alt="" />
                    <img className=" w-[90%] object-cover rounded-lg snap-start" src={project3} alt="" />
                    <img className=" w-[90%] object-cover rounded-lg snap-start" src={project4} alt="" />
                </div>
                <div className="gap-3.5 flex max-h-[15rem] overflow-x-scroll snap-x snap-mandatory">
                    <img className=" w-[90%] object-cover rounded-lg snap-start" src={project5} alt="" />
                    <img className=" w-[90%] object-cover rounded-lg snap-start" src={project6} alt="" />
                    <img className=" w-[90%] object-cover rounded-lg snap-start" src={project7} alt="" />
                    <img className=" w-[90%] object-cover rounded-lg snap-start" src={project8} alt="" />
                </div>

            </div>
        </section>
    )
}

export default Index   