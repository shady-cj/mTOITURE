import ReviewCard from "../../components/reviewCard"
import bigStar from "../../assets/big-star.svg"
import translations from "../../translation/reviewTranslation"


const reviews = {
    "en": [
        {
            review: "Patrick of mToitures was a gentleman. His team was professional, courteous, and hard-working. They did the work on budget, on time, and cleaned up after themselves before leaving. I could not be happier to recommend their roofing services.",
            author: "Jamieson P"
        },
        {
            review: "The owner of mToiture is known in the local roofing industry as one of the best! He is a hard-working perfectionist who will ensure that the job gets done properly the first time around, compared to others who cut corners.",
            author: "L B"
        },
        {
            review: "Great service. He was professional and the Only roofer willing to come and see a small repair. He took pictures to show me the damage in the roof as well as the repair. Highly recommend and will be using again when my roof is redone.",
            author: "Stephanie A"
        },
        {
            review: "Excellent service from M Toiture. They are very professional and the employees are polite and hardworking. Thanks to the president Mr. Patrick McIntyre.",
            author: "Stephanie A"
        }
    ],
    "fr": [
        {
            review: "Patrick de mToitures était un gentleman. Son équipe était professionnelle, courtoise et travailleuse. Ils ont fait le travail dans les délais prévus et ont fait le ménage après eux avant de partir. Je ne pourrais pas être plus heureux de recommander leurs services de toiture.",
            author: "Jamieson P"
        },
        {
            review: "Le propriétaire de mToiture est reconnu dans l'industrie de la toiture locale comme l'un des meilleurs ! C'est un perfectionniste travailleur qui veillera à ce que le travail soit bien fait du premier coup, contrairement à d'autres qui rognent sur les raccourcis.",
            author: "L B"
        },
        {
            review: "Très bon service. Il était professionnel et le seul couvreur disposé à venir voir une petite réparation. Il a pris des photos pour me montrer les dégâts sur la toiture ainsi que la réparation. Je le recommande vivement et je l'utiliserai à nouveau lorsque mon toit sera refait.",
            author: "Stephanie A"
        },
        {
            review: "Excellent service de M Toiture. Ils sont très professionnels et les employés sont polis et travailleurs. Merci au président M. Patrick McIntyre.",
            author: "Stephanie A"
        }
    ]
}
const Index = ({ lang }) => {
    return (
        <section className="relative px-4 z-0 lg:px-[5rem] xl:px-[7.5rem] py-[6rem] bg-[#F7F7FF]" id="reviews">
            <img src={bigStar} className="absolute right-[126px] top-[209px]" alt="" />
            <img src={bigStar} className="absolute left-[136px] top-[402px]" alt="" />
            <h4 className='font-semibold text-sm leading-4 text-center text-[#48487F]'>
                {translations[lang][0]}
            </h4>
            <h2 className='text-[#0E0E1A] mt-3 font-semibold text-[2rem] leading-[2.5rem] md:text-[2.5rem] md:leading-[3rem] max-w-[32.4rem] mx-auto text-center'>
                {translations[lang][1]} <span className='text-[#48487F]'>{translations[lang][2]}</span>
            </h2>
            <div className="mt-[3.5rem] flex flex-col gap-6 items-center">
                {
                    reviews[lang].map(review => <ReviewCard key={review.review} {...review} />)
                }
            </div>
        </section>
    )
}

export default Index