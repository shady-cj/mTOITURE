import ServiceCard from "../../components/serviceCard"
import roof from "../../assets/service-roof.jpg"
import translations from "../../translation/serviceTranslation"

const services = {
    "en": [
        { title: "Roof Inspection & Consultation", content: "We offer a free inspection of your roof to determine the extent of the damage and what needs to be done to repair it." },
        { title: "Roof Coating", content: "We offer a wide variety of coatings to protect your roof from the elements and extend its life." },
        { title: "Roof Repairs", content: "We offer a variety of repair services to fix any damage to your roof." },
        { title: "Removal & Replacement", content: "We offer a complete replacement service to install a new roof on your home or business." }
    ],
    "fr": [
        { title: "Inspection et consultation du toit", content: "Nous offrons une inspection gratuite de votre toiture afin de déterminer l'étendue des dégâts et ce qu'il faut faire pour la réparer." },
        { title: "Revêtement de toiture", content: "We offer a wide variety of coatings to protect your roof from the elements and extend its life." },
        { title: "Réparations de toit", content: "Nous proposons une variété de services de réparation pour réparer tout dommage sur votre toiture." },
        { title: "Retrait et remplacement", content: "Nous offrons un service de remplacement complet pour installer une nouvelle toiture sur votre maison ou votre entreprise." }
    ]
}
const Index = ({ setOpenQuote, lang }) => {
    return (
        <section id="services" className="px-4 md:px-6 lg:px-[5rem] xl:px-[7.5rem] py-[3rem] md:py-[6rem]">
            <h4 className="font-semibold text-sm leading-4 text-[#48487F] text-left md:text-center">
                {translations[lang][0]}
            </h4>
            <h2 className="mt-3 max-w-[30rem] font-semibold text-[2rem] leading-[2.5rem] md:text-[2.5rem] md:leading-[3rem] text-[#0E0E1A] text-left md:text-center mx-auto">
                {translations[lang][1]} <span className="text-[#48487F]">{translations[lang][2]}</span> {translations[lang][3]}  <span className="text-[#48487F]">{translations[lang][4]}</span>
            </h2>
            <p className="mt-6 max-w-[32rem] font-normal text-sm leading-6 md:text-base md:leading-8 text-[#808080] text-left md:text-center mx-auto">
                {translations[lang][5]}
            </p>
            <div className="mt-[3.5rem] flex flex-col lg:flex-row gap-[2.5rem] lg:gap-4 xl:gap-8">
                <div className="flex flex-col md:flex-row md:flex-wrap gap-4 xl:gap-8">
                    {services[lang].map(service => <ServiceCard key={service.title} {...service} lang={lang} setOpenQuote={setOpenQuote} />)}
                </div>
                <div className="">
                    <img src={roof} className="w-[100%] lg:w-[93%] h-full object-cover rounded-xl" alt="" />
                </div>
            </div>

        </section>
    )
}

export default Index