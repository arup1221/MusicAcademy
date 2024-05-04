'use client';
import React from 'react'
import { AuroraBackground } from "@/components/ui/aurora-background"
import Image from "next/image";
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { musicWebinars } from '@/data/upcomingwebinars'

interface webinar {
    id: number,
    title: string,
    description: string
}

export default function webinar() {
    return (
        <div className='min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative"'>
            <div className='flex flex-col justify-center items-center'>
                <div className='text-center'>
                    <h1 className='text-4xl sm:text-5xl font-bold'>
                        All Webinars ({musicWebinars.length})
                    </h1>

                </div>


                <Image
                    src={"/webinars/female-business-executive-giving-speech.jpg"}
                    height="1000"
                    width="1000"
                    className="h-[12rem] sm:h-[28rem] w-[19rem] sm:w-[54rem] object-cover rounded-xl group-hover/card:shadow-xl mt-8"
                    alt={"webinars"}
                />

            </div>
            <div className='h-full  m-8 grid grid-cols-1 sm:grid-cols-3 gap-10'>

                {musicWebinars.map((webinar: webinar) => (

                    <BackgroundGradient key={webinar.id} className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 overflow-hidden">
                        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                            {webinar.title}
                        </p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            {webinar.description}
                        </p>
                    </BackgroundGradient>


                ))}



            </div>

        </div>

    )
}
