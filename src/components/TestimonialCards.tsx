'use client'
import { musicSchoolTestimonials } from "@/data/testimonial"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";



export default function MusicSchoolTestimonialCards() {
    return (
        <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">

            <h2 className="text-4xl font-bold text-center mb-20 z-10">Hear Our Harmony: Voices of Success</h2>
            <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <InfiniteMovingCards items={musicSchoolTestimonials}
                        direction="right"
                        speed="slow"
                        pauseOnHover={true} />
                </div>
            </div>

        </div>
    )
}
