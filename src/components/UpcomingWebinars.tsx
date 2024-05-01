'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

const featuredWebinars = [
  {
    title: 'Understanding Music Theory',
    description:
      'Dive deep into the fundamentals of music theory and enhance your musical skills.',
    slug: 'understanding-music-theory',
    isFeatured: true,
  },
  {
    title: 'The Art of Songwriting',
    description:
      'Learn the craft of songwriting from experienced musicians and songwriters.',
    slug: 'the-art-of-songwriting',
    isFeatured: true,
  },
  {
    title: 'Mastering Your Instrument',
    description:
      'Advanced techniques to master your musical instrument of choice.',
    slug: 'mastering-your-instrument',
    isFeatured: true,
  },
  {
    title: 'Music Production Essentials',
    description:
      'Get started with music production with this comprehensive overview.',
    slug: 'music-production-essentials',
    isFeatured: true,
  },
  // Added two more webinars
  {
    title: 'Live Performance Techniques',
    description:
      'Enhance your live performance skills with expert tips and strategies.',
    slug: 'live-performance-techniques',
    isFeatured: true,
  },
  {
    title: 'Digital Music Marketing',
    description:
      'Learn how to promote your music effectively in the digital age.',
    slug: 'digital-music-marketing',
    isFeatured: true,
  },
];

export default function UpcomingWebinars() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-4">

        {/* Heading part */}

        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="ml-2 mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>

        {/* Middle part */}
        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map(webinar => (
              {
                title: webinar.title,
                description: webinar.description,
                link: '/',

              }
            ))}
          />
        </div>


        {/* Button part */}
        <div className="mt-10 text-center">
          <Link href={"/webinars"}>
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                View All Webinars
              </div>
            </button>

          </Link>
        </div>
      </div>
    </div>
  )
}
