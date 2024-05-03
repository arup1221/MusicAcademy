'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";
import {featuredWebinars} from "@/data/upcomingwebinars"


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
