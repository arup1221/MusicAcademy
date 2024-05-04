'use client';
import Link from 'next/link';
import courseData from '../data/music_courses.json';
import { BackgroundGradient } from "./ui/background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    image: string,
}


export default function FeaturedCourses() {

    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured)

    return (

        <div className='py-12 bg-gray-900'>
            {/* // Head part */}
            <div>
                <div className='text-center'>
                    <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED COURSES</h2>
                    <p className='mt-2 ml-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn With the Best</p>
                </div>
            </div>

            {/* // Cards section ---->>( Need to add Photo but optional I will do after pushing into github with a separate branch) */}

            <div className="mt-10 mx-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {featuredCourses.map((course: Course) => (
                        <div key={course.id} className="flex justify-center">
                            <BackgroundGradient
                                className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                                <div className='flex justify-center items-center'>
                                    <Image
                                        src={course.image}
                                        alt="jordans"
                                        height="300"
                                        width="400"
                                        className="object-contain"
                                    />
                                </div>

                                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>

                                    <div className='mt-3'>
                                        {/* <Link href={`/courses/${course.slug}`}> */}
                                        <Link href={`/courses`}>

                                            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-gray-600 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                                Learn More
                                            </button>



                                        </Link>
                                    </div>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>



            {/* Bellow button part */}
            <div className='mt-20 text-center'>
                <Link href={'/courses'} >

                    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:scale-110 transition-transform duration-300">

                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            View All courses
                        </span>
                    </button>
                </Link>

            </div>

        </div>
    )
}


