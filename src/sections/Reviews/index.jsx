import ReviewCard from "../../components/reviewCard"
import bigStar from "../../assets/big-star.svg"

const reviews = [
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
]
const Index = () => {
    return (
        <section className="relative z-0 px-[7.5rem] py-[6rem] bg-[#F7F7FF]">
            <img src={bigStar} className="absolute right-[126px] top-[209px]" alt="" />
            <img src={bigStar} className="absolute left-[136px] top-[402px]" alt="" />
            <h4 className='font-semibold text-sm leading-4 text-center text-[#48487F]'>
                REVIEWS & TESTIMONIAL
            </h4>
            <h2 className='text-[#0E0E1A] mt-3 font-semibold text-[2.5rem] leading-[3rem] max-w-[32.4rem] mx-auto text-center'>
                Read What Our <span className='text-[#48487F]'>Customers are Saying About Us</span>
            </h2>
            <div className="mt-[3.5rem] flex flex-col gap-6 items-center">
                {
                    reviews.map(review => <ReviewCard key={review.review} {...review} />)
                }

            </div>
        </section>
    )
}

export default Index