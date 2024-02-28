import ServiceCard from "../../components/serviceCard"
import roof from "../../assets/service-roof.jpg"

const services = [
    { title: "Roof Inspection & Consultation", content: "We offer a free inspection of your roof to determine the extent of the damage and what needs to be done to repair it." },
    { title: "Roof Coating", content: "We offer a wide variety of coatings to protect your roof from the elements and extend its life." },
    { title: "Roof Repairs", content: "We offer a variety of repair services to fix any damage to your roof." },
    { title: "Removal & Replacement", content: "We offer a complete replacement service to install a new roof on your home or business." }
]
const Index = ({ setOpenQuote }) => {
    return (
        <section id="services" className="px-[7.5rem] py-[6rem]">
            <h4 className="font-semibold text-sm leading-4 text-[#48487F] text-center">
                SERVICES
            </h4>
            <h2 className="mt-3 max-w-[30rem] font-semibold text-[2.5rem] leading-[3rem] text-[#0E0E1A] text-center mx-auto">
                Explore <span className="text-[#48487F]">Our</span> Diverse  <span className="text-[#48487F]">Roofing Services</span>
            </h2>
            <p className="mt-6 max-w-[32rem] font-normal text-base leading-8 text-[#808080] text-center mx-auto">
                Whether you need a minor repair, a full roof replacement, or a preventive maintenance plan, commercial or Residential roofing, mTOITURE has the expertise and experience to meet your needs.
            </p>
            <div className="mt-[3.5rem] flex gap-8">
                <div className="flex flex-wrap gap-8">
                    {services.map(service => <ServiceCard key={service.title} {...service} setOpenQuote={setOpenQuote} />)}
                </div>
                <div className="">
                    <img src={roof} className="w-[80%] h-full object-cover rounded-xl" alt="" />
                </div>
            </div>

        </section>
    )
}

export default Index